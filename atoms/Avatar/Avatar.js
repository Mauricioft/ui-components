import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Picture } from '../Picture'
import { mapSize } from './helpers'
import { options } from './constants'
import styles from './Avatar.module.css'

const Avatar = ({
	src,
	size,
	isRounded,
	className,
}) => {
	return (
		<div className={classnames(className, styles.avatar)}>
			<Picture
				src={src}
				isRounded={isRounded}
				height={mapSize(size)}
				width={mapSize(size)}
			/>
		</div>
	)
}

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  isRounded: PropTypes.bool,
  size: PropTypes.oneOf(options.sizes),
}

Avatar.defaultProps = {
	size: 'md',
	isRounded: true
}

export default Avatar
