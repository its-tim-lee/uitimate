import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Alert } from "../components/components.tsx";

interface FigmaComponent extends BaseFigmaProps {
  "On Close?"?: boolean;
  "Action?"?: boolean;
  "Title?"?: boolean;
  Instance?: ChildrenNode;
  Description?: string; // when "Description?" is true
  "Description?"?: boolean;
  Title?: string; // when "Title?" is true
  Severity?: "Error" | "Warning" | "Info" | "Success";
  Variant?: "Filled" | "Outlined" | "Standard";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "6667c0c2adfdec8edfb8aeb5a7869297b91f063f",
  mapper(figma: FigmaComponent) {
    return <Alert severity="success">{figma.Title}</Alert>;
  },
});
