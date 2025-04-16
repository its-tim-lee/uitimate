import TextareaDemo from "#/components/demo/textarea-demo.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'Example/Textarea',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <TextareaDemo />
};