import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "#/components/ui/Accordion/Accordion";

export default () => {
  const items = [
    {
      value: 'unique-id-1',
      trigger: "title 1",
      content: "content 1",
      disabled: true,
    },
    {
      value: 'unique-id-2',
      trigger: "title 2",
      content: "content 2",
      disabled: false,
    },
  ];
  return (
    <Accordion type="multiple" className="tw:w-[400px]">
      {items.map($i => (
        <AccordionItem key={$i.value} value={$i.value} disabled={$i.disabled}>
          <AccordionTrigger>{$i.trigger}</AccordionTrigger>
          <AccordionContent>{$i.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}