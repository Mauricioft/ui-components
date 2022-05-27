import React from 'react'
import { Button } from '../../atoms/Button'
import { options } from '../../atoms/Button/constants'
import { getOptionsArgTypes } from '../../helpers/storybook'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: getOptionsArgTypes(options.type),
    backgroundColor: {
      control: 'color',
    },
  },
}

const ButtonTemplate = (args) => <Button {...args} />

export const Primary = ButtonTemplate.bind({})
Primary.args = {
  type: 'primary',
  children: 'Primary',
}

export const Secondary = ButtonTemplate.bind({})
Secondary.args = {
  type: 'secondary',
  children: 'Secondary',
}

export const Tertiary = ButtonTemplate.bind({})
Tertiary.args = {
  type: 'tertiary',
  children: 'Tertiary',
}
