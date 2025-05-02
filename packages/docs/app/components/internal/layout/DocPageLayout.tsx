import { useState } from "react";
import { SidebarLayout, Sidebar, SidebarPeer } from "#/components/ui/Sidebar/Sidebar.tsx";
import DocsSidebar from "#/components/internal/DocsSidebar";
import SiteHeader from "#/components/internal/SiteHeader";

export default function DocPageLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <SiteHeader onSidebarToggle={() => setSidebarOpen((open) => !open)} />
      <SidebarLayout
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}
        directions={["left", "bottom"]}
        className="tw:min-h-screen"
        enableMobileSidebar={true}
        defaultOpen={true}
      >
        <Sidebar className="tw:pt-0 tw:border-r tw:h-svh tw:overflow-y-scroll tw:md:block">
          <DocsSidebar />
        </Sidebar>
        <SidebarPeer className="tw:p-4 tw:h-svh tw:overflow-y-scroll">
          {children}
        </SidebarPeer>
      </SidebarLayout>
    </>
  );
}
