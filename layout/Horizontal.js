import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { getSize } from './helpers'
import './Spacer.css'

const Horizontal = ({ size, isVisible }) => {
  return (
    <div
      className={classnames('spacer', {
        ['is-visible']: isVisible,
      })}
      style={{
        display: 'block',
        width: '100%',
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
  size: 'sm',
  isVisible: false,
}

export default Horizontal
