import React from 'react'
import classNames from 'classnames'

interface IconProps extends React.HTMLAttributes<HTMLElement> {
  type: string
}

const Icon: React.FC<IconProps> = ({ className, type }) => <i className={classNames(className, 'bi', `bi-${type}`)} />

export default Icon
