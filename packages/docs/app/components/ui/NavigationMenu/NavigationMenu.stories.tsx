
import NavigationMenuDemo from "#/components/demo/navigationmenu-demo.tsx"
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/NavigationMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Variant1 = {
  name: 'Default',
  render: () => <NavigationMenuDemo />
};