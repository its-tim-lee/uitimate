import InputOtpDemo from "#/components/demo/inputotp-demo.tsx";
import type { Meta } from '@storybook/react';
export default {
  title: 'QA/InputOtp',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const Normal = {
  render: () => <InputOtpDemo />
};