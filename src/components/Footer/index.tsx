import React from 'react'
import { withTranslation, TFunction } from 'react-i18next'
import { Stack, Container } from 'react-bootstrap'

type FooterProps = {
  t: TFunction
}

const Footer = ({ t }: FooterProps) => (
  <Stack
    as={Container}
    gap={2}
    fluid
    direction="vertical"
    className="small fw-bold py-2 flex-md-row align-items-center justify-content-end"
  >
    <a href="/disclaimer" target="_blank" className="link">
      {t('disclaimer.title')}
    </a>
    <div>{`©${new Date().getFullYear()} ${t('appName')}`}</div>
    <div>All rights reserved.</div>
  </Stack>
)

export default withTranslation()(Footer)
