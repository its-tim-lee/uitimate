import type { ComponentMeta } from "#/types/index.ts";

export default {
  description: 'Displays a vertical menu when right-clicking for managing a consistent set of commands via a hierarchical structure',
  anatomy: `
{/*
  The basic structure is like below;
  things can be complex inside the <ContextMenuContent>,
  so refer to the relevant demos to see the usages.
*/}
<ContextMenu>
  <ContextMenuTrigger/>
  <ContextMenuContent/>
</ContextMenu>
  `,
} as ComponentMeta;