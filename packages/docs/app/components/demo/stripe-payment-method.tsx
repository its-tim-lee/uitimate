import { useState, useRef, useEffect } from "react"
import { BreadcrumbFinal, Breadcrumb } from "../ui/Breadcrumb/Breadcrumb"
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../ui/Breadcrumb/Breadcrumb"
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { Cta } from "../ui/Cta/Cta"
import { Heading } from "../ui/Heading/Heading"
import { Icon } from "../ui/Icon/Icon"
import type { FormState, FieldError } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormItem, FormLabel, FormMessage } from "../ui/Form/Form"
import { Input } from "../ui/Input/Input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select/Select"
import { Checkbox } from "../ui/Checkbox/Checkbox"

import type { MaskitoOptions } from '@maskito/core';
import { useMaskito } from '@maskito/react';
import { sleep } from "~/src/helper/util";

const threeDigitsOnlyMask: MaskitoOptions = {
  mask: [...new Array(3).fill(/\d/)],
};

const canadaZipCodeMask: MaskitoOptions = {
  mask: [
    /[A-Za-z]/, // First position: letter
    /\d/,       // Second position: digit
    /[A-Za-z]/, // Third position: letter
    ' ',        // Fourth position: space
    /\d/,       // Fifth position: digit
    /[A-Za-z]/, // Sixth position: letter
    /\d/        // Seventh position: digit
  ],
};

const cardMask: MaskitoOptions = {
  mask: [
    ...new Array(4).fill(/\d/),
    ' ',
    ...new Array(4).fill(/\d/),
    ' ',
    ...new Array(4).fill(/\d/),
    ' ',
    ...new Array(4).fill(/\d/)
  ],
};

const fiveDigitsOnlyMask: MaskitoOptions = {
  mask: [...new Array(5).fill(/\d/)],
};

const expiredMask = maskitoDateOptionsGenerator({
  mode: 'mm/yy',
  separator: '/',
});

interface ZipCodeInfo {
  required: boolean;
  label: string;
  placeholder: string;
  mask: MaskitoOptions;
}

const zipInfoByCountry: Record<string, ZipCodeInfo> = {
  'us': {
    required: true,
    label: 'ZIP code',
    placeholder: '12345',
    mask: fiveDigitsOnlyMask
  },
  'ca': {
    required: true,
    label: 'Postal code',
    placeholder: 'A1A 1A1',
    mask: canadaZipCodeMask
  },
  'tw': {
    required: false,
    label: 'Postal code',
    placeholder: '12345',
    mask: fiveDigitsOnlyMask
  }
};
const getZipCodeInfo = async (countryCode: string): Promise<ZipCodeInfo> => {
  await sleep(1000);
  return zipInfoByCountry[countryCode] || zipInfoByCountry['us'];
};

const checkCardNumber = async (cardNumber: string): Promise<{ valid: boolean; message?: string }> => {
  const cleanNumber = cardNumber.replace(/\s/g, ''); // the spaces come from the masking lib need to be removed
  await sleep(500);
  if (cleanNumber === '1111111111111111') {
    return {
      valid: false,
      message: 'This card number has been reported as fraudulent.'
    };
  }
  return { valid: true };
};
const rawSchema = {
  'card-number': z.string().nonempty('This is required.'),
  // TODO: many below should also do the `superRefine` to do the validation
  // TODO: if entering 11/22, should show the error: "Your card's expiration year is in the past."
  // TODO: there're also some other error cases:"Your card's expiration year is invalid."
  'expired': z.string().nonempty('This is required.'),
  'cvc': z.string().nonempty('This is required.'), // TBD: doc: by using mask, the schema here can be greately simplified
  'country': z.string(),
  'default-method': z.boolean().optional(),
  'zip': z.string().optional()
}
const patchSchema = (info: ZipCodeInfo) => {
  return z.object({
    ...rawSchema,
    'zip': info.required
      ? z.string().min(1, 'This is required.')
      : z.string().optional()
  })
}
// TBD: make the country as combobox
// TBD: make the city as select
// TBD: define the universal schema for a field so that it can also be used in onBlur
export default () => {
  const [zipInfo, setZipInfo] = useState<ZipCodeInfo>(zipInfoByCountry['us']);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [form, setForm] = useState<any>(null);
  const [formState, setFormState] = useState<FormState<any> | undefined>(undefined);
  const schema = patchSchema(zipInfo);
  const zipRef = useMaskito({ options: zipInfo.mask })
  const cvcRef = useMaskito({ options: threeDigitsOnlyMask });
  const expiredRef = useMaskito({ options: expiredMask });
  const numberRef = useMaskito({ options: cardMask });
  const shouldStopToNextStep = (formState?.isValidating || formState?.isSubmitting) || !formState?.isValid;
  const defaultValues = {
    country: 'us',
    'default-method': true,
  };
  const submit = (data: z.infer<typeof schema>) => {
    setIsDisabled(true);
    setTimeout(() => {
      if (data.cvc === '333') {
        form?.setError('cvc', {
          type: 'server',
          message: 'The CVC code is invalid for this card type',
        }, { shouldFocus: true });
        setIsDisabled(false);
        return;
      }
      form?.setError('serverError', {
        type: 'server',
        message: 'Something went wrong, plz submit again.',
      })
      setIsDisabled(false);
    }, 2000);
  }
  const onSelectCountry = async (v: string) => setZipInfo(await getZipCodeInfo(v));
  const validateCardNumber = async (e: React.FocusEvent<HTMLInputElement>) => {
    const result = await checkCardNumber(e.target.value);
    if (!result.valid) {
      form?.setError('card-number', { message: result.message });
    }
  }
  const validateCvcFormat = async (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 3) {
      form?.setError('cvc', { message: '3 digits are required.' });
    }
  }
  return (
    <section className="tw:max-w-xl tw:mx-auto">
      <Heading size="h1" className='tw:my-16'>Add payment method</Heading>
      <Form
        schema={schema}
        setForm={setForm}
        defaultValues={defaultValues}
        setFormState={setFormState}
        mode="onChange"
        disabled={isDisabled}
        onSubmit={submit}
      >
        <FormItem name='card-number' className='tw:my-3'>
          <FormLabel className='tw:pl-1 tw:text-xs'>Card number</FormLabel>
          <FormControl maskedInput="onInput">
            <Input placeholder="1234 1234 1234 1234" ref={numberRef} onBlur={validateCardNumber} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem name='expired' className='tw:my-3'>
          <FormLabel className='tw:pl-1 tw:text-xs'>Expiration date</FormLabel>
          <FormControl maskedInput="onInput">
            <Input placeholder="MM / YY" ref={expiredRef} />
          </FormControl>
          <FormMessage />
        </FormItem>

        <FormItem name='cvc' className='tw:my-3'>
          <FormLabel className='tw:pl-1 tw:text-xs'>Security code</FormLabel>
          <FormControl maskedInput="onInput"><Input placeholder="CVC" ref={cvcRef} onBlur={validateCvcFormat} /></FormControl>
          <FormMessage />
        </FormItem>

        <div className="tw:flex tw:gap-3 tw:items-end">
          <FormItem name='country' className='tw:w-full'>
            <FormLabel className='tw:pl-1 tw:text-xs'>Country</FormLabel>
            <FormControl>
              <Select onValueChange={onSelectCountry}>
                <SelectTrigger className='tw:mb-0'>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="tw">Taiwan</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>

          <FormItem name='zip' className={`${zipInfo.required ? 'tw:block' : 'tw:hidden'} tw:w-full`}>
            <FormLabel className='tw:pl-1 tw:text-xs'>{zipInfo.label}</FormLabel>
            <FormControl maskedInput="onInput"><Input placeholder={zipInfo.placeholder} ref={zipRef} /></FormControl>
            <FormMessage />
          </FormItem>
        </div>

        <br />
        <p className='tw:text-xs'>By providing your card information, you allow OpenAI, LLC to charge your card for future payments in accordance with their terms.</p>
        <br />

        <FormItem name='default-method' className='tw:flex tw:items-center tw:gap-2'>
          <FormControl className='tw:my-0'><Checkbox /></FormControl>
          <FormLabel className='tw:pl-1'>Use as default payment method</FormLabel>
        </FormItem>

        <br />
        <p className='tw:text-xs'>You can review important information from OpenAI, LLC on their <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a> pages.</p>
        {
          formState?.errors?.serverError && <p className='tw:text-destructive tw:text-xs tw:flex tw:items-center tw:gap-2'>
            {formState?.errors?.serverError?.message as string}
            <Cta
              shapes={['badge']}
              // TBD: doc: `trigger()` is the way to restore the status of `isValid` from `formState`
              onClick={() => form?.trigger()}>Understood!</Cta>
          </p>
        }

        <br />
        <Cta type="submit" className='tw:w-full' disabled={shouldStopToNextStep}>Add</Cta>

      </Form>

    </section>
  )
}
