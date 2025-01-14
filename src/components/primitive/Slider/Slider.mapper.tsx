import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Slider } from "./Slider.tsx";

interface FigmaSliderProps extends BaseFigmaProps {}

figmaMapping({
  componentKey: "58f2a4d72a255e3ed252efa86afae73dc39875a2",
  mapper(figma: FigmaSliderProps) {
    return <Slider defaultValue={[50]}/>;
  },
});
