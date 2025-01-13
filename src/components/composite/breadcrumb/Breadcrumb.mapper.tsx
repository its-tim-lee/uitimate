import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Breadcrumb, BreadcrumbList } from "./index.tsx";

interface FigmaBreadcrumbProps extends BaseFigmaProps {
  "Breadcrumb 5"?: boolean;
  Separator?: ChildrenNode;
  "Breadcrumb 1"?: boolean;
  "Breadcrumb 3"?: boolean;
  "Breadcrumb 2"?: boolean;
  "Breadcrumb 4"?: boolean;
  Size?: "md" | "sm";
}

figmaMapping({
  componentKey: "156a88e53c2b8a0fe3e1a87a0953d47d645246f1",
  mapper(figma: FigmaBreadcrumbProps) {
    return <Breadcrumb>
      <BreadcrumbList>{figma.$children}</BreadcrumbList>
    </Breadcrumb>;
  },
});
