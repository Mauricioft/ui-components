import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { options } from './constants'
import styles from './Heading.module.css'

const Heading = ({ size, color, children }) => {
  return (
    <h1
      className={classnames(styles.heading, {
        [styles[`color-${color}`]]: color,
        [styles[`size-${size}`]]: size,
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
