import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Textarea } from "./Textarea.tsx";

interface FigmaTextareaProps extends BaseFigmaProps {
  "Label": string;
  "Show Label": boolean;
  "Description": string;
  "Show Description": boolean;
  "Placeholder": string;
  "State": "Default" | "Focus" | "Filled" | "Disabled";
}

figmaMapping({
  componentKey: "ab9af40f6b13cdf4e0ea288fd0036754b4cda2f2",
  mapper(figma: FigmaTextareaProps) {
    return (
      <Textarea
        label={figma["Show Label"] ? figma["Label"] : undefined}
        description={figma["Show Description"] ? figma["Description"] : undefined}
        placeholder={figma["Placeholder"]}
      />
    );
  },
});
