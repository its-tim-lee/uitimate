import type { Meta } from "@storybook/react";
import SelectDemo from "#/components/demo/select-demo.tsx";
import SelectScrollable from "#/components/demo/select-scrollable.tsx";

export default {
  title: 'Example/Select',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <SelectDemo />
};

export const Scrollable = {
  name: 'API / Scrollable',
  render: () => <SelectScrollable />
};


