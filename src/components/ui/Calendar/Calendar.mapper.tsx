import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Calendar } from "./Calendar.tsx";

interface Figma extends BaseFigmaProps {
  "Month Text"?: string;
  "Show Next Button"?: boolean;
  "Show Previous Button"?: boolean;
}

figmaMapping({
  componentKey: "b942ee733eced3a2d818995d95c118844313796d",
  mapper(figma: Figma) {
    return (
      <Calendar/>
    );
  },
});
