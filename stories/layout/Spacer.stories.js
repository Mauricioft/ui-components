import React from 'react'
import { Spacer } from '../../layout'

export default {
  title: 'layout/Spacer',
  component: Spacer,
  argTypes: {},
}

const SpacerTemplate = (args) => <Spacer {...args} />
const SpacerHorizontalTemplate = (args) => <Spacer.Horizontal {...args} />
const SpacerVerticalTemplate = (args) => <Spacer.Vertical {...args} />

export const Default = SpacerTemplate.bind({})
Default.args = {
  size: 'md',
  isVisible: true,
}

export const Horizontal = SpacerHorizontalTemplate.bind({})
Horizontal.args = {
  size: 'md',
  isVisible: true,
}

export const Vertical = SpacerVerticalTemplate.bind({})
Vertical.args = {
  size: 'md',
  maxHeight: 200,
  isVisible: true,
}
