import { Button, Dialog as HLDialog, DialogPanel as HLDialogPanel, DialogTitle as HLDialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default {
  title: 'Example/HeadlessuiDialog',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant = {
  name: 'Dialog',
  render: () => <DialogModal />
};

function DialogModal() {
  let [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="tw:rounded-md tw:bg-black/20 tw:py-2 tw:px-4 tw:text-sm tw:font-medium tw:text-white tw:focus:outline-none tw:data-[hover]:bg-black/30 tw:data-[focus]:outline-1 tw:data-[focus]:outline-white"
      >
        Open dialog
      </Button>

      <HLDialog open={isOpen} as="div" className="tw:relative tw:z-10 tw:focus:outline-none" onClose={() => setIsOpen(false)} __demoMode>
        <div className="tw:fixed tw:inset-0 tw:z-10 tw:w-screen tw:overflow-y-auto">
          <div className="tw:flex tw:min-h-full tw:items-center tw:justify-center tw:p-4">
            <HLDialogPanel
              transition
              className="tw:w-full tw:max-w-md tw:rounded-xl tw:bg-white/5 tw:p-6 tw:backdrop-blur-2xl tw:duration-300 tw:ease-out tw:data-[closed]:transform-[scale(95%)] tw:data-[closed]:opacity-0"
            >
              <HLDialogTitle as="h3" className="tw:text-base/7 tw:font-medium tw:text-white">
                Payment successful
              </HLDialogTitle>
              <p className="tw:mt-2 tw:text-sm/6 tw:text-white/50">
                Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                order.
              </p>
              <div className="tw:mt-4">
                <Button
                  className="tw:inline-flex tw:items-center tw:gap-2 tw:rounded-md tw:bg-gray-700 tw:py-1.5 tw:px-3 tw:text-sm/6 tw:font-semibold tw:text-white tw:shadow-inner tw:shadow-white/10 tw:focus:outline-none tw:data-[hover]:bg-gray-600 tw:data-[focus]:outline-1 tw:data-[focus]:outline-white tw:data-[open]:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  Got it, thanks!
                </Button>
              </div>
            </HLDialogPanel>
          </div>
        </div>
      </HLDialog>
    </>
  )
}
