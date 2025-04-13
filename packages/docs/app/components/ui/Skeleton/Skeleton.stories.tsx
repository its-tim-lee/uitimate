import SkeletonDemo from "#/components/demo/skeleton-demo.tsx";
import type { Meta } from '@storybook/react';
export default {
  title: 'Example/Skeleton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Variant1 = {
  name: 'Card',
  render: () => <SkeletonDemo />
};


