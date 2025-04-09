import type { Meta } from '@storybook/react';
import ComponentDemo from "#/components/demo/component-demo.tsx";

export default {
  title: 'Example/Component',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const Demo = {
  name: 'Demo',
  render: () => <ComponentDemo />
};