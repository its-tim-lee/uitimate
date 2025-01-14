import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./Select.tsx";

interface FigmaSelectProps extends BaseFigmaProps {
  Label?: string;
  "Show Label": boolean;
  "Description Text": string;
  Placeholder: string;
  "Show Description": boolean;
  State: "Default" | "Focus" | "Disabled";
}

figmaMapping({
  componentKey: "c2cee200b3b1bb8f74216b09b24641d3e0755449",
  mapper(figma: FigmaSelectProps) {
    return (
      <Select>
        <SelectTrigger><SelectValue placeholder={figma.Placeholder} /></SelectTrigger>
        <SelectContent></SelectContent>
      </Select>
    );
  },
});
