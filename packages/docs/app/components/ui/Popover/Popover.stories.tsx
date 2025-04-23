import PopoverDemo from "#/components/demo/popover-demo.tsx";
import PopoverOpenControl from "#/components/demo/popover-open-control.tsx";
import PopoverCustomizedPosition from "#/components/demo/popover-customized-position.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/Popover',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const Variant1 = {
  name: 'API / Open initially',
  render: () => <PopoverOpenControl />
};

export const Variant2 = {
  name: 'API / Customized Popover Position',
  render: () => <PopoverCustomizedPosition />
};

export const Demo = {
  name: 'Demo',
  render: () => <PopoverDemo />
};