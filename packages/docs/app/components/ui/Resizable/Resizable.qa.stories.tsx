import ResizableDemo from "#/components/demo/resizable-demo.tsx";
import type { Meta } from '@storybook/react';
export default {
  title: 'QA/Resizable',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta;

export const Normal = {
  render: () => <ResizableDemo />
};