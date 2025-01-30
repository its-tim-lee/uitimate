import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Calendar } from "./Calendar.tsx";

interface FigmaCalendarProps extends BaseFigmaProps { }

figmaMapping({
  componentKey: "b61e929cf8d74c095abd24d14aed128353923ae4",
  mapper(figma: FigmaCalendarProps) {
    return <Calendar mode="single" />;
  },
});
