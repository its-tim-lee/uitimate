import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Badge } from "./index.tsx";

interface FigmaBadgeProps extends BaseFigmaProps {
  Text?: string;
  Variant?: "Default" | "Secondary" | "Outline" | "Destructive";
  State?: "Default" | "Hover" | "Focus";
}

figmaMapping({
  componentKey: "3c9488c4e6779e17b4afecdfca0def6dbfc23f0b",
  mapper(figma: FigmaBadgeProps) {
    return <Badge variant={figma.Variant?.toLowerCase() as 'default' | 'secondary' | 'outline' | 'destructive'}>{figma.Text}</Badge>;
  },
});
