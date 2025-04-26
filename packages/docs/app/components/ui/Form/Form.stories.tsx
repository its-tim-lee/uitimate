import RadioGroupForm from "#/components/demo/form-radiogroup-demo.tsx";
import FormInputDemo from '#/components/demo/form-input-demo.tsx';
import FormSelectDemo from '#/components/demo/form-select-demo.tsx';
import FormSwitchDemo from '#/components/demo/form-switch-demo.tsx';
import FormTextareaDemo from '#/components/demo/form-textarea-demo.tsx';
import FormDatePickerDemo from '#/components/demo/form-datepicker-demo.tsx';
import FormComboboxDemo from '#/components/demo/form-combobox-demo.tsx';
import FormFirebaseRegisterApp from "#/components/demo/form-firebase-register-app.tsx";
import FormRemoveAppFromProject from "#/components/demo/form-remove-app-from-project.tsx"
import FormDamnEasyDemo from "#/components/demo/form-damn-easy-demo.tsx"
import StripeBillingInfo from "#/components/demo/stripe-billing-info.tsx";
import StripePaymentMethod from "#/components/demo/stripe-payment-method.tsx"
import { type Meta } from "@storybook/react";
export default {
  title: 'Example/Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta

export const RegisterApp = {
  name: 'Showcase / Firebase Register App',
  render: () => <FormFirebaseRegisterApp />
};

export const RemoveAppFromProject = {
  name: 'Showcase / Remove App From Project',
  render: () => <FormRemoveAppFromProject />
};

export const DamnEasyForm = {
  name: 'Showcase / Damn Easy Form',
  render: () => <FormDamnEasyDemo />
};

export const STRIPE_BILLING_INFO = {
  name: 'Showcase / Stripe Billing Info',
  render: () => <StripeBillingInfo />
};

export const STRIPE_PAYMENT_METHOD = {
  name: 'Showcase / Stripe Payment Method',
  render: () => <StripePaymentMethod />
};

export const RADIO_GROUP_FORM = {
  name: 'Showcase / Radio Group Form',
  render: () => <RadioGroupForm />
};

export const SELECT_FORM = {
  name: 'Showcase / Select Form',
  render: () => <FormSelectDemo />
};

export const FORM_INTEGRATION = {
  name: 'SCENARIO / FORM INTEGRATION',
  render: () => <FormInputDemo />
};

export const SWITCH_FORM = {
  name: 'Showcase / Switch Form',
  render: () => <FormSwitchDemo />
};

export const TEXTAREA_FORM = {
  name: 'Showcase / Textarea Form',
  render: () => <FormTextareaDemo />
};

export const DATE_PICKER_FORM = {
  name: 'Showcase / Date Picker Form',
  render: () => <FormDatePickerDemo />
};

export const COMBOBOX_FORM = {
  name: 'Showcase / Combobox Form',
  render: () => <FormComboboxDemo />
};