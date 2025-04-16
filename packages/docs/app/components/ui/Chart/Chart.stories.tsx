import ChartDemo from "#/components/demo/chart-demo";
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/Chart',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const Demo = {
  name: 'Demo',
  render: () => <ChartDemo />
};