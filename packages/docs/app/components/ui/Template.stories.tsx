import type { Meta } from '@storybook/react';
import ComponentDemo from "#/components/demo/component-demo.tsx";

export default {
  title: 'Example/Component',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  excludeStories: [], // or exclude all: /.*$/
} as Meta;

export const Demo = {
  name: 'Demo',
  render: () => <ComponentDemo />
};