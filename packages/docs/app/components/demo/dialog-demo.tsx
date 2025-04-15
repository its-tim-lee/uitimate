import { Cta } from "#/components/ui/Cta/Cta";
import {
  Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle
} from "#/components/ui/Dialog/Dialog.tsx"
import React from "react"
export default () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogHeading size="h4">
          <DialogTitle>Edit profile</DialogTitle>
          <DialogSubtitle>Make changes to your profile here. Click save when you're done.</DialogSubtitle>
        </DialogHeading>
        <p>Some content</p>
        <DialogAction>
          <Cta onClick={() => setIsOpen(false)}>Save changes</Cta>
        </DialogAction>
      </Dialog>
      <Cta onClick={() => setIsOpen(true)}>Open</Cta>
    </>
  )
}