import { useState } from 'react'
import { Container, Spinner, Button, Stack } from 'react-bootstrap'
import { withTranslation, TFunction } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import ReactDOMServer from 'react-dom/server'
import _ from 'lodash'
import { Loader } from '@googlemaps/js-api-loader'
import Marker from '../../components/Marker'
import Icon from '../../components/Icon'
import { useGetStoreListQuery, useGetStoreListQuerySubscription } from '../../service/api/store'
import config from '../../config'
import { setStoreId, setShowInfo } from '../../reducers/storeMap'
import { getTier, getDisplayTime, getCenter, getBounds } from '../../service/map'
import MapFilter from './MapFilter'
import StoreInfo from '../StoreInfo'

type MapContainerProps = {
  t: TFunction
}

const MapContainer = ({ t }: MapContainerProps) => {
  const { isSuccess, isError, data, isFetching, status } = useGetStoreListQuery()
  const { refetch } = useGetStoreListQuerySubscription()
  const dispatch = useDispatch()
  const { storeId, selectedTiers } = useSelector((state: StoreState) => state.storeMap)
  const [zoom, setZoom] = useState<number>(config.map.defaultZoom)
  const [mapCenter, setMapCenter] = useState<google.maps.LatLng>()
  let hasMapError = false
  let mapLoaded = false
  const handleMapError = (e: any) => {
    console.error(e)
    hasMapError = true
  }
  const success = isSuccess && status === 'fulfilled'
  let stores = data?.data
  if (success && stores) {
    let map: google.maps.Map | undefined
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
      version: 'weekly',
      language: config.map.language,
    })
    const center = getCenter(stores)
    const bounds = getBounds(stores)
    const mapOptions = {
      center: mapCenter || center,
      zoom,
      clickableIcons: false,
      mapId: 'WAITING_GROUPS',
      disableDefaultUI: true,
      zoomControl: true,
      restriction: {
        latLngBounds: bounds,
        strictBounds: false,
      },
    }
    loader
      .importLibrary('maps')
      .then(({ Map }) => {
        if (document.getElementById('map') !== null) {
          map = new Map(document.getElementById('map') as HTMLElement, mapOptions)
          if (storeId !== null) {
            map.setZoom(config.map.markerZoom)
            const store = _.find(stores, { id: storeId })
            if (store) {
              const { latitude, longitude } = store
              map.panTo({ lat: latitude, lng: longitude })
            }
          }
          map.addListener('zoom_changed', () => {
            const zoom = map?.getZoom()
            if (zoom) setZoom(zoom)
          })
          map.addListener('dragend', () => {
            const center = map?.getCenter()
            if (center) setMapCenter(center)
          })
        }
      })
      .catch(handleMapError)
    loader
      .importLibrary('marker')
      .then(({ AdvancedMarkerElement }) => {
        let marker
        stores = _.filter(stores, ({ waitingGroup }) => {
          const tier = getTier(waitingGroup)
          return selectedTiers.includes(tier)
        })
        _.each(stores, (store) => {
          const { latitude, longitude, waitingGroup, open, localTicketing } = store
          const content = document.createElement('div')
          content.innerHTML = ReactDOMServer.renderToString(
            <Marker waitingGroup={waitingGroup} open={open} localTicketing={localTicketing} />
          )
          marker = new AdvancedMarkerElement({
            map,
            position: { lat: latitude, lng: longitude },
            content,
          })
          marker.addListener('click', () => {
            dispatch(setShowInfo(true))
            dispatch(setStoreId(store.id))
          })
        })
      })
      .catch(handleMapError)
    mapLoaded = true
  }
  const { showInfo } = useSelector((state: StoreState) => state.storeMap)
  const error = hasMapError || isError
  const loading = !mapLoaded || isFetching
  const getStatus = () => {
    if (success && mapLoaded && data?.timestamp) return t('lastUpdated', { timestamp: getDisplayTime(data?.timestamp) })
    if (error) return t('error')
    return null
  }
  return (
    <Stack id="map-container" direction="vertical">
      <div id="map-wrapper" className={classNames({ error })}>
        <div id="map" className={classNames({ loading: loading && !error, shrink: showInfo, error })} />
        {loading && !error && (
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <Spinner animation="border" variant="secondary" />
            </div>
          </div>
        )}
        <StoreInfo />
        <StoreInfo mobile />
        <MapFilter />
      </div>
      <Stack
        as={Container}
        fluid
        direction="horizontal"
        className={`justify-content-end small text-end text-${error ? 'danger' : 'success'}`}
      >
        <div>{getStatus()}</div>
        <Button variant="link" className="link-primary refresh-btn" onClick={refetch} size="sm" disabled={isFetching}>
          <Icon type="arrow-clockwise" className="fs-6" />
        </Button>
      </Stack>
    </Stack>
  )
}

export default withTranslation()(MapContainer)
