import PaginationDemo from "#/components/demo/pagination-demo.tsx";
import type { Meta } from '@storybook/react';
export default {
  title: 'Example/Pagination',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const Demo = {
  name: 'Demo',
  render: () => <PaginationDemo />
};