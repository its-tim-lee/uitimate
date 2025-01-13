import { Icon } from '@iconify/react';
import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { BreadcrumbSeparator } from "./index.tsx";

interface FigmaBreadcrumbSeparatorProps extends BaseFigmaProps {
  Icon: ChildrenNode;
}

figmaMapping({
  componentKey: "98a57a1d41f0502bea319c8200f5f79c08f3588f",
  mapper(figma: FigmaBreadcrumbSeparatorProps) {
    return <BreadcrumbSeparator>
      <Icon icon={figma.$findOneByName('Icon')?.$componentName as string} />
    </BreadcrumbSeparator>;
  },
});
