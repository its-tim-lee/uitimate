



import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Button } from "./index.tsx";
import { Icon } from '@iconify/react';
interface FigmaButtonProps extends BaseFigmaProps {
  /**
   * This will always be an object like regardless its corresponding boolean value:
   * ```
   * {
   *  @type: "jsx"
   *  includeAirLayoutStyles: undefined
   *  name: "#SLOT"
   *  props: {children: undefined, figmaId: '15322:384565'}
   * }
   * ```
   */
  "Left Icon"?: ChildrenNode;
  "Show left icon"?: boolean;
  /**
   * Text will always be there, even though `Size` is `icon`, even though we can't see any content other than the icon in the Button instance in Figma.
   * When `Size` is `icon`, on the surface, `Text` is not showing up on the properties panel,
   * but the component definition still define `Text`, and it has a default.
   */
  Text: string;
  "Show right icon"?: boolean;
  "Right Icon"?: ChildrenNode;
  Variant?:
    | "Default"
    | "Secondary"
    | "Ghost"
    | "Link"
    | "Outline"
    | "Destructive";
  Size?: "default" | "icon" | "lg" | "sm";
}

figmaMapping({
  componentKey: "844f89f005078d22a426d175dbc98c9281d4012c",
  mapper(figma: FigmaButtonProps) {
    return <Button
      variant={figma.Variant?.toLowerCase() as 'default' | 'secondary' | 'ghost' | 'link' | 'outline' | 'destructive'}
      size={figma.Size?.toLowerCase() as 'default' | 'icon' | 'lg' | 'sm'}
    >
      {figma['Show left icon'] && <Icon icon={figma.$findOneByName('Icon')?.$children[0]?.$componentName as string} />}
      {figma.Size !== 'icon' && figma.Text}
      {figma['Show right icon'] && <Icon icon={figma.$findOneByName('Icon')?.$children[0]?.$componentName as string} />}
    </Button>;
  },
});
