import InputDemo from '#/components/demo/input-demo.tsx';
import InputFileUpload from '#/components/demo/input-form.tsx';
import InputWithButton from '#/components/demo/input-with-button.tsx';
import type { Meta } from "@storybook/react";
export default {
  title: 'Example/Input',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <InputDemo />
};

export const BUTTON = {
  name: 'SCENARIO / WITH BUTTON',
  render: () => <InputWithButton />
};

// This demo is still important, cuz it can test many types of Input to see whether our style has any issues
export const FORM = {
  name: 'SCENARIO / FILE UPLOAD',
  render: () => <InputFileUpload />
};
