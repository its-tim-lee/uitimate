import { Sidebar } from "#/components/ui/Sidebar/Sidebar"
import { useState } from "react"
import { SidebarLayout, SidebarPeer } from "#/components/ui/Sidebar/Sidebar"
import { Skeleton } from "#/components/ui/Skeleton/Skeleton"

export default () => {
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(true)
  return (
    <SidebarLayout
      variant="floating"
      open={rightOpen}
      directions={["right", "right"]}
      shortcut='ctrl+1, command+1'
      onOpenChange={setRightOpen}
      className='tw:h-[500px] tw:border tw:border-muted-foreground/50 tw:rounded-lg tw:w-full tw:min-w-[500px]'
    >
      <SidebarPeer>
        <SidebarLayout
          variant="inset"
          open={leftOpen}
          directions={["left", "left"]}
          shortcut='ctrl+2, command+2'
          onOpenChange={setLeftOpen}
        >
          <Sidebar
            className='tw:w-[320px]'
          >
            <div className='tw:p-6 tw:overflow-y-scroll tw:space-y-4'>
              Left Sidebar
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} className="tw:h-10 tw:w-full" />
              ))}
            </div>
          </Sidebar>
          <SidebarPeer>
            <div className='tw:p-6 tw:overflow-y-scroll tw:space-y-4'>
              Main Content
              {Array.from({ length: 20 }).map((_, index) => (
                <Skeleton key={index} className="tw:h-20 tw:w-full" />
              ))}
            </div>
          </SidebarPeer>
        </SidebarLayout>
      </SidebarPeer>
      <Sidebar className='tw:w-[320px]'>
        <div className='tw:p-6 tw:overflow-y-scroll tw:space-y-4'>
          Right Sidebar
          {Array.from({ length: 30 }).map((_, index) => (
            <Skeleton key={index} className="tw:h-10 tw:w-full" />
          ))}
        </div>
      </Sidebar>
    </SidebarLayout>
  )
}