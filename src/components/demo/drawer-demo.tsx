import { Drawer, DrawerContent, DrawerDescription, DrawerHeading, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/Drawer/Drawer";
import { Cta } from "@/components/ui/Cta/Cta";

export default () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Cta variant="outline">Open Drawer</Cta>
      </DrawerTrigger>
      <DrawerContent className="tw:w-full tw:flex tw:flex-col tw:gap-4 tw:items-center">
        <DrawerHeading size="h5">
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>
            Drawer Description
          </DrawerDescription>
        </DrawerHeading>
        <span>Some content</span>
        <DrawerClose asChild>
          <Cta variant="outline">Close Drawer</Cta>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  )
}