import type { Meta, StoryObj } from '@storybook/react'

import MapButton from '.'

const meta = {
  component: MapButton,
  argTypes: {
    className: { control: false },
    as: { control: false },
    type: { control: false },
    variant: {
      control: { type: 'select' },
      options: Array.from({ length: 7 }, (_, i) => `tier-${i}`),
    },
  },
} satisfies Meta<typeof MapButton>

export default meta

type Story = StoryObj<typeof meta>

export const Marker: Story = {
  args: {
    className: 'marker',
    variant: 'tier-0',
    children: '999',
  },
}

export const MapFilter: Story = {
  args: {
    variant: 'tier-0',
    as: 'input',
    value: 'No Wait',
    type: 'button',
  },
}
