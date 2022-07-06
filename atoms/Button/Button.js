import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { options } from './constants'
import styles from './Button.module.css'

const Button = ({
	type,
	isBlock,
	children,
	className,
	onClick
}) => {
  return (
    <button
      className={classnames(className, styles.button, {
        [styles[`type-${type}`]]: type,
        [styles['is-block']]: isBlock && type !== 'tertiary',
      })}
			onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(options.type),
  isBlock: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'primary',
  isBlock: true,
	onClick: () => {}
}

export default Button
