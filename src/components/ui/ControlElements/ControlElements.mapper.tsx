/**
 * This file is only meant to be used with Figma design. In the practice coding, we don't need this at all.
 */

import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/Select/Select.tsx";
import { Input } from '@/components/ui/Input/Input.tsx';
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/Form/Form.tsx";

interface Figma extends BaseFigmaProps {
  "Show Middle Control": boolean;
  "Show Left Control": boolean;
  "Middle Control": ChildrenNode;
  "Left Control": ChildrenNode;
  "Right Control": ChildrenNode;
  "Show Right Control": boolean;
}

figmaMapping({
  componentKey: "3ec14075a609d5dfd8a62c804e4e77cacd658d2e",
  mapper(figma: Figma) {
    return <div className="tw:flex tw:gap-4">
      {
        figma.$children.map(($c, idx) => {
          const componentProperties = new Map(); // @ts-ignore
          $c.inputs.forEach(e => componentProperties.set(e.name, e.value));
          const placeholder = componentProperties.get("Placeholder");
          const labelVisible = componentProperties.get("Show Label")
          const label = labelVisible ? componentProperties.get("Label") : ''
          const description = componentProperties.get("Description")
          return (
            <FormItem name={`id${idx}`}>
              {label && <FormLabel>{label}</FormLabel>}
              <FormControl>
                {
                  $c.$name === "Input" ?
                  <Input placeholder={placeholder} /> :
                  (
                    <Select>
                      <SelectTrigger><SelectValue placeholder={placeholder} /></SelectTrigger>
                      <SelectContent></SelectContent>
                    </Select>
                  )
                }
              </FormControl>
              {description && <FormDescription>{description}</FormDescription>}
              <FormMessage />
            </FormItem>
          )
        })
      }
    </div>
  },
});
