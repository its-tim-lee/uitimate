import type { Meta } from "@storybook/react";
import DrawerDemo from "#/components/demo/drawer-demo.tsx";
export default {
  title: 'Example/Drawer',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const Variant1 = {
  name: 'Default',
  render: () => <DrawerDemo />
};
