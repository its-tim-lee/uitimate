import type { Meta } from '@storybook/react';
import AvatarDemo from '#/components/demo/avatar-demo.tsx';

export default {
  title: 'Example/Avatar',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Demo = {
  name: 'Demo',
  render: () => <AvatarDemo />
};
