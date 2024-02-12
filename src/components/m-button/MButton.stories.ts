import type { Meta, StoryObj } from '@storybook/vue3'

import MButton from './MButton.vue'

const meta = {
  title: 'Base/MButton',
  component: MButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    variant: { control: 'select', options: ['primary', 'secondary'] },
  },
} satisfies Meta<typeof MButton>

export default meta
type Story = StoryObj<typeof meta>

export const Secondary: Story = {
  render: (_args, { argTypes }) => ({
    components: { MButton },
    props: Object.keys(argTypes),
    template: '<MButton v-bind="$props" v-on="$props">Testing</MButton>',
  }),
  args: {},
}

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
