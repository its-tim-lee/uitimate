import { Button } from "@/components/composite/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "./index.tsx"
import { useState } from "react";

export default {
  title: 'Example/Dialog',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => {
    const [open, setOpen] = useState(false);
    /**
     * The reason that only using `modal` will still cause the dialog to close when clicking outside is because
     * that is simply the common need, and that's why to make it work, we need to use `makeModalModeWork`.
     * Or you can use AlertDialog, which is used in a critical case, so the modal mode is enabled by default.
     */
    const makeModalModeWork = (e: Event) => e.preventDefault()
    return (
    <Dialog defaultOpen open={open} onOpenChange={setOpen} modal>
      <DialogTrigger asChild><Button variant="outline">Open</Button></DialogTrigger>
      <DialogContent
        onPointerDownOutside={makeModalModeWork}
        onInteractOutside={makeModalModeWork}
      >
        <DialogTitle>Title</DialogTitle>
        <DialogDescription>subtitle</DialogDescription>
        <p className="tw-grid tw-gap-4 tw-py-4">Press ESC to close; and click outside will not close</p>
        <DialogFooter>
          <DialogClose asChild><Button>Submit</Button></DialogClose>
          <DialogClose asChild><Button>Cancel</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
  </Dialog>)
  },
};

// TODO: build anotehr variant with Context Menu and Dropdown, see: https://ui.shadcn.com/docs/components/dialog