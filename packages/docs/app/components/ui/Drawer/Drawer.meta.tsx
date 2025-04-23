import type { ComponentMeta } from "#/types/index.ts";

export default {
  description: 'A panel that slides out from the edge of the screen, mostly used as a dialog replacement on mobile devices.',
  anatomy: `
    <Drawer>
      <DrawerHeading> {/* <-- This is actually an optional */}
        <DrawerTitle/>
        <DrawerSubtitle/>
      </DrawerHeading>
      {/* Content */}
    </Drawer>
  `,
} as ComponentMeta;