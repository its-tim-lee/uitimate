import { Button } from "@/components/ui/Button/Button.tsx"
import {
  Dialog, DialogAction, DialogHeading, DialogSubtitle, DialogTitle

} from "@/components/ui/Dialog/Dialog.tsx"
import { useState } from "react"

// TBD: doc: why scrollable is user's duty to implement?

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Dialog open={isOpen}>
        <DialogHeading>
          <DialogTitle>
            Select Region
          </DialogTitle>
          <DialogSubtitle>
            To reduce latency and increase availability, choose the same region for your data and your Compute Engine instances, standard environment applications, and other services.
          </DialogSubtitle>
        </DialogHeading>
        {/* TBD: Implement List component and use the data from https://cloud.google.com/sql/docs/mysql/locations */}
        <section className='tw:h-[50vh] tw:overflow-y-scroll '>
          <p className="tw:h-[1000px]">Asia-123</p>
        </section>
        <DialogAction>
          <Button variant="ghost" className="tw:shadow-none">CLOSE</Button>
          <Button variant="primary" className="tw:shadow-none">SAVE</Button>
        </DialogAction>
      </Dialog>
      <Button onClick={() => setIsOpen(true)}>Create Database</Button>
    </>
  )
}