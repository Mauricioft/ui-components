import React from 'react'
import { Picture } from '../../atoms/Picture'

export default {
  title: 'Atoms/Picture',
  component: Picture,
  argTypes: {},
}

const PictureTemplate = (args) => <Picture {...args} />

export const Default = PictureTemplate.bind({})
Default.args = {
  src: 'https://placeimg.com/240/480/any',
  width: 240,
}

export const IsRounded = PictureTemplate.bind({})
IsRounded.args = {
  src: 'https://placeimg.com/250/250/people',
  isRounded: true,
  width: 250,
}
