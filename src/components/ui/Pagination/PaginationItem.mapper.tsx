import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./Pagination.tsx";

interface Figma extends BaseFigmaProps {
  "Trigger"?: string;
  Variant?: "Previous" | "Next" | "Link" | "Ellipsis";
  State?: "Default" | "Disabled" | "Hover" | "Active" | "Active (Hover)";
}

figmaMapping({
  componentKey: "fa53ef3b68212652bacbaefa5fd3f9546f0accde",
  mapper($f: Figma) {
    let item = undefined
    switch ($f.Variant) {
      case "Previous": item = <PaginationPrevious href="#" />; break;
      case "Next": item = <PaginationNext href="#" />; break;
      case "Link": item = <PaginationLink href="#">{$f["Trigger"]}</PaginationLink>; break;
      case "Ellipsis": item = <PaginationEllipsis />; break;
    }
    return <PaginationItem>{item}</PaginationItem>;
  },
});
