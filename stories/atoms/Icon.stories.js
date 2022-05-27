import React from 'react'
import { Icon } from '../../atoms/Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {},
}

const IconTemplate = (args) => <Icon {...args} />

export const ArrowRight = IconTemplate.bind({})
ArrowRight.args = {
  type: 'arrow-right',
}

export const AngleDown = IconTemplate.bind({})
AngleDown.args = {
  type: 'angle-down',
}

export const HasBackground = IconTemplate.bind({})
HasBackground.args = {
  size: 'md',
  type: 'angle-down',
  hasBackground: true,
}
