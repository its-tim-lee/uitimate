import RadioGroupDemo from "#/components/demo/radio-group-demo.tsx"
import type { Meta } from '@storybook/react';
export default {
  title: 'Example/RadioGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} as Meta

export const Variant1 = {
  name: 'Default',
  render: () => <RadioGroupDemo />
};
