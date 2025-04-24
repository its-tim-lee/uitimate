import StripePaymentMethod from "#/components/demo/stripe-payment-method.tsx"
import { type Meta } from "@storybook/react";
export default {
  title: 'QA/Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['qa'],
} as Meta

export const STRIPE_PAYMENT_METHOD = {
  render: () => <StripePaymentMethod />
};
