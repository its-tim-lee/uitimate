import RadioGroupDemo from "#/components/demo/radio-group-demo.tsx"
import type { Meta } from '@storybook/react';
export default {
  title: 'QA/RadioGroup',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa']
} as Meta

export const Normal = {
  render: () => <RadioGroupDemo />
};
