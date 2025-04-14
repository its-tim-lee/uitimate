import { Button } from "~/app/components/improper/Button/Button"
import {
  Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle

} from "#/components/ui/Dialog/Dialog.tsx"
import { useState } from "react"
import React from "react"
import { Icon } from "../ui/Icon/Icon"

// FIXME: DialogHeading has a text-size bug when only having a <DialogTitle>`
// TBD: doc: describe what is AlertDialog and the relevant design and behavior among ESC, click outside and default right-top close button with ARIA
export default () => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <>
      <Dialog open={isOpen} modal>
        <DialogHeading>Delete GPT</DialogHeading>
        <p>Are you sure you want to delete this GPT? This cannot be undone.</p>
        <DialogAction>
          <Button variant="outline" className='tw:rounded-full tw:shadow-none' onClick={() => {
            console.log('cancel')
            setIsOpen(false)
          }}>Cancel</Button>
          <Button variant="destructive" className='tw:rounded-full tw:shadow-none' onClick={() => setIsOpen(false)}>Delete GPT</Button>
        </DialogAction>
      </Dialog>
      <Button onClick={() => setIsOpen(true)} variant='ghost' className='tw:text-destructive'>
        <Icon icon='lucide:trash-2'></Icon>
        Delete GPT
      </Button>
    </>
  )
}