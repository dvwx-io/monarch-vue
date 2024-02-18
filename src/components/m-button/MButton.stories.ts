import type { Meta, StoryObj } from '@storybook/vue3'

import MButton from './MButton.vue'

const meta = {
  title: 'Base/MButton',
  parameters: {
    slots: {
      default: {
        description: 'Content',
        template: `{{ args.default }}`,
      },
    },
  },
  component: MButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      defaultValue: 'secondary',
    },
  },
} satisfies Meta<typeof MButton>

export default meta
type Story = StoryObj<typeof meta>

export const Secondary: Story = {
  args: {},
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
