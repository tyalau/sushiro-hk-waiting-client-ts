import 'moment/locale/ja'
import 'moment/locale/zh-tw'
import _ from 'lodash'

import i18n from '../i18n'
import config from '../config'
import moment from 'moment-timezone'

const i18nLangToLocale: Record<string, string> = {
  ja: 'ja',
  'zh-HK': 'zh-tw',
}

export const getCenter = (stores: Store[]) => ({
  lat: _.meanBy(stores, 'latitude'),
  lng: _.meanBy(stores, 'longitude'),
})

export const getBounds = (stores: Store[]) => {
  const { boundPadding } = config.map
  return {
    north: (_.maxBy(stores, 'latitude')?.latitude || 0) + boundPadding,
    south: (_.minBy(stores, 'latitude')?.latitude || 0) - boundPadding,
    west: (_.minBy(stores, 'longitude')?.longitude || 0) - boundPadding,
    east: (_.maxBy(stores, 'longitude')?.longitude || 0) + boundPadding,
  }
}

export const getTier = (waitingGroup: number) => {
  const { tier } = config
  let variant = 0
  for (let i = tier.length - 1; i > 0; i--) {
    if (waitingGroup >= tier[i]) {
      variant = i
      break
    }
  }
  return variant
}

export const getTierVariant = (waitingGroup: number) => {
  const variant = getTier(waitingGroup)
  return `tier-${variant}`
}

export const getFlagVariant = (flag: boolean) => (flag ? 'on' : 'off')

export const getDisplayTime = (timestamp: number) => {
  const currentDT = moment(timestamp)
  currentDT.locale(i18nLangToLocale[i18n.language])
  return currentDT.tz(config.momentTimezone).format(i18n.t('dateFormat'))
}

export default {
  getTier,
  getTierVariant,
  getFlagVariant,
  getDisplayTime,
  getCenter,
  getBounds,
}
