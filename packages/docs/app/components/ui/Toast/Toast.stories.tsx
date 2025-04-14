import ToastDemo from "#/components/demo/toast-demo.tsx";
import type { Meta } from "@storybook/react";


export default {
  title: 'Example/Toast',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const Variant1 = {
  name: 'Default',
  render: () => <ToastDemo />
};

