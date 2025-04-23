import PaginationDemo from "#/components/demo/pagination-demo.tsx";
import type { Meta } from '@storybook/react';
export default {
  title: 'QA/Pagination',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const Normal = {
  render: () => <PaginationDemo />
};