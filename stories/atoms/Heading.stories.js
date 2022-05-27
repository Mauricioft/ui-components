import React from 'react'
import { Heading } from '../../atoms/Heading'
import { options } from '../../atoms/Heading/constants'
import { getOptionsArgTypes } from '../../helpers/storybook'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    size: getOptionsArgTypes(options.size),
    color: getOptionsArgTypes(options.color),
    backgroundColor: {
      control: 'color',
    },
  },
}

const HeadingTemplate = (args) => <Heading {...args} />

export const Primary = HeadingTemplate.bind({})
Primary.args = {
  size: 'md',
  color: 'primary',
  children: 'Heading',
}

export const Medium = HeadingTemplate.bind({})
Medium.args = {
  children: 'Heading',
}

export const Small = HeadingTemplate.bind({})
Small.args = {
  size: 'sm',
  children: 'Heading',
}

export const ExtraSmall = HeadingTemplate.bind({})
ExtraSmall.args = {
  size: 'xs',
  children: 'Heading',
}
