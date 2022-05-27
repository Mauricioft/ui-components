import React from 'react'
import { Dropdown } from '../../molecules/Dropdown'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  argTypes: {},
}

const DropdownTemplate = (args) => <Dropdown {...args} />

export const Default = DropdownTemplate.bind({})
Default.args = {
  icon: 'arrow-right',
  value: '9:00 AM',
  options: [
    {
      text: '8:00 AM',
      value: 800,
    },
    {
      text: '9:00 AM',
      value: 900,
    },
    {
      text: '10:00 AM',
      value: 1000,
    },
  ],
  onChange: () => {}, // TODO: Remove onChange static
}
