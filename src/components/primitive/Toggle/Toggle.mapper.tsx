import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Toggle } from "./Toggle.tsx";
import { Icon } from "../../compound/icon/Icon.tsx";

interface FigmaToggleProps extends BaseFigmaProps {
  Icon?: ChildrenNode;
  "Toggle Text"?: string;
  "Show Text": boolean;
  "Show Icon": boolean;
  Variant?: "Secondary" | "Outline" | "Destructive" | "Default";
  Size?: "Default" | "sm" | "lg";
  State?: "Default" | "Hover" | "Pressed" | "Disabled";
}

figmaMapping({
  componentKey: "e2369bc999e94796838ae49d602da7f30b1522e0",
  mapper(figma: FigmaToggleProps) {
    return (
      <Toggle
        variant={figma.Variant?.toLowerCase() as 'default' | 'secondary' | 'outline' | 'destructive'}
        size={figma.Size?.toLowerCase() as 'default' | 'sm' | 'lg'}
      >
        {figma["Show Icon"] && <Icon icon={figma.$children[0].$componentName as string} />}
        {figma["Show Text"] && figma["Toggle Text"]}
      </Toggle>
    );
  },
});
