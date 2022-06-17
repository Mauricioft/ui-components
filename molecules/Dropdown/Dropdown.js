import React from 'react'
import { Icon } from '../../atoms/Icon'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './Dropdown.module.css'

const Dropdown = ({
	id,
	className,
	value,
	options,
	onChange
}) => {
  return (
    <div
			id={id}
			className={classnames(className, styles.dropdown)}
		>
      <Icon
				className={styles['dropdown-icon']}
				type="angle-down"
				size="md"
				hasBackground
			/>
      <select
        value={value}
        className={styles['dropdown-select']}
        onChange={onChange}
      >
        {options.map(({ text, value }) => (
          <option key={text} value={value}>
            {text}
          </option>
        ))}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
	onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
		PropTypes.shape({
			text: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
	value: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
}

Dropdown.defaultProps = {
  value: '',
  options: [],
}

export default Dropdown
