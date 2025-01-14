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
import { AspectRatio } from "./components/primitive/aspect-ratio";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./components/primitive/avatar";
import { Badge } from "./components/composite/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/composite/breadcrumb";
import { Button } from "./components/composite/button";
import { Input } from "./components/composite/input";
import { Progress } from "./components/primitive/progress";
import { Separator } from "./components/primitive/separator";
import { Slider } from "./components/primitive/Slider/Slider";
import { Switch } from "./components/compound/Switch/Switch";
import { TabsList, TabsTrigger, Tabs } from "./components/primitive/tabs";
import { TextHeader } from "./components/composite/text-header";
import { Toggle } from "./components/primitive/Toggle/Toggle";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "./components/primitive/ToggleGroup/ToggleGroup";

export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Accordion,
    name: "Accordion",
    canHaveChildren: true,
    inputs: [
      // API:https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/Input.md
      // or see https://www.builder.io/c/docs/component-api-reference#embed
      // or https://www.builder.io/c/docs/register-components-options
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
        // hideFromUI: true,
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
    canHaveChildren: true,
    noWrap: true,
    inputs: [
      {
        name: "prop3",
        type: "number",
      },
    ],
  },
  {
    component: AlertDescription,
    name: "AlertDescription",
    canHaveChildren: true,
    noWrap: true,
    inputs: [
      {
        name: "prop2",
        type: "number",
      },
    ],
  },
  {
    component: AlertTitle,
    name: "AlertTitle",
    noWrap: true,
    inputs: [
      {
        name: "prop1",
        type: "number",
      },
    ],
    canHaveChildren: true,
  },
  {
    component: AspectRatio,
    name: "AspectRatio",
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
        name: "ratio",
        type: "number",
      },
    ],
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
    // inputs: [
    //   {
    //     name: "children",
    //     type: "string",
    //     hideFromUI: true,
    //     meta: {
    //       ts: "ReactNode",
    //     },
    //   },
    // ],
    canHaveChildren: true,
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Text",
          options: {
            text: "Badge",
          },
        },
      },
    ],
  },
  {
    component: Breadcrumb,
    name: "Breadcrumb",
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
    component: BreadcrumbItem,
    name: "BreadcrumbItem",
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
    component: BreadcrumbLink,
    name: "BreadcrumbLink",
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
    component: BreadcrumbList,
    name: "BreadcrumbList",
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
    component: BreadcrumbPage,
    name: "BreadcrumbPage",
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
    component: BreadcrumbSeparator,
    name: "BreadcrumbSeparator",
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
    // inputs: [
    //   {
    //     name: "children",
    //     type: "string",
    //     hideFromUI: true,
    //     meta: {
    //       ts: "ReactNode",
    //     },
    //   },
    // ],
    // canHaveChildren: true,
    // defaultChildren: [
    //   /**
    //    * HACK:
    //    * If this led to below error, just not use the entry on Builder Console, cuz the entry has already broken.
    //    * Using another entry should work.
    //    * ```
    //    * Could not find a registered component named "Core:Fragment".
    //    * If you registered it, is the file that registered it imported by the file that needs to render it? Error Component Stack
    //    * ```
    //    *
    //    * TODO:
    //    * Even we don't use this, it seems we still can place any Builder's built-in component via the Console.
    //    * So maybe this is really just for presentation and nothing more.
    //    */
    //   {
    //     '@type': '@builder.io/sdk:Element',
    //     component: {
    //       name: 'Text',
    //       options: {
    //         text: 'Button',
    //       },
    //     },
    //   },
    // ],
  },
  {
    component: Icon,
    name: "Icon",
    canHaveChildren: true,
    noWrap: true,
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
  {
    component: Input,
    name: "Input",
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
    component: Progress,
    name: "Progress",
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
        name: "max",
        type: "number",
      },
      {
        name: "value",
        type: "number",
      },
    ],
  },
  {
    component: Separator,
    name: "Separator",
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
        name: "decorative",
        type: "boolean",
      },
      {
        name: "orientation",
        type: "string",
        enum: ["horizontal", "vertical"],
      },
    ],
  },
  {
    component: Slider,
    name: "Slider",
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
        name: "disabled",
        type: "boolean",
      },
      {
        name: "inverted",
        type: "boolean",
      },
      {
        name: "max",
        type: "number",
      },
      {
        name: "min",
        type: "number",
      },
      {
        name: "minStepsBetweenThumbs",
        type: "number",
      },
      {
        name: "name",
        type: "string",
      },
      {
        name: "orientation",
        type: "string",
        enum: ["horizontal", "vertical"],
      },
      {
        name: "step",
        type: "number",
      },
      {
        name: "value",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "number[]",
        },
      },
    ],
  },
  {
    component: Switch,
    name: "Switch",
    canHaveChildren: true,
    inputs: [
      {
        name: "checked",
        type: "boolean",
      },
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "ReactNode",
        },
      },
      {
        name: "required",
        type: "boolean",
      },
    ],
  },
  {
    component: Tabs,
    name: "Tabs",
  },
  {
    component: TabsList,
    name: "TabsList",
  },
  {
    component: TabsTrigger,
    name: "TabsTrigger",
  },
  {
    component: TextHeader,
    name: "TextHeader",
  },
  {
    component: Toggle,
    name: "Toggle",
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
        name: "defaultPressed",
        type: "boolean",
      },
      {
        name: "pressed",
        type: "boolean",
      },
    ],
  },
  {
    component: ToggleGroup,
    name: "ToggleGroup",
  },
  {
    component: ToggleGroupItem,
    name: "ToggleGroupItem",
  },
];
