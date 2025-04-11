import type { Meta } from '@storybook/react';

export default {
  title: 'Example/Figma to Code',
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
  render: () => <div>Demo</div>
};
