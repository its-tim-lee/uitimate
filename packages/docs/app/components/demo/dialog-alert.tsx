import { Cta } from "#/components/ui/Cta/Cta"
import {
  Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle

} from "#/components/ui/Dialog/Dialog.tsx"
import React from "react"
import { Icon } from "#/components/ui/Icon/Icon"

export default () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Dialog open={isOpen} role="alertdialog">
        <DialogHeading>Delete GPT</DialogHeading>
        <p>Are you sure you want to delete this GPT? This cannot be undone.</p>
        <DialogAction>
          <Cta variant="outline" className='tw:rounded-full tw:shadow-none' onClick={() => {
            console.log('cancel')
            setIsOpen(false)
          }}>Cancel</Cta>
          <Cta variant="destructive" className='tw:rounded-full tw:shadow-none' onClick={() => setIsOpen(false)}>Delete GPT</Cta>
        </DialogAction>
      </Dialog>
      <Cta onClick={() => setIsOpen(true)} variant='ghost' className='tw:text-destructive'>
        <Icon icon='lucide:trash-2'></Icon>
        Delete GPT
      </Cta>
    </>
  )
}