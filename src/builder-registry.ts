import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion/Accordion.tsx";
import { Button } from "@/components/ui/Button/Button.tsx";
import { Fragment } from "react";

/**
 * Simply import components here even with no real registratio,
 * that's enough to show them in the builder devtools to register
 */
import { Icon } from "@iconify/react";
import type { RegisteredComponent } from "@builder.io/sdk-react";
import { TextHeader } from "@/components/ui/TextHeader/TextHeader.tsx";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./components/ui/Alert/Alert.tsx";
import { AspectRatio } from "./components/ui/AspectRatio/AspectRatio.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./components/ui/Avatar/Avatar.tsx";
import { Badge } from "./components/ui/Badge/Badge.tsx";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/Breadcrumb/Breadcrumb.tsx";
import { Calendar } from "./components/ui/Calendar/Calendar";
import { Checkbox } from "./components/ui/Checkbox/Checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/Form/Form.tsx";
import { Input } from "./components/ui/Input/Input.tsx";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from "./components/ui/Menubar/Menubar.tsx";
import { Progress } from "./components/ui/Progress/Progress.tsx";
import {
  RadioGroup,
  RadioGroupItem,
} from "./components/ui/RadioGroup/RadioGroup.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/Select/Select.tsx";
import { Separator } from "./components/ui/Separator/Separator.tsx";
import { Slider } from "./components/ui/Slider/Slider.tsx";
import { Switch } from "./components/ui/Switch/Switch.tsx";
import { TabsList, TabsTrigger, Tabs } from "./components/ui/Tabs/Tabs.tsx";
import { Textarea } from "./components/ui/Textarea/Textarea.tsx";
import { Toggle } from "./components/ui/Toggle/Toggle.tsx";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "./components/ui/ToggleGroup/ToggleGroup.tsx";

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
    component: Calendar,
    name: "Calendar"
  },
  {
    component: Checkbox,
    name: "Checkbox",
  },
  {
    component: Form,
    name: "Form",
  },
  {
    component: FormControl,
    name: "FormControl",
  },
  {
    component: FormDescription,
    name: "FormDescription",
  },
  {
    component: FormItem,
    name: "FormItem",
  },
  {
    component: FormLabel,
    name: "FormLabel",
  },
  {
    component: FormMessage,
    name: "FormMessage",
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
  },
  {
    component: Menubar,
    name: "Menubar",
  },
  {
    component: MenubarContent,
    name: "MenubarContent",
  },
  {
    component: MenubarMenu,
    name: "MenubarMenu",
  },
  {
    component: MenubarTrigger,
    name: "MenubarTrigger",
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
    component: RadioGroup,
    name: "RadioGroup",
  },
  {
    component: RadioGroupItem,
    name: "RadioGroupItem",
  },
  {
    component: Fragment,
    name: "React.Fragment",
  },
  {
    component: Select,
    name: "Select",
  },
  {
    component: SelectContent,
    name: "SelectContent",
  },
  {
    component: SelectItem,
    name: "SelectItem",
  },
  {
    component: SelectTrigger,
    name: "SelectTrigger",
  },
  {
    component: SelectValue,
    name: "SelectValue",
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
    component: Textarea,
    name: "Textarea",
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
    component: TextHeader,
    name: "TextHeader",
  },
  {
    component: Toggle,
    name: "Toggle",
    // noWrap: true
  },
  {
    component: ToggleGroup,
    name: "ToggleGroup",
    // noWrap: true
  },
  {
    component: ToggleGroupItem,
    name: "ToggleGroupItem",
    // noWrap: true
  },
];
