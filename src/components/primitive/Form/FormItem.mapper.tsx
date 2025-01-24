import { z } from "zod"
import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Form, FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "./Form.tsx";
import { Select, SelectContent, SelectValue, SelectTrigger } from "../Select/Select.tsx";
import { Textarea } from "../Textarea/Textarea.tsx";
import { Input } from "../../composite/input/index.tsx";
import { RadioGroup } from "../RadioGroup/RadioGroup.tsx";
import { Checkbox } from "../../composite/Checkbox/Checkbox.tsx";

interface Figma extends BaseFigmaProps {
  "Item": ChildrenNode;
}

figmaMapping({
  componentKey: "4487acd148e80a4807dc14621e83f3639327a30b",
  mapper(figma: Figma) {
    const child = figma.$children[0];
    if (child.$name === 'ControlElements') return <>{child}</> // This will make Builder to use React.Fragment under the hood
    const componentProperties = new Map(); // @ts-ignore
    child.inputs.forEach(e => componentProperties.set(e.name, e.value));

    const label = componentProperties.get("Label");
    const labelVisible = componentProperties.get("Show Label");
    const descriptionVisible = componentProperties.get("Show Description");
    const description = componentProperties.get("Description");
    const placeholder = componentProperties.get("Placeholder");
    const title = componentProperties.get("Title");
    const titleVisible = componentProperties.get("Show Title");
    const outline = componentProperties.get("Outline");
    const outlineVisible = componentProperties.get("Show Outline");

    let formControl = undefined
    switch (child.$name) {
      case 'Select':
        formControl = (
          <Select>
            <SelectTrigger><SelectValue placeholder={placeholder} /></SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        )
        break;
      case 'Textarea':
        formControl = <Textarea placeholder={placeholder} />
        break;
      case 'Input':
        formControl = <Input placeholder={placeholder} />
        break;
      case 'RadioGroup':
        formControl = <RadioGroup>
          {child.$children[1].$children}
        </RadioGroup>
        break;
      case 'Checkbox':
        formControl = <Checkbox title={titleVisible ? title : undefined} outline={outlineVisible ? outline : undefined} />
        break;
    }
    return (
      <FormItem name={figma.$id}>
        {labelVisible && <FormLabel>{label}</FormLabel>}
        <FormControl>{formControl}</FormControl>
        {descriptionVisible && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    );
  },
});
