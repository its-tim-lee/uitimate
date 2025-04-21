import { Sidebar, SidebarLayout, SidebarPeer } from "#/components/ui/Sidebar/Sidebar.tsx";
import { DrawerHeading } from "#/components/ui/Drawer/Drawer.tsx";
import { Skeleton } from "#/components/ui/Skeleton/Skeleton.tsx";

export default () => {
  return (
    <SidebarLayout defaultOpen directions={["left", "bottom"]} className="tw:h-[500px] tw:border tw:border-muted-foreground/50 tw:rounded-lg">
      <Sidebar className='tw:p-0 tw:md:p-4'>
        <Sidebar.Mobile>
          <div className='tw:pb-4 tw:px-5 tw:overflow-y-scroll'>
            <DrawerHeading className='tw:text-center'>Mobile Sidebar</DrawerHeading>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Sidebar.Mobile>
        <Sidebar.Desktop>Desktop<br />Sidebar</Sidebar.Desktop>
      </Sidebar>
      <SidebarPeer>
        <div className='tw:p-6 tw:overflow-y-scroll tw:space-y-4'>
          {Array.from({ length: 20 }).map((_, index) => (
            <Skeleton key={index} className="tw:h-20 tw:w-full" />
          ))}
        </div>
      </SidebarPeer >
    </SidebarLayout >
  )
}