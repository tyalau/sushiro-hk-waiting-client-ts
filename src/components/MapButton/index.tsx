import React from 'react'
import Button, { ButtonProps } from 'react-bootstrap/Button'
import classNames from 'classnames'

interface MapButtonProps extends ButtonProps {
  className?: string // Optional className for custom styling
}

const MapButton: React.FC<MapButtonProps> = ({ children, className, ...props }) => (
  <Button className={classNames('rounded-pill', 'fw-bold', className)} size="sm" {...props}>
    {children}
  </Button>
)

export default MapButton
