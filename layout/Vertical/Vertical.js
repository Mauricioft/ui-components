import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { getSize } from './helpers'
import styles from './Vertical.module.css'

const Vertical = ({ size, maxHeight, isVisible }) => {
  return (
    <div
      className={classnames(styles.spacer, styles.vertical, {
        [styles['is-visible']]: isVisible,
      })}
      style={{
        width: getSize(size),
        maxHeight,
      }}
    />
  )
}

Vertical.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Vertical.defaultProps = {
  size: 'none',
  isVisible: false,
  maxHeight: '100%',
}

export default Vertical
