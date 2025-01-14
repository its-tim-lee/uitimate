import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Checkbox } from "./Checkbox.tsx";

interface FigmaCheckboxProps extends BaseFigmaProps {
  "Show Text": boolean;
  Label?: string;
  Description?: string;
  "Show Description": boolean;
  Status: "Inactive" | "Active";
  State?: "Default" | "Disabled";
}

figmaMapping({
  componentKey: "9ee2181a7ef226d3add4139ba6040274cf4a03b7",
  mapper(figma: FigmaCheckboxProps) {
    return (
      <Checkbox
        label={figma["Show Text"] ? figma.Label : undefined}
        description={figma["Show Description"] ? figma.Description : undefined}
        checked={figma.Status === "Active"}
      />
    );
  },
});
