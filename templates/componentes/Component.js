import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Component.module.css'

const Component = ({
	children,
}) => {
	return (
		<div className={classnames(styles.component)}>
			{ children }
		</div>
	)
}

Component.propTypes = {
	children: PropTypes.node.isRequired,
}

Component.defaultProps = {
}

export default Component
