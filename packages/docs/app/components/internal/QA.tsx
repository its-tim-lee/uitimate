import type { ReactNode } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "#/components/ui/Accordion/Accordion";
import { useId } from "react";
type QAProps = {
  items: {
    value?: string, // @deprecated
    trigger: ReactNode,
    content: ReactNode
  }[]
}
export default ({ items }: QAProps) => {
  const id = useId();
  return (
    <Accordion type="single" collapsible className="tw:w-[80%] tw:mx-auto ">
      {items.map($i => (
        <AccordionItem key={id} value={id}>
          <AccordionTrigger>{$i.trigger}</AccordionTrigger>
          <AccordionContent className="tw:text-muted-foreground">{$i.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
