import ContextMenuDemo from "#/components/demo/contextmenu-demo.tsx"
import type { Meta } from "@storybook/react";
export default {
  title: 'Example/ContextMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <ContextMenuDemo />
};
