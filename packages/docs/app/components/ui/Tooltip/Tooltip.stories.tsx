import TooltipInstant from "#/components/demo/tooltip-instant.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

} as Meta

export const INSTANT = {
  name: 'INSTANT',
  render: () => <TooltipInstant />
};