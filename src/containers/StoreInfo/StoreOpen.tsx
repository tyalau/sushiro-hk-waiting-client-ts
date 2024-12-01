import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'
import Icon from '../../components/Icon'
import { getFlagVariant } from '../../service/map'

interface StoreOpenProps {
  t: TFunction
  open: boolean
}

const StoreOpen: React.FC<StoreOpenProps> = ({ t, open }) => (
  <div className={`text-${getFlagVariant(open)}`}>
    <Icon className="mr-1" type={`door-${open ? 'open' : 'closed'}`} />
    <small>{t('open', { returnObjects: true })[+open]}</small>
  </div>
)

export default withTranslation()(StoreOpen)
