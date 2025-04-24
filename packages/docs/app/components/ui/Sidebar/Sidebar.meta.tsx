import type { ComponentMeta } from "#/types/index.ts";
export default {
  description: 'Managing sidebar with its peer content without hassle 🤘: a layout handles the sidebar in different breakpoints, the transition between them, and more.',
  // WARN: do not change any thing from here (even re-formatting is prohibited), cuz it's used in the MDX files in a special way.
  anatomy: `
   {/* To have the left Sidebar: */}
    <SidebarLayout>
      <Sidebar/>
      <SidebarPeer/>
    </SidebarLayout>

    {/* To have the right Sidebar: */}
    <SidebarLayout>
      <SidebarPeer/>
      <Sidebar/>
    </SidebarLayout>
  `,
} as ComponentMeta;