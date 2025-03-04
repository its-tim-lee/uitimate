import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "./Popover.tsx"
import { Button } from "@/components/ui/Button/Button.tsx"
import { useState } from "react";
import PopoverDemo from "../../demo/popover-demo.tsx";

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
          <h1 className="tw:w-[100px]">Popover will show up on the right side of this element with offset</h1>
        </PopoverAnchor>
        <PopoverContent side='right' sideOffset={30} align='start'>
          <h1>Content</h1></PopoverContent>
      </Popover>
    )
  },
};

export const Sizes = {
  name: 'API / 3 Sizes',
  render: () => {
    return (
      <div className="tw:flex tw:flex-col tw:gap-4">
        <Popover defaultOpen>
          <PopoverTrigger asChild>
            <Button variant="outline">Small Popover</Button>
          </PopoverTrigger>
          <PopoverContent size="sm">
            <h1>Small Popover Content</h1>
            <p>This popover uses the small size variant</p>
          </PopoverContent>
        </Popover>

        <Popover defaultOpen>
          <PopoverTrigger asChild>
            <Button variant="outline">Default Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <h1>Default Popover Content</h1>
            <p>This popover uses the default size variant</p>
          </PopoverContent>
        </Popover>

        <Popover defaultOpen>
          <PopoverTrigger asChild>
            <Button variant="outline">Large Popover</Button>
          </PopoverTrigger>
          <PopoverContent size="lg">
            <h1>Large Popover Content</h1>
            <p>This popover uses the large size variant</p>
          </PopoverContent>
        </Popover>
      </div>
    )
  },
};

export const Demo = {
  name: 'Demo',
  render: () => <PopoverDemo />
};