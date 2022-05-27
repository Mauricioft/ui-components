import React from 'react'
import { Input } from '../../atoms/Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
}

const InputTemplate = (args) => <Input {...args} />

export const Primary = InputTemplate.bind({})
Primary.args = {
  placeholder: 'Nombres',
  onChange: () => {},
}
