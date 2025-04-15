import { Cta } from "#/components/ui/Cta/Cta";
import {
  Dialog, DialogAction, DialogHeading,
  type Type
} from "#/components/ui/Dialog/Dialog.tsx"
import React from "react"
export default () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const onClose = ({ from }: Type.CloseSource) => from === 'x' && setIsOpen(false)
  return (
    <>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogHeading size="h4">Certain kind of Modal
        </DialogHeading>
        <p>Note that, your version of "Modal" can have NO "x-icon", and that's fine, because there's no such strict definition, nor it's necessary to define.</p>
        <DialogAction>
          <Cta onClick={() => setIsOpen(false)}>Proceed</Cta>
        </DialogAction>
      </Dialog>
      <Cta onClick={() => setIsOpen(true)}>Open</Cta>
    </>
  )
}