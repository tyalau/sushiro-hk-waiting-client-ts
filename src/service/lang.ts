import i18n from '../i18n'

export const i18nLangToLangAttr: Record<string, string> = {
  ja: 'ja',
  'zh-HK': 'zh',
}

export const handleDOMChange = (lang: string) => {
  document.querySelector('html')?.setAttribute('lang', i18nLangToLangAttr[lang])
  const titleElement = document.querySelector('title')
  if (titleElement) {
    titleElement.innerHTML = i18n.t('appName')
  }
}

export default {
  i18nLangToLangAttr,
  handleDOMChange,
}
