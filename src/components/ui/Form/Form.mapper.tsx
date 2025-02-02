import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Form } from "./Form.tsx";
import { z } from "zod";

interface Figma extends BaseFigmaProps {
  "Item1": ChildrenNode;
  "Show Item1": boolean;
  "Item2": ChildrenNode;
  "Show Item2": boolean;
  "Item3": ChildrenNode;
  "Show Item3": boolean;
  "Item4": ChildrenNode;
  "Show Item4": boolean;
  "Item5": ChildrenNode;
  "Show Item5": boolean;
  "Item6": ChildrenNode;
  "Show Item6": boolean;
  "Item7": ChildrenNode;
  "Show Item7": boolean;
  "Show Button1": boolean;
  "Show Button2": boolean;
}

figmaMapping({
  componentKey: "aba1aa9dee59a9e9275314e0841e707167e8c553",
  mapper(figma: Figma) {
    try {
      return ( // @ts-ignore
        <Form
          onSubmit={() => {}}
          // schema={z.object({})}
          className="tw:space-y-8"
        >
          {figma.$children}
        </Form>
      );
    } catch (e) { return console.error('Unexpected error in Form mapping process: ', e) }
  },
});
