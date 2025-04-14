import InputOtpDemo from "#/components/demo/inputotp-demo.tsx";
import type { Meta } from '@storybook/react';
export default {
  title: 'Example/InputOtp',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const DEMO = {
  name: 'DEMO',
  render: () => <InputOtpDemo />
};