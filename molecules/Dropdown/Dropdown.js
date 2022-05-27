import React from 'react'
import { Icon } from '../../atoms/Icon'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Dropdown.css'

const Dropdown = ({ value, options, onChange }) => {
  return (
    <div className={classnames('dropdown')}>
      <Icon type="angle-down" size="md" hasBackground />
      <select
        value={value}
        className={classnames('dropdown-select')}
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
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
}

Dropdown.defaultProps = {
  value: '',
  options: [],
  onChange: () => '',
}

export default Dropdown
