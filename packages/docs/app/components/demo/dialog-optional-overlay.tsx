import { Cta } from "#/components/ui/Cta/Cta";
import { Dialog } from "#/components/ui/Dialog/Dialog.tsx"
import { Checkbox } from "#/components/ui/Checkbox/Checkbox.tsx"
import React from "react"
export default () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasOverlay, setHasOverlay] = React.useState(true)
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={hasOverlay ? '' : 'tw:[&+[data-tag="dialog-overlay"]]:hidden tw:border tw:border-foreground'}
      >
        <div className="tw:flex tw:items-center tw:gap-2">
          Toggle the overlay visibility:
          <Checkbox
            checked={hasOverlay}
            onCheckedChange={(v) => setHasOverlay(v === 'indeterminate' ? true : v)}
          />
        </div>
      </Dialog>
      <Cta onClick={() => setIsOpen(true)}>Open</Cta>
    </>
  )
}