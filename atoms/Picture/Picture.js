import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getWidth } from './helpers'
import styles from './Picture.module.css'

const Picture = ({
	src,
	width,
	isRounded,
	height
}) => {
  return (
    <picture className={classnames(styles.picture, {
			[styles['is-rounded']]: isRounded,
		})}>
      <img
				src={src}
				style={{ maxWidth: getWidth(width), height }}
			/>
    </picture>
  )
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  isRounded: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

Picture.defaultProps = {
	height: 'auto',
	isRounded: false
}

export default Picture
