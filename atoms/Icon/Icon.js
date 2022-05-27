import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { options } from './constants'
import { mapIcon, mapSize } from './helpers'
import { Picture } from '../Picture'
import './Icon.css'

const Icon = ({ type, size, hasBackground }) => {
  return (
    <div
      className={classnames('icon', {
        ['has-background']: hasBackground,
      })}
      style={{ width: mapSize(size), height: mapSize(size) }}
    >
      <Picture src={mapIcon(type)} width={mapSize(size)} />
    </div>
  )
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(options.sizes),
  hasBackground: PropTypes.bool,
}

Icon.defaultProps = {
  size: 'sm',
  type: 'primary',
  hasBackground: false,
}

export default Icon
