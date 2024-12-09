import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'
import Icon from '../../components/Icon'

import { getTierVariant, getFlagVariant } from '../../service/map'

type WaitingGroupProps = {
  t: TFunction
  waitingGroup: number
  open: boolean
}

const WaitingGroup = ({ t, waitingGroup, open }: WaitingGroupProps) => (
  <div className={`text-${open ? getTierVariant(waitingGroup) : getFlagVariant(open)}`}>
    <div className="info-title">{t('waitingGroup')}</div>
    <div>
      <Icon type="people-fill" className="display-3" />
    </div>
    {open && waitingGroup > 0 ? (
      <div dangerouslySetInnerHTML={{ __html: t('group', { waitingGroup }) }} />
    ) : (
      <div>
        <Icon type="dash" className="display-5" />
      </div>
    )}
  </div>
)

export default withTranslation()(WaitingGroup)
