import type { ComponentMeta } from "#/types/index.ts";

export default {
  description: `
    Make a content collapsible: unlike simple visibility toggling, the collapsing will affect the surrounding layout space.
  `,
  anatomy: `
    <Collapsible>
      <CollapsibleTrigger/>
      <CollapsibleContent/>
    </Collapsible>
  `,
} as ComponentMeta;