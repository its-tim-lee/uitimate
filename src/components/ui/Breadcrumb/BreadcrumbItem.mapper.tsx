import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage } from "./Breadcrumb.tsx";

interface FigmaBreadcrumbItemProps extends BaseFigmaProps {
  Text: string;
  Variant: "Link" | "Dropdown" | "Ellipsis" | "Link Current";
  State?: "Default" | "Hover";
}

figmaMapping({
  componentKey: "c361a176809d7fdafe4ac140e3a2a5d517b66224",
  mapper(figma: FigmaBreadcrumbItemProps) {
    return <BreadcrumbItem>{
      (figma.Variant === 'Link' && <BreadcrumbLink href=''>{figma.Text}</BreadcrumbLink> ) ||
      (figma.Variant === 'Link Current' && <BreadcrumbPage>{figma.Text}</BreadcrumbPage> )
    }</BreadcrumbItem>;
  },
});
