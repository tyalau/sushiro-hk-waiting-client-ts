import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'
import Icon from '../../components/Icon'
import { getFlagVariant } from '../../service/map'

type StoreOpenProps = {
  t: TFunction
  open: boolean
}

const StoreOpen = ({ t, open }: StoreOpenProps) => (
  <div className={`text-${getFlagVariant(open)}`}>
    <Icon className="mr-1" type={`door-${open ? 'open' : 'closed'}`} />
    <small>{t('open', { returnObjects: true })[+open]}</small>
  </div>
)

export default withTranslation()(StoreOpen)
