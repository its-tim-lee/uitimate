import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Separator } from "./Separator.tsx";

interface FigmaSeparatorProps extends BaseFigmaProps {
  Orientation: "Horizontal" | "Vertical";
}

figmaMapping({
  componentKey: "63fd1cf6fba7d7ccc2efc459bec72f7cc9ecf71e",
  mapper(figma: FigmaSeparatorProps) {
    return <Separator orientation={figma.Orientation.toLowerCase() as "horizontal" | "vertical"} />;
  },
});