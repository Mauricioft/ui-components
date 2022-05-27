import React from 'react'
import PropTypes from 'prop-types'
import { getWidth } from './helpers'
import './Picture.css'

const Picture = ({ src, width }) => {
  return (
    <picture className="picture">
      <img src={src} style={{ maxWidth: getWidth(width) }} />
    </picture>
  )
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Picture
