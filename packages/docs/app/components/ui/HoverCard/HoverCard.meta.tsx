import type { ComponentMeta } from "#/types/index.ts";

export default {
  description: 'A popup card that appears when hovering over a trigger element, providing additional content or information.',
  anatomy: `
<HoverCard>
  <HoverCardTrigger/>
  <HoverCardContent/>
</HoverCard>
`
} as ComponentMeta;