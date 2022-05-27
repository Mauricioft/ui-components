import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../atoms/Button'
import { options } from '../../atoms/Button/constants'
import { Icon } from '../../atoms/Icon'

const ButtonIcon = ({ type, icon, children }) => {
  return (
    <Button type={type}>
      {children}&nbsp;
      <Icon type={icon} />
    </Button>
  )
}

ButtonIcon.propTypes = {
  type: PropTypes.oneOf(options.type),
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

ButtonIcon.defaultProps = {
  type: 'secondary',
}

export default ButtonIcon
