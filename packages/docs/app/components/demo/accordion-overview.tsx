import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion/Accordion";
import { useState } from "react";

export default () => {
  const [value, setValue] = useState(['unique-id-2', 'unique-id-3'])
  const items = [
    {
      value: "unique-id-1",
      disabled: true,
      trigger: "Am disabled, you can't turn me on",
      content: "You can't see this content",
    },
    {
      value: "unique-id-2",
      disabled: false,
      trigger: "This content will show up initially",
      content: "This is because its `value` is included in `useState`",
    },
    {
      value: "unique-id-3",
      disabled: false,
      trigger: "This content will show up initially",
      content: "This is because its `value` is included in `useState`",
    },
    {
      value: "unique-id-4",
      disabled: false,
      trigger: "This content will NOT show up initially",
      content: "This is because its `value` is NOT included in `useState`",
    },
  ];
  return (
    <Accordion type="multiple" value={value} onValueChange={e => setValue(e)} className="tw:w-[400px]">
      {items.map($i => (
        <AccordionItem key={$i.value} value={$i.value} disabled={$i.disabled}>
          <AccordionTrigger>{$i.trigger}</AccordionTrigger>
          <AccordionContent>{$i.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}