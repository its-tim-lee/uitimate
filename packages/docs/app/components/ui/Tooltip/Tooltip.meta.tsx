import type { ComponentMeta } from "#/types/index.ts";
export default {
  description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  anatomy: `
    <Tooltip>
      <TooltipTrigger/>
      <TooltipContent/>
    </Tooltip>
  `,
} as ComponentMeta;