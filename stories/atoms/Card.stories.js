import React from 'react'
import { Card } from '../../atoms/Card'
import { options } from '../../atoms/Card/constants'
import { getOptionsArgTypes } from '../../helpers/storybook'

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    size: getOptionsArgTypes(options.sizes),
    backgroundColor: {
      control: 'color',
    },
  },
}

export const Default = () => <Card>Default Card</Card>

export const Colors = () => (
	<>
		<Card color='primary'>Primary Card</Card>
		<Card color='secondary'>Secondary Card</Card>
	</>
)
