import type { Meta } from '@storybook/react';
import ProgressDemo from '#/components/demo/progress-demo';
import ProgressLoading from '#/components/demo/progress-loading';

export default {
  title: 'Example/Progress',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Demo = {
  name: 'Demo',
  render: () => <ProgressDemo />
};

export const Loading = {
  name: 'Loading',
  render: () => <ProgressLoading />
};
