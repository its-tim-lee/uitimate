import PaginationDemo from "../../demo/pagination-demo.tsx";

export default {
  title: 'Example/Pagination',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Demo = {
  name: 'Demo',
  render: () => <PaginationDemo />
};