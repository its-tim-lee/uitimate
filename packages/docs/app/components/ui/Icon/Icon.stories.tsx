import IconDemo from "#/components/demo/icon-demo.tsx";
import IconSize from "#/components/demo/icon-size.tsx";
import type { Meta } from "@storybook/react";


export default {
  title: 'Example/Icon',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta;

export const DEMO = {
  name: 'DEMO',
  render: () => IconDemo()
}

export const SIZE = {
  name: 'API / Size',
  render: () => IconSize()
}
