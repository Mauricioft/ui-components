import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { getSize } from './helpers'
import { Horizontal } from '../Horizontal'
import { Vertical } from '../Vertical'
import styles from './Spacer.module.css'

const Spacer = ({ size, isVisible }) => {
  return (
    <div
      className={classnames(styles.spacer, {
        [styles['is-visible']]: isVisible,
      })}
      style={{
        display: 'inline-block',
        width: getSize(size),
        height: getSize(size),
      }}
    />
  )
}

Spacer.propTypes = {
  size: PropTypes.string,
  isVisible: PropTypes.bool,
}

Spacer.defaultProps = {
  size: 'sm',
  isVisible: false,
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
