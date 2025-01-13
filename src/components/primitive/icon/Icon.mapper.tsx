import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Icon } from "@iconify/react";

interface FigmaIconProps extends BaseFigmaProps {
  Content?: ChildrenNode;
}

figmaMapping({
  componentKey: "4c6d1f242d79d60870cc61dd3179bc8e683710f6",
  mapper(figma: FigmaIconProps) {
    return <Icon icon={figma.$children[0].$componentName as string} />;
  },
});
