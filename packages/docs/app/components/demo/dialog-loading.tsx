import { Cta } from "#/components/ui/Cta/Cta";
import {
  Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle

} from "#/components/ui/Dialog/Dialog.tsx"
import { Progress } from "../ui/Progress/Progress"
import { useEffect, useState } from "react"

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (isOpen) setTimeout(() => setIsOpen(false), 3000)
  }, [isOpen])
  return (
    <>
      <Dialog open={isOpen} role="alertdialog">
        <DialogHeading>Downloading update 1 of 1...</DialogHeading>
        <Progress value={50} />
      </Dialog>
      <Cta onClick={() => setIsOpen(true)}>Update</Cta>
    </>
  )
}