import ChartDemo from "#/components/demo/chart-demo";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'QA/Chart',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const Normal: StoryObj = {
  render: () => <ChartDemo />
};