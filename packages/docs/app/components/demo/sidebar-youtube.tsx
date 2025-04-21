import { useState } from "react"
import { List, ListItem } from "#/components/ui/List/List"
import { Icon } from "#/components/ui/Icon/Icon"
import { SidebarLayout, Sidebar, SidebarPeer } from "#/components/ui/Sidebar/Sidebar"

export default () => {
  const [open, setOpen] = useState(true)
  const onOpenChange = (open: boolean) => {
    setOpen(open)
  }
  return (
    <div className='tw:flex tw:w-full tw:h-[500px]'>
      <List
        data-toggle={open ? true : undefined}
        data-tag='sidebar-icon'
        className='tw:gap-3 tw:shrink-0 tw:h-full tw:hidden tw:sm:block tw:md:data-toggle:hidden'
      >
        <ListItem className='tw:p-3 tw:gap-1 tw:flex-col tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
          <Icon icon='mdi:home' className='tw:size-5' />
          Home
        </ListItem>
        <ListItem className='tw:p-3 tw:gap-1 tw:flex-col tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
          <Icon icon='proicons:youtube-shorts' className='tw:size-5' />
          Shorts
        </ListItem>
      </List>
      <SidebarLayout open={open} onOpenChange={onOpenChange} directions={["left", "left"]} className="tw:flex-1">
        <Sidebar className='tw:w-[240px]!'>
          <List className='tw:p-4! tw:w-full'>
            <ListItem className='tw:p-3 tw:gap-3 tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
              <Icon icon='mdi:home' className='tw:size-5' />
              Home
            </ListItem>
            <ListItem className='tw:p-3 tw:gap-3 tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
              <Icon icon='proicons:youtube-shorts' className='tw:size-5' />
              Shorts
            </ListItem>
          </List>
        </Sidebar>
        <SidebarPeer className='tw:flex tw:flex-col tw:items-center tw:justify-center'>
          <p className='tw:px-20'>
            Press <kbd className='tw:code'>option b</kbd> to toggle the sidebar whenever you want during the breakpoint changing.
          </p>
        </SidebarPeer>
      </SidebarLayout>
    </div>
  )
}