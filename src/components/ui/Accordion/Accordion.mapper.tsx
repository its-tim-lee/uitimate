import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion.tsx";

interface FigmaComponent extends BaseFigmaProps {}

figmaMapping({
  componentKey: "9a3615628d865f81899401f053b71953294f4323",
  mapper(figma: FigmaComponent) {
    return (
      <Accordion
        type="single"
        orientation="vertical"
        collapsible
        className="tw:w-full"
      >
        {figma.$children}
      </Accordion>
    );
  },
});
