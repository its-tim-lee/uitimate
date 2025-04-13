import ResizableDemo from "#/components/demo/resizable-demo.tsx";
import type { Meta } from '@storybook/react';
export default {
  title: 'Example/Resizable',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Variant1 = {
  name: 'Default',
  render: () => <ResizableDemo />
};