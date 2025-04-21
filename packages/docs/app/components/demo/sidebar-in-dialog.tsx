import { SidebarLayout } from "#/components/ui/Sidebar/Sidebar"
import { useState } from "react"
import { Dialog, DialogHeading, DialogTitle, DialogSubtitle } from "#/components/ui/Dialog/Dialog"
import { List, ListItem } from "#/components/ui/List/List"
import { Icon } from "#/components/ui/Icon/Icon"
import { Sidebar, SidebarPeer } from "#/components/ui/Sidebar/Sidebar"
import { Skeleton } from "#/components/ui/Skeleton/Skeleton"
import { Cta } from "#/components/ui/Cta/Cta"

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='tw:overflow-hidden tw:p-0 tw:md:max-h-[500px]'>
        <SidebarLayout defaultOpen directions={["left"]}>
          <Sidebar className='tw:p-4'>
            <List>
              <ListItem className='tw:p-2 tw:gap-3'>
                <Icon icon='lucide:settings' /> General
              </ListItem>
              <ListItem className='tw:p-2 tw:gap-3'>
                <Icon icon='lucide:bell' /> Notifications
              </ListItem>
              <ListItem className='tw:p-2 tw:gap-3'>
                <Icon icon='lucide:person-standing' /> Personalization
              </ListItem>
            </List>
          </Sidebar>
          <SidebarPeer className='tw:p-6'>
            <DialogHeading size="h4">
              <DialogTitle>Edit profile</DialogTitle>
              <DialogSubtitle>Make changes to your profile here. Click save when you're done.</DialogSubtitle>
            </DialogHeading>
            <br />
            <div className='tw:overflow-y-scroll tw:space-y-4'>
              {Array.from({ length: 20 }).map((_, index) => (
                <Skeleton key={index} className="tw:h-5 tw:w-full" />
              ))}
            </div>
          </SidebarPeer>
        </SidebarLayout>
      </Dialog>
      <Cta onClick={() => setIsOpen(true)}>Open</Cta>
    </>
  )

}