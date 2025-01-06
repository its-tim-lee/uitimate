/**
 * Simply import components here even with no real registratio,
 * that's enough to show them in the builder devtools to register
 */
import { Icon } from "@iconify/react";
import type { RegisteredComponent } from "@builder.io/sdk-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/primitive/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./components/composite/alert/index.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./components/primitive/avatar";
import { Badge } from "./components/composite/badge";
import { Button } from "./components/composite/button";

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
  {
    component: Alert,
    name: "Alert",
  },
  {
    component: AlertDescription,
    name: "AlertDescription",
  },
  {
    component: AlertTitle,
    name: "AlertTitle",
  },
  {
    component: Avatar,
    name: "Avatar",
    canHaveChildren: true,
    inputs: [
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "ReactNode",
        },
      },
    ],
  },
  {
    component: AvatarFallback,
    name: "AvatarFallback",
    canHaveChildren: true,
    inputs: [
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "ReactNode",
        },
      },
      {
        name: "delayMs",
        type: "number",
      },
    ],
  },
  {
    component: AvatarImage,
    name: "AvatarImage",
    canHaveChildren: true,
    inputs: [
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "ReactNode",
        },
      },
    ],
  },
  {
    component: Badge,
    name: "Badge",
    canHaveChildren: true,
    inputs: [
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "ReactNode",
        },
      },
    ],
  },
  {
    component: Button,
    name: "Button",
    canHaveChildren: true,
    inputs: [
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "ReactNode",
        },
      },
    ],
  },
  {
    component: Icon,
    name: "Icon",
    canHaveChildren: true,
    inputs: [
      {
        name: "icon",
        type: "string",
        meta: {
          ts: "string | IconifyIcon",
        },
        required: true,
      },
    ],
  },
];
