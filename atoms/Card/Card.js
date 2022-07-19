import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { options } from './constants'
import styles from './Card.module.css'

const Card = ({
  color,
  size,
  className,
  children,
}) => {
  return (
    <div className={classnames(className, styles.card, {
      [styles[`color-${color}`]]: color,
      [styles[`size-${size}`]]: size,
    })}>
      {children}
    </div>
  )
}

Card.propTypes = {
  size: PropTypes.oneOf(options.sizes),
  color: PropTypes.oneOf(options.colors),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Card.defaultProps = {
  color: 'default',
  size: 'sm',
}

export default Card
