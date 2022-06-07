import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { options } from './constants'
import styles from './Button.module.css'

const Button = ({ type, isBlock, children }) => {
  return (
    <button
      className={classnames(styles.button, {
        [styles[`type-${type}`]]: type,
        [styles['is-block']]: isBlock && type !== 'tertiary',
      })}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(options.type),
  isBlock: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  type: 'primary',
  isBlock: true,
}

export default Button
