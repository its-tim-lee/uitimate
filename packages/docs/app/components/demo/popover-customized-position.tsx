import { Popover, PopoverAnchor, PopoverContent, PopoverTrigger } from "#/components/ui/Popover/Popover";
import { Cta } from "#/components/ui/Cta/Cta";
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(true)
  return (
    <Popover defaultOpen open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Cta variant="outline">Open popover</Cta>
      </PopoverTrigger>
      <PopoverAnchor asChild>
        <h1 className="tw:w-[100px]">Popover will show up on the right side of this element with offset</h1>
      </PopoverAnchor>
      <PopoverContent side='right' sideOffset={30} align='start'>
        <h1>Content</h1></PopoverContent>
    </Popover>
  )
}