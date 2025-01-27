import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "./Popover.tsx"
import { Button } from "@/components/ui/Button/Button.tsx"
import { useState } from "react";

export default {
  title: 'Example/Popover',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Open initially',
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Popover defaultOpen open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent onInteractOutside={e => console.log(e)}><h1>Press ESC to close me</h1></PopoverContent>
    </Popover>
    )
  },
};

export const Variant2 = {
  name: 'Customized Popover Position',
  render: () => {
    const [open, setOpen] = useState(true)
    return (
    <Popover defaultOpen open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverAnchor asChild>
      <h1 className="tw-w-[100px]">Popover will show up on the right side of this element with offset</h1>
      </PopoverAnchor>
      <PopoverContent side='right' sideOffset={30} align='start'>
        <h1>Content</h1></PopoverContent>
    </Popover>
    )
  },
};