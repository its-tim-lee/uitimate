import React, { useState } from "react"
import { Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle } from "#/components/ui/Dialog/Dialog.tsx"
import { Icon } from "#/components/ui/Icon/Icon"
import { Cta } from "#/components/ui/Cta/Cta"
import { Separator } from "#/components/ui/Separator/Separator"
import { Form, FormLabel, FormControl, FormItem } from "#/components/ui/Form/Form"
import { Checkbox } from "#/components/ui/Checkbox/Checkbox"
import { z } from "zod"
import type { FormState } from "react-hook-form"

export default () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [formState, setFormState] = useState<FormState<z.infer<typeof schema>> | undefined>(undefined);
  const shouldStopToNextStep = (formState?.isValidating || formState?.isSubmitting) || !formState?.isValid;
  const schema = z.object({
    notice1: z.boolean().refine(v => v),
    notice2: z.boolean().refine(v => v)
  })
  const defaultValues = {
    notice1: false,
    notice2: false
  }
  const removeApp = () => {
    setIsOpen(false)
    setIsDisabled(true)
  }
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='tw:text-sm tw:p-0'>

        <DialogHeading size="h4" className='tw:bg-destructive/20 tw:text-destructive tw:p-4 tw:md:rounded-t-lg'>
          <DialogTitle className='tw:flex tw:items-center tw:gap-2'>
            <Icon icon='lucide:triangle-alert'></Icon>
            Remove app from project
          </DialogTitle>
          <DialogSubtitle className='tw:text-destructive'>This app will be removed from this project and scheduled to be permanently deleted in 30 days.</DialogSubtitle>
        </DialogHeading>

        <main className='tw:p-4 tw:prose tw:max-w-none'>
          <p>Details about the app that will be removed:</p>
          <p><b>I understand that removing this app will result in permanent deletion after 30 days. I also understand that the following will happen:</b></p>
          <Form setFormState={setFormState} onSubmit={() => { }} schema={schema} mode='onChange' disabled={isDisabled} defaultValues={defaultValues}>
            <p>After removal of the app (before permanent deletion):</p>
            <FormItem name='notice1' className='tw:flex tw:items-start tw:gap-3'>
              <FormControl><Checkbox /></FormControl>
              <FormLabel>Incoming Google Analytics data for this app will continue to flow into the linked data stream</FormLabel>
            </FormItem>
            <FormItem name='notice2' className='tw:flex tw:items-start tw:gap-3'>
              <FormControl><Checkbox /></FormControl>
              <FormLabel>Firebase products will stop processing and using incoming Google Analytics data.</FormLabel>
            </FormItem>
          </Form>
        </main>

        <Separator className='tw:my-0 tw:hidden tw:md:block' />

        <DialogAction className='tw:p-4'>
          <Cta variant='ghost' type='submit' onClick={() => setIsOpen(false)}>Cancel</Cta>
          <Cta variant='destructive' disabled={shouldStopToNextStep} type='submit' onClick={removeApp}>Remove App</Cta>
        </DialogAction>

      </Dialog>

      <Cta onClick={() => setIsOpen(true)} variant="outline">Remove this app</Cta>
    </>
  )
}