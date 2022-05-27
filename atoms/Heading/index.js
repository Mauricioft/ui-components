import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { options } from './constants'
import './Heading.css'

const Heading = ({ size, color, children }) => {
  return (
    <h1
      className={classnames('heading', {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
      })}
    >
      {children}
    </h1>
  )
}

Heading.propTypes = {
  color: PropTypes.oneOf(options.color),
  size: PropTypes.oneOf(options.size),
  children: PropTypes.node.isRequired,
}

Heading.defaultProps = {
  color: 'default',
  size: 'md',
}

export { Heading }
