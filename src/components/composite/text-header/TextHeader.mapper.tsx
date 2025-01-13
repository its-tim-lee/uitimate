import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { TextHeader } from "./index.tsx";

interface FigmaTextHeaderProps extends BaseFigmaProps {
  Subtitle?: string;
  Title?: string;
}

figmaMapping({
  componentKey: "18633a2b699bea5dba1160dfdde9dcc27f143a3f",
  mapper(figma: FigmaTextHeaderProps) {
    return <TextHeader title={figma.Title} subtitle={figma.Subtitle} />;
  },
});
