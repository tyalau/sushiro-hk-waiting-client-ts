import { withTranslation, TFunction } from 'react-i18next'
import Stack from 'react-bootstrap/Stack'
import Heading from '../Heading'

type AboutProps = {
  t: TFunction
}

const About = ({ t }: AboutProps) => {
  const disclaimers = t('about.disclaimer', { returnObjects: true }) as string[]
  return (
    <div className="page-container">
      <Stack className="text-center">
        <Heading>{t('about.title', { appName: t('appName') })}</Heading>
        <div>{t('about.description')}</div>
      </Stack>
      <ul className="text-secondary">
        {disclaimers.map((disclaimer) => (
          <li key={disclaimer}>{disclaimer}</li>
        ))}
      </ul>
    </div>
  )
}

export default withTranslation()(About)
