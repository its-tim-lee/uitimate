import type { ComponentMeta } from "#/types/index.ts";

const meta: ComponentMeta = {
  description: "A hassle-free dialog: modal mode, AlertDialog, ... all in one component.",
  anatomy: `
<Dialog>
  <DialogHeading>
    <DialogTitle/>
    <DialogSubtitle/>
  </DialogHeading>

  {/* some content */}

  <DialogAction/>
</Dialog>`
}

export default meta