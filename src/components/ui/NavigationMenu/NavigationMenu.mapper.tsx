import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { NavigationMenu } from "./NavigationMenu.tsx";

interface Figma extends BaseFigmaProps { }

figmaMapping({
  componentKey: "8f211fc1d9aa25915a8beb2b6189f4ee92e12900",
  mapper($f: Figma) {
    return <NavigationMenu>{$f.$children}</NavigationMenu>;
  },
});
