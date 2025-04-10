import type { ReactNode } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "#/components/ui/Accordion/Accordion";
type QAProps = {
  items: { value: string, trigger: ReactNode, content: ReactNode }[]
}
export default ({ items }: QAProps) => {
  return (
    <Accordion type="single" collapsible className="tw:w-[80%] tw:mx-auto ">
      {items.map($i => (
        <AccordionItem key={$i.value} value={$i.value}>
          <AccordionTrigger>{$i.trigger}</AccordionTrigger>
          <AccordionContent>{$i.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
