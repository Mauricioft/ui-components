import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import styles from './Input.module.css'

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      className={classnames(styles.input)}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['text']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  onChange: () => '',
}

export default Input
