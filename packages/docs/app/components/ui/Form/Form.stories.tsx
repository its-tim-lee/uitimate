import { type CheckedState } from "@/components/ui/Checkbox/Checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form.tsx"
import { Cta } from "@/components/ui/Cta/Cta.tsx"
import { z } from "zod"
import { Input } from "@/components/ui/Input/Input.tsx"
import { useEffect, useRef, useState, useId } from "react";
import { sleep } from "@/helper/util";
import { Icon } from "../Icon/Icon.tsx";
import { TooltipContent, TooltipTrigger } from "../Tooltip/Tooltip.tsx";
import { Tooltip } from "../Tooltip/Tooltip.tsx";
import { Checkbox } from "../Checkbox/Checkbox.tsx";
import {
  type FormState,
  type UseFormReturn,
  type FieldValues,
  useFormContext
} from "react-hook-form";
import { nanoid } from "nanoid";
import { Label } from "../Label/Label.tsx"
import FormFirebaseRegisterApp from "@/components/demo/form-firebase-register-app.tsx";
import FormRemoveAppFromProject from "@/components/demo/form-remove-app-from-project.tsx"
import StripeBillingInfo from "@/components/demo/stripe-billing-info.tsx";
import StripePaymentMethod from "../../demo/stripe-payment-method.tsx"

export const RegisterApp = {
  name: 'Showcase / Firebase Register App',
  render: () => <FormFirebaseRegisterApp />
};

export const RemoveAppFromProject = {
  name: 'Showcase / Remove App From Project',
  render: () => <FormRemoveAppFromProject />
};


export default {
  title: 'Example/Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => {
    return (
      <></>
    )
  },
};

export const STRIPE_BILLING_INFO = {
  name: 'Showcase / Stripe Billing Info',
  render: () => <StripeBillingInfo />
};

export const STRIPE_PAYMENT_METHOD = {
  name: 'Showcase / Stripe Payment Method',
  render: () => <StripePaymentMethod />
};