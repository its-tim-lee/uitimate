import { figmaMapping, type BaseFigmaProps, type ChildrenNode } from "@builder.io/dev-tools/figma";
import { AccordionItem, AccordionTrigger, AccordionContent } from "./Accordion.tsx";

interface FigmaComponent extends BaseFigmaProps {
  Content: ChildrenNode;
  Trigger?: string;
  Active?: "true" | "false";
  State?: "Default" | "Hover";
  Disabled?: 'true' | 'false';
}

figmaMapping({
  componentKey: "1830998013f9970f2e39e901f33f391d4b32fa2f",
  mapper(figma: FigmaComponent) {
    return <AccordionItem value="uniqueId">
      <AccordionTrigger>{figma.Trigger}</AccordionTrigger>
      <AccordionContent>{figma.Content}</AccordionContent>
    </AccordionItem>;
  },
});
