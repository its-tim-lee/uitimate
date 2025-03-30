import { Drawer, DrawerContent, DrawerDescription, DrawerHeading, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/Drawer/Drawer";
import { Cta } from "@/components/ui/Cta/Cta";

export default () => {
  return (
    <Drawer direction={'left'} open={true}>
      <DrawerTrigger asChild>
        <Cta variant="outline">Open Drawer</Cta>
      </DrawerTrigger>
      <DrawerContent className="tw:w-full tw:flex tw:flex-col tw:gap-4 tw:items-center tw:h-[90dvh] tw:my-auto tw:rounded-r-lg tw:bg-background tw:p-4">
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