import TabsPill from "#/components/demo/tabs-pill.tsx";
import TabsUnderline from "#/components/demo/tabs-demo.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'QA/Tabs',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const Pill = {
  render: () => <TabsPill />
};

export const Underline = {
  render: () => <TabsUnderline />
};