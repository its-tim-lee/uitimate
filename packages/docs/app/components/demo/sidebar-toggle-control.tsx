import { useState } from "react"
import { Cta } from "#/components/ui/Cta/Cta"
import { Icon } from "#/components/ui/Icon/Icon"
import { Sidebar, SidebarLayout, SidebarPeer } from "#/components/ui/Sidebar/Sidebar"

export default () => {
  const [open, setOpen] = useState(true)
  return (
    <SidebarLayout
      enableMobileSidebar={false}
      open={open}
      variant="floating"
      onOpenChange={setOpen}
      directions={["left", "bottom"]}
      className="tw:h-[500px] tw:border tw:border-muted-foreground/50 tw:rounded-lg"
    >
      <Sidebar className="tw:w-[200px] tw:h-full" />
      <SidebarPeer className="tw:relative tw:flex tw:items-center tw:justify-center">
        <Cta
          variant="ghost"
          shapes={["icon"]}
          size="lg"
          onClick={() => setOpen(!open)}
          className="tw:absolute tw:top-2 tw:left-2"
        >
          <Icon icon="lucide:panel-left" />
        </Cta>
        <h1 className="tw:text-lg tw:text-gray-500">
          Press option + b to toggle the sidebar
        </h1>
      </SidebarPeer>
    </SidebarLayout>
  )
}