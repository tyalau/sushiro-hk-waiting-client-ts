import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import { withTranslation, TFunction } from 'react-i18next'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { setStoreId, setShowInfo } from '../../reducers/storeMap'
import StoreOpen from './StoreOpen'
import WaitingGroup from './WaitingGroup'
import LocalTicketing from './LocalTicketing'
import Icon from '../../components/Icon'
import { useGetStoreListQueryStateResult, useGetStoreListQuerySubscription } from '../../service/api/store'
import { getDisplayTime } from '../../service/map'

type StoreInfoProps = {
  t: TFunction
  mobile?: boolean
}

const StoreInfo = ({ t, mobile }: StoreInfoProps) => {
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(setShowInfo(false))
    dispatch(setStoreId(null))
  }
  const { isSuccess, data, isLoading, isFetching } = useGetStoreListQueryStateResult()
  const { storeId, showInfo } = useSelector((state: StoreState) => state.storeMap)
  const { refetch } = useGetStoreListQuerySubscription()
  const stores = data?.data
  if (isSuccess && storeId !== null && stores) {
    const info = _.find(stores, { id: storeId }) as Store
    const { name, address, open, waitingGroup, localTicketing } = info
    return (
      <Offcanvas
        id="info-container"
        show={showInfo}
        onHide={handleClose}
        className={mobile ? 'd-flex d-md-none' : 'd-none d-md-flex'}
        scroll
        backdrop={false}
        placement={mobile ? 'bottom' : 'end'}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{mobile ? name : ' '}</Offcanvas.Title>
        </Offcanvas.Header>
        <Stack direction="vertical" gap={mobile ? 3 : 4} as={Offcanvas.Body} className="align-items-center text-center">
          <div>
            {!mobile && <h4 className="fw-bold">{name}</h4>}
            <div className="text-secondary">{address}</div>
            <div>
              <StoreOpen open={open} />
            </div>
          </div>
          <div id="info-details" className="d-flex flex-md-column">
            <WaitingGroup waitingGroup={waitingGroup} open={open} />
            <LocalTicketing localTicketing={localTicketing} open={open} />
          </div>
          <div className="text-secondary">
            <div>{getDisplayTime(data.timestamp)}</div>
            <Button variant="link" onClick={refetch} className="refresh-btn" disabled={isLoading || isFetching}>
              <Icon type="arrow-clockwise" />
              {t('update')}
            </Button>
          </div>
          <div className="align-self-baseline align-self-md-center">
            <ul>
              <li>{t('remark')}</li>
            </ul>
          </div>
        </Stack>
      </Offcanvas>
    )
  }
  return null
}

export default withTranslation()(StoreInfo)
