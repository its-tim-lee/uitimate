import InputOtpDemo from "../../demo/inputotp-demo.tsx";

export default {
  title: 'Example/InputOtp',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const DEMO = {
  name: 'DEMO',
  render: () => <InputOtpDemo />
};