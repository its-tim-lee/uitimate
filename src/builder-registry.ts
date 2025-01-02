import type { RegisteredComponent } from "@builder.io/sdk-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Accordion,
    name: "Accordion",
    canHaveChildren: true,
    inputs: [
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "any",
        },
      },
      {
        name: "disabled",
        type: "boolean",
      },
      {
        name: "orientation",
        type: "string",
        enum: ["horizontal", "vertical"],
      },
      {
        name: "type",
        type: "string",
        enum: ["single"],
        required: true,
      },
      {
        name: "value",
        type: "string",
      },
    ],
  },
  {
    component: AccordionContent,
    name: "AccordionContent",
    canHaveChildren: true,
    inputs: [
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "any",
        },
      },
      {
        name: "forceMount",
        type: "string",
        meta: {
          ts: "true",
        },
      },
    ],
  },
  {
    component: AccordionItem,
    name: "AccordionItem",
    canHaveChildren: true,
    inputs: [
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "any",
        },
      },
      {
        name: "disabled",
        type: "boolean",
      },
      {
        name: "value",
        type: "string",
        required: true,
      },
    ],
  },
  {
    component: AccordionTrigger,
    name: "AccordionTrigger",
    canHaveChildren: true,
    inputs: [
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "any",
        },
      },
    ],
  },
];
