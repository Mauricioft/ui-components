import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { options } from './constants'
import { mapIcon, mapSize } from './helpers'
import { Picture } from '../Picture'
import styles from './Icon.module.css'

const Icon = ({
	id,
	className,
	type,
	size,
	hasBackground
}) => {
  return (
    <div
			id={id}
      className={classnames(className, styles.icon, {
        [styles['has-background']]: hasBackground,
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
	id: PropTypes.string,
  className: PropTypes.string,
}

Icon.defaultProps = {
  size: 'sm',
  type: 'primary',
  hasBackground: false,
}

export default Icon
