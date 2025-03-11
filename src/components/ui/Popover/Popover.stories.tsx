import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "./Popover.tsx"
import { Button } from "@/components/ui/Button/Button.tsx"
import { useState } from "react";
import PopoverDemo from "../../demo/popover-demo.tsx";
import PopoverOpenControl from "../../demo/popover-open-control.tsx";

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
  name: 'API / Open initially',
  render: () => <PopoverOpenControl />
};

export const Variant2 = {
  name: 'API / Customized Popover Position',
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <Popover defaultOpen open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">Open popover</Button>
        </PopoverTrigger>
        <PopoverAnchor asChild>
          <h1 className="tw:w-[100px]">Popover will show up on the right side of this element with offset</h1>
        </PopoverAnchor>
        <PopoverContent side='right' sideOffset={30} align='start'>
          <h1>Content</h1></PopoverContent>
      </Popover>
    )
  },
};

export const Demo = {
  name: 'Demo',
  render: () => <PopoverDemo />
};