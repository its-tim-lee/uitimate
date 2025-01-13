import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Switch } from "./Switch.tsx";
// import { useState } from "react";

interface FigmaSwitchProps extends BaseFigmaProps {
  "Show Description"?: boolean;
  "Description Text"?: string;
  "Show Text"?: boolean;
  "Switch Text"?: string;
  Active: "Off" | "On";
}

figmaMapping({
  componentKey: "bf795b212f720014f6a61d2ce7bcb3efb31718d3",
  mapper(figma: FigmaSwitchProps) {
    // const [checked, setChecked] = useState(figma.Active === "On")
    // return (
    //   <Switch checked={checked} onCheckedChange={setChecked}/>
    // );
    return (
      <Switch/>
    );
  },
});
