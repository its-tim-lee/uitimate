import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { RadioGroup } from "./RadioGroup.tsx";

interface Figma extends BaseFigmaProps {
  "Label": string;
  "Show Label": boolean;
  "Item 2": boolean;
  "Item 3": boolean;
  "Item 4": boolean;
  "Item 5": boolean;
  "Item 6": boolean;
}

figmaMapping({
  componentKey: "c337e2572086a64a6ccfd50e3baf69f1a4b34753",
  mapper(figma: Figma) {
    return (
      <RadioGroup label={figma["Show Label"] ? figma.Label : undefined}>
        {figma.$children[1].$children}
      </RadioGroup>
    );
  },
});
