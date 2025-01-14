import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Textarea } from "./Textarea.tsx";

interface FigmaTextareaProps extends BaseFigmaProps {
  "Show Description"?: boolean;
  "Show Label"?: boolean;
  "Description Text"?: string; // when "Show Description" is true
  "Placeholder Text"?: string;
  "Label Text"?: string; // when "Show Label" is true
  State?: "Default" | "Focus" | "Filled" | "Disabled";
}

figmaMapping({
  componentKey: "ab9af40f6b13cdf4e0ea288fd0036754b4cda2f2",
  mapper(figma: FigmaTextareaProps) {
    return <Textarea placeholder={figma["Placeholder Text"]} />;
  },
});
