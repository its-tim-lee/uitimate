import type { ComponentMeta } from "#/types/index.ts";

export default {
  description: 'A vertically stacked set of interactive headings that each reveal an associated section of content.',
  anatomy: `
  <Accordion>
    <AccordionItem>
      <AccordionTrigger />
      <AccordionContent />
    </AccordionItem>
    {/* more AccordionItem ... */}
  </Accordion>
  `
} as ComponentMeta;