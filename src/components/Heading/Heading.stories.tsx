import type { Meta, StoryObj } from '@storybook/react'

import Heading from '.'

const meta = {
  component: Heading,
  argTypes: {
    level: {
      control: { type: 'select' },
      options: Array.from({ length: 7 }, (_, i) => i + 1),
    },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    gutter: false,
    level: 1,
    children: 'Heading',
  },
}
