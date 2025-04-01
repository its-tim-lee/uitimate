import { Button } from "#/components/ui/Button/Button.tsx"
import {
  Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle

} from "#/components/ui/Dialog/Dialog.tsx"
import { Progress } from "../ui/Progress/Progress"
import { useState } from "react"

// TBD: doc: this is the loading case that you don't want anyone can close it in normal manner
export default () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Dialog open={isOpen} modal>
        <p>Downloading update 1 of 1...</p>
        <Progress value={50} />
      </Dialog>
      <Button onClick={() => setIsOpen(true)}>Update</Button>
    </>
  )
}