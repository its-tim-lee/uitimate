import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover/Popover"
import { Button } from "@/components/ui/Button/Button"

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent onInteractOutside={e => console.log('clicked outside!')}><h1>Press ESC to close me</h1></PopoverContent>
    </Popover>
  )
}