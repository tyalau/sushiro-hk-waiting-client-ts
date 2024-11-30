import React from 'react'
import MapButton from '../MapButton'
import Icon from '../Icon'
import { getTierVariant } from '../../service/map'

interface MarkerProps {
  waitingGroup: number
  open: boolean
  localTicketing: boolean
}

const Marker: React.FC<MarkerProps> = ({ waitingGroup, open, localTicketing }) => {
  let variant
  if (open) {
    variant = getTierVariant(waitingGroup)
  } else {
    variant = 'closed'
  }
  if (open && !localTicketing) {
    variant = `${variant}-blocked`
  }
  return (
    <MapButton className="marker" variant={variant}>
      {open ? waitingGroup : <Icon type="x-circle" />}
    </MapButton>
  )
}

export default Marker
