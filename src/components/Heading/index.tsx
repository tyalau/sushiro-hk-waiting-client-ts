import React from 'react'
import classNames from 'classnames'

type HeadingProps = React.HTMLAttributes<HTMLDivElement> & {
  level?: number
  gutter?: boolean
}

const Heading = ({ className, level = 2, children, gutter = true }: HeadingProps) => (
  <div className={classNames('fw-bold', 'text-primary', { 'mb-5': gutter }, `h${level}`, className)}>{children}</div>
)

export default Heading
