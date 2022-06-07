import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getWidth } from './helpers'
import styles from './Picture.module.css'

const Picture = ({ src, width }) => {
  return (
    <picture className={classnames(styles.picture)}>
      <img src={src} style={{ maxWidth: getWidth(width) }} />
    </picture>
  )
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default Picture
