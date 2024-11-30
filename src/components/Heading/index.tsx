import React from 'react'
import classNames from 'classnames'

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  level?: number
  gutter?: boolean
}

const Heading: React.FC<HeadingProps> = ({ className, level = 2, children, gutter = true }) => (
  <div className={classNames('fw-bold', 'text-primary', { 'mb-5': gutter }, `h${level}`, className)}>{children}</div>
)

export default Heading
