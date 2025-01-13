import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { TabsTrigger } from "./index.tsx";

interface FigmaTabsTriggerProps extends BaseFigmaProps {
  Icon?: ChildrenNode;
  "Show Icon"?: boolean;
  "Text": string;
  Active: "Off" | "On";
}

figmaMapping({
  componentKey: "1b8361e873533fdddda4dd031f2f0494208dd39a",
  mapper(figma: FigmaTabsTriggerProps) {
    return <TabsTrigger value={figma.Text}>{figma.Text}</TabsTrigger>;
  },
});