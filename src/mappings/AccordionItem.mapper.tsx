import { figmaMapping, type BaseFigmaProps, type ChildrenNode } from "@builder.io/dev-tools/figma";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

interface FigmaComponent extends BaseFigmaProps {
  Content: ChildrenNode;
  "Trigger Text"?: string;
  Active?: "true" | "false";
  State?: "Default" | "Hover";
}

figmaMapping({
  componentKey: "1830998013f9970f2e39e901f33f391d4b32fa2f",
  mapper(figma: FigmaComponent) {
    return <AccordionItem value="item-1">
      <AccordionTrigger>{figma["Trigger Text"]}</AccordionTrigger>
      <AccordionContent>{figma.Content}</AccordionContent>
    </AccordionItem>;
  },
});
