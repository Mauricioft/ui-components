import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { getSize } from './helpers'
import './Spacer.css'

const Vertical = ({ size, maxHeight, isVisible }) => {
  return (
    <div
      className={classnames('spacer', {
        ['is-visible']: isVisible,
      })}
      style={{
        display: 'block',
        width: getSize(size),
        height: '100vh',
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
  size: 'sm',
  isVisible: false,
  maxHeight: '100%',
}

export default Vertical
