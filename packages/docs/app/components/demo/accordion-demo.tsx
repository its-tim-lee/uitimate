import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion/Accordion";

export default () => {
  const items = [
    {
      value: 'unique-id-1',
      trigger: "What's the purpose of the MCP server?",
      content: "The MCP server serves as a bridge for bringing external context into Cursor. It enables connections to services like Google Drive and Notion, helping you incorporate documentation and requirements from these sources into your workflow.",
    },
    {
      value: 'unique-id-2',
      trigger: "How do you keep the AI models up-to-date with the latest documentation?",
      content: "Cursor leverages powerful foundational models like Claude 3.5 and GPT-4. For the most current library information, you can use our @web search feature. Since core language concepts rarely change dramatically, the models maintain their effectiveness over time.",
    },
  ];
  return (
    <Accordion type="single" collapsible className="tw:w-[400px]">
      {items.map($i => (
        <AccordionItem key={$i.value} value={$i.value}>
          <AccordionTrigger>{$i.trigger}</AccordionTrigger>
          <AccordionContent>{$i.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}