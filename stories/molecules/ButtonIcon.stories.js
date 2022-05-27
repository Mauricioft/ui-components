import React from 'react'
import { ButtonIcon } from '../../molecules/ButtonIcon'

export default {
  title: 'Molecules/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
}

const ButtonIconTemplate = (args) => <ButtonIcon {...args} />

export const Secondary = ButtonIconTemplate.bind({})
Secondary.args = {
  type: 'secondary',
  icon: 'arrow-right',
  children: 'Secondary',
}
