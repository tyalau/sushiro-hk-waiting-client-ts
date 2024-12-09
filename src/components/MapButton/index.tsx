import React from 'react'
import Button, { ButtonProps } from 'react-bootstrap/Button'
import classNames from 'classnames'

type MapButtonProps = ButtonProps

const MapButton = ({ children, className, ...props }: MapButtonProps) => (
  <Button className={classNames('rounded-pill', 'fw-bold', className)} size="sm" {...props}>
    {children}
  </Button>
)

export default MapButton
