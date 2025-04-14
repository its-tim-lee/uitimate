import ScrollAreaDemo from "#/components/demo/scroll-area-demo.tsx"
import ScrollAreaHorizontal from "#/components/demo/scroll-area-horizontal.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/ScrollArea',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const Demo = {
  name: 'Demo',
  render: () => <ScrollAreaDemo />
};


export const Corner = {
  name: 'API / Horizontal',
  render: () => <ScrollAreaHorizontal />
};


