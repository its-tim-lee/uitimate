import { DrawerSubtitle, DrawerHeading, DrawerTitle, Drawer } from "#/components/ui/Drawer/Drawer";
import { Cta } from "#/components/ui/Cta/Cta";
import { useState } from "react";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Cta variant="outline" onClick={() => setIsOpen(true)}>Open</Cta>
      <Drawer direction={'left'} open={isOpen} onOpenChange={setIsOpen} className='tw:gap-4 tw:items-center tw:h-[90dvh] tw:my-auto tw:rounded-r-lg tw:bg-white tw:dark:bg-muted tw:p-4'>
        <DrawerHeading size="h5">
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerSubtitle>
            Drawer Description
          </DrawerSubtitle>
        </DrawerHeading>
        <span>Some content</span>
        <Cta variant="outline" onClick={() => setIsOpen(false)}>Close Drawer</Cta>
      </Drawer>
    </div>
  )
}