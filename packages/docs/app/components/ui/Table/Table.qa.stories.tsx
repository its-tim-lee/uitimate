import { type Meta } from "@storybook/react"
import TableDefaultDemo from "../../demo/table-default-demo"
import TableDataDemo from "../../demo/table-data-demo"

export default {
  title: 'QA/Table',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const Normal = {
  render: () => <TableDefaultDemo />
}