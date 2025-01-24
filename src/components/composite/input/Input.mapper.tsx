import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Input } from "./index.tsx";

interface Figma extends BaseFigmaProps {
  "Label": string;
  "Show Label": boolean;
  "Description": string;
  "Show Description": boolean;
  "Placeholder": string;
  "Show Link": boolean;
  "Link Text": string;
  "Button Text": string;
  "Show Icon": boolean;
  "Icon": ChildrenNode;
  "Horizontal Layout": "No" | "Yes";
  "Variant": "Default" | "File";
  "State": "Default" | "Focus" | "Filled" | "Disabled";
}

figmaMapping({
  componentKey: "f5acac40ad635cb271d5b73a1b60f29a59a037c9",
  mapper(figma: Figma) {
    return (
      <Input
        label={figma['Show Label'] ? figma.Label : ''}
        description={figma['Show Description'] ? figma.Description : ''}
        placeholder={figma.Placeholder}
      />
    );
  },
});
