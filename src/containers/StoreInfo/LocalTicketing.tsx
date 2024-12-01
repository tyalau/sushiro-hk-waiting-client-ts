import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'
import Icon from '../../components/Icon'
import { getFlagVariant } from '../../service/map'

interface LocalTicketingProps {
  t: TFunction
  localTicketing: boolean
  open: boolean
}

const LocalTicketing: React.FC<LocalTicketingProps> = ({ t, localTicketing, open }) => (
  <div className={`text-${getFlagVariant(localTicketing && open)}`}>
    <div className="info-title">{t('localTicketingStatus')}</div>
    <Icon type={localTicketing && open ? 'check-lg' : 'x'} className="display-1" />
    <div>{t('localTicketing', { returnObjects: true })[+(localTicketing && open)]}</div>
  </div>
)

export default withTranslation()(LocalTicketing)
