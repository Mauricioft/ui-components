import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { options } from './constants'
import './Button.css'

const Button = ({ type, isBlock, children }) => {
  return (
    <button
      className={classnames('button', {
        [`type-${type}`]: type,
        ['is-block']: isBlock && type !== 'tertiary',
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
