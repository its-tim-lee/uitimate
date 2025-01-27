import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Checkbox } from "./Checkbox.tsx";

interface Figma extends BaseFigmaProps {
  "Title": string;
  "Show Title": boolean;
  "Outline": string;
  "Show Outline": boolean;
  "Status": "Inactive" | "Active";
  "State": "Default" | "Disabled";
}

figmaMapping({
  componentKey: "9ee2181a7ef226d3add4139ba6040274cf4a03b7",
  mapper(figma: Figma) {
    return (
      <Checkbox
        title={figma["Show Title"] ? figma.Title : undefined}
        outline={figma["Show Outline"] ? figma.Outline : undefined}
        checked={figma.Status === "Active"}
      />
    );
  },
});
