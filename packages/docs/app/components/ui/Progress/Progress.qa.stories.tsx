import type { Meta } from '@storybook/react';
import ProgressStatic from '#/components/demo/progress-static';

export default {
  title: 'QA/Progress',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;


export const Static = {
  render: () => <ProgressStatic />
};
