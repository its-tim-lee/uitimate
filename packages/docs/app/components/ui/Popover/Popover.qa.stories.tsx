import PopoverOpenControl from "#/components/demo/popover-open-control.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'QA/Popover',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa', 'fullpage'],
} as Meta;

export const InitialOpen = {
  render: () => <PopoverOpenControl />
};