import TextareaDemo from "#/components/demo/textarea-demo.tsx";
import type { Meta } from "@storybook/react";

export default {
  title: 'QA/Textarea',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const Normal = {
  render: () => <TextareaDemo />
};