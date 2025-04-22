import { type Meta } from "@storybook/react"
import TableDefaultDemo from "../../demo/table-default-demo"
import TableDataDemo from "../../demo/table-data-demo"

export default {
  title: 'Example/Table',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const Variant1 = {
  name: 'Default',
  render: () => <TableDefaultDemo />
}

export const Variant2 = {
  name: 'DataTable',
  render: () => <TableDataDemo />
}
