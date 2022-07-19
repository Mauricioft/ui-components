import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { getSize } from './helpers'
import styles from './Horizontal.module.css'

const Horizontal = ({ size, isVisible }) => {
  return (
    <div
      className={classnames(styles.spacer, styles.horizontal, {
        [styles['is-visible']]: isVisible,
      })}
      style={{
        height: getSize(size),
      }}
    />
  )
}

Horizontal.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
}

Horizontal.defaultProps = {
  size: 'none',
  isVisible: false,
}

export default Horizontal
