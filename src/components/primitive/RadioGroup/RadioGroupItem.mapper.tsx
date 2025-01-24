import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { RadioGroupItem } from "./RadioGroup.tsx";

interface Figma extends BaseFigmaProps {
  "Title": string;
  "Show Title": boolean;
  "Outline": string;
  "Show Outline": boolean;
  "Active": "Off" | "On";
  "Font Weight": "Medium" | "Regular";
}

figmaMapping({
  componentKey: "acb1b28b1fed0f71fb4ba5a97f52b92e4456b4d7",
  mapper(figma: Figma) {
    return (
      <RadioGroupItem
        title={figma["Show Title"] ? figma.Title : undefined}
        outline={figma["Show Outline"] ? figma.Outline : undefined}
        value={figma.$id}
      />
    );
  },
});
