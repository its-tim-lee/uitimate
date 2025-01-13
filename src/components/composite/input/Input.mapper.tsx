import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Input } from "./index.tsx";

interface FigmaInputProps extends BaseFigmaProps {
  "Show Link"?: boolean;
  Icon?: ChildrenNode; // when "Show Icon" is true
  "Description"?: string; // when "Show Description" is true
  "Link Text"?: string; // when "Show Link" is true
  "Button Text"?: string;
  "Show Icon"?: boolean;
  "Show Description"?: boolean;
  "Placeholder"?: string;
  "Show Label"?: boolean;
  "Label"?: string; // when "Show Label" is true
  "Horizontal Layout"?: "No" | "Yes";
  Variant?: "Default" | "File";
  State?: "Default" | "Focus" | "Filled" | "Disabled";
}

figmaMapping({
  componentKey: "f5acac40ad635cb271d5b73a1b60f29a59a037c9",
  mapper(figma: FigmaInputProps) {
    return <Input placeholder={figma.Placeholder}></Input>
  },
});
