import { Button } from "#/components/ui/Button/Button.tsx"
import {
  Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle
} from "#/components/ui/Dialog/Dialog.tsx"
import React from "react"
// TBD: doc:
// - check the behavior in differnt breakpoints: DialogAction + Fullscreen
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
          <Button onClick={() => setIsOpen(false)}>Save changes</Button>
        </DialogAction>
      </Dialog>
      <Button onClick={() => setIsOpen(true)}>Open</Button>
    </>
  )
}