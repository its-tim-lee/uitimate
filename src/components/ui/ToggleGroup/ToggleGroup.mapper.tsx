import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup.tsx";
import { Icon } from "@iconify/react";
interface FigmaToggleGroupProps extends BaseFigmaProps {}

figmaMapping({
  componentKey: "55c51826f0b69052182a9eb9d1ced5cb9b4fe2c0",
  mapper(figma: FigmaToggleGroupProps) {
    return (
      /**
       * HACK:
       * It seems when Builder does Figma-to-code, it only allows us to access the component property on the topest instance.
       * So this means, even thought the direct childrens of ToggleGroup are instances,
       * you can't access their properties via something like `figma['Property']`,
       * and that's why below logic becomes a bit messy.
       */
      <ToggleGroup type="single">
        {figma.$children.map($c => { // @ts-ignore
          const inputs = $c.inputs.reduce((acc, input) => {
            acc[input.name] = input.value;
            return acc;
          }, {});
          const showIcon = inputs["Show Icon"];
          const showText = inputs["Show Text"];
          const toggleText = inputs["Toggle Text"];
          const iconComponent = $c.$children.find(child => child.type === "INSTANCE")?.$componentName;
          return (
            <ToggleGroupItem
              value={$c.$id}
              variant={inputs["Variant"]?.toLowerCase() as 'default' | 'secondary' | 'outline' | 'destructive'}
              size={inputs["Size"]?.toLowerCase() as 'default' | 'sm' | 'lg'}
            >
              {showIcon && <Icon icon={iconComponent as string} />}
              {showText && toggleText}
            </ToggleGroupItem>
          );
        })}

      </ToggleGroup>
    );
  },
});
