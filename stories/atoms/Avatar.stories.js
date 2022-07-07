import React from 'react'
import { Avatar } from '../../atoms/Avatar'
import { options } from '../../atoms/Avatar/constants'
import { getOptionsArgTypes } from '../../helpers/storybook'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
    backgroundColor: {
      control: 'color',
    },
  },
}

const AvatarTemplate = (args) => <Avatar {...args} />

export const Small = AvatarTemplate.bind({})
Small.args = {
	size: 'sm',
	src: 'https://placeimg.com/250/250/people',
}

export const Medium = AvatarTemplate.bind({})
Medium.args = {
  size: 'md',
	src: 'https://placeimg.com/250/250/people',
}

export const Large = AvatarTemplate.bind({})
Large.args = {
	size: 'lg',
	src: 'https://placeimg.com/250/250/people',
}
