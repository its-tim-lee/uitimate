import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Progress } from "./Progress.tsx";

interface FigmaProgressProps extends BaseFigmaProps {
  Percent?: "100%" | "75%" | "50%" | "25%" | "0%";
}

figmaMapping({
  componentKey: "2070a50256515903c5d7eaea949a63fab03b362f",
  mapper(figma: FigmaProgressProps) {
    return <Progress value={parseInt(figma.Percent ?? "0")}/>;
  },
});
