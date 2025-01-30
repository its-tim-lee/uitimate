import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "./NavigationMenu";

interface Figma extends BaseFigmaProps {
  Trigger: string;
  Variant: "Trigger" | "Link";
  Active: "On" | "Off";
}

figmaMapping({
  componentKey: "8dc659da50c12fab2c8a2ba548081d3c1ff169e5",
  mapper($f: Figma) {
    return (
      <NavigationMenuItem>
        {
          $f.Variant === "Trigger" ? (
            <>
              <NavigationMenuTrigger>{$f.Trigger}</NavigationMenuTrigger>
              <NavigationMenuContent></NavigationMenuContent>
            </>
          ) : <NavigationMenuLink>{$f.Trigger}</NavigationMenuLink>
        }
      </NavigationMenuItem>
    );
  },
});
