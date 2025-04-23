import InputDemo from '#/components/demo/input-demo.tsx';
import InputFileUpload from '#/components/demo/input-form.tsx';
import InputWithButton from '#/components/demo/input-with-button.tsx';
import type { Meta } from "@storybook/react";
export default {
  title: 'QA/Input',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const Normal = {
  render: () => <InputDemo />
};