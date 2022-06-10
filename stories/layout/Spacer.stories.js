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

export const None = SpacerTemplate.bind({})
None.args = {
  size: 'none',
  isVisible: true,
}

export const ExtraSmall = SpacerTemplate.bind({})
ExtraSmall.args = {
  size: 'xs',
  isVisible: true,
}

export const Small = SpacerTemplate.bind({})
Small.args = {
  size: 'sm',
  isVisible: true,
}

export const Medium = SpacerTemplate.bind({})
Medium.args = {
  size: 'md',
  isVisible: true,
}
export const Large = SpacerTemplate.bind({})
Large.args = {
  size: 'lg',
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
