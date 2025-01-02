import { Alert, Button } from "@mui/material";
import type { RegisteredComponent } from "@builder.io/sdk-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

// import SimpleAlert from "./components/SimpleAlert";

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
    canHaveChildren: true,
    inputs: [
      {
        name: "action",
        type: "string",
        meta: {
          ts: "any",
        },
      },
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "any",
        },
      },
      {
        name: "classes",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "Partial<AlertClasses>",
        },
      },
      {
        name: "className",
        type: "string",
      },
      {
        name: "closeText",
        type: "string",
      },
      {
        name: "color",
        type: "string",
        enum: ["error", "info", "success", "warning"],
      },
      {
        name: "component",
        type: "string",
        meta: {
          ts: "ElementType<any, keyof IntrinsicElements>",
        },
      },
      {
        name: "components",
        type: "string",
        meta: {
          ts: "{ CloseButton?: ElementType<any, keyof IntrinsicElements>; CloseIcon?: ElementType<any, keyof IntrinsicElements>; }",
        },
      },
      {
        name: "componentsProps",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "{ closeButton?: IconButtonProps; closeIcon?: SvgIconProps; }",
        },
      },
      {
        name: "elevation",
        type: "number",
      },
      {
        name: "icon",
        type: "string",
        meta: {
          ts: "any",
        },
      },
      {
        name: "iconMapping",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "Partial<Record<OverridableStringUnion<AlertColor, AlertPropsColorOverrides>, any>>",
        },
      },
      {
        name: "ref",
        type: "string",
        meta: {
          ts: "ComponentProps extends { ref?: infer RefType; } ? RefType : Ref<unknown>",
        },
      },
      {
        name: "severity",
        type: "string",
        enum: ["error", "info", "success", "warning"],
      },
      {
        name: "slotProps",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "{ [P in keyof K]?: K[P]; }",
        },
      },
      {
        name: "slots",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "Partial<Slots>",
        },
      },
      {
        name: "square",
        type: "boolean",
      },
      {
        name: "style",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "CSSProperties",
        },
      },
      {
        name: "sx",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "SxProps<Theme>",
        },
      },
      {
        name: "variant",
        type: "string",
        enum: ["filled", "outlined", "standard"],
      },
    ],
  },
  {
    component: Button,
    name: "Button",
    override: true,
    canHaveChildren: true,
    inputs: [
      {
        name: "action",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "Ref<ButtonBaseActions>",
        },
      },
      {
        name: "centerRipple",
        type: "boolean",
      },
      {
        name: "children",
        type: "string",
        hideFromUI: true,
        meta: {
          ts: "any",
        },
      },
      {
        name: "classes",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "Partial<ButtonClasses>",
        },
      },
      {
        name: "className",
        type: "string",
      },
      {
        name: "color",
        type: "string",
        enum: [
          "error",
          "info",
          "inherit",
          "primary",
          "secondary",
          "success",
          "warning",
        ],
      },
      {
        name: "disabled",
        type: "boolean",
      },
      {
        name: "disableElevation",
        type: "boolean",
      },
      {
        name: "disableFocusRipple",
        type: "boolean",
      },
      {
        name: "disableRipple",
        type: "boolean",
      },
      {
        name: "disableTouchRipple",
        type: "boolean",
      },
      {
        name: "endIcon",
        type: "string",
        meta: {
          ts: "any",
        },
      },
      {
        name: "focusRipple",
        type: "boolean",
      },
      {
        name: "focusVisibleClassName",
        type: "string",
      },
      {
        name: "fullWidth",
        type: "boolean",
      },
      {
        name: "href",
        type: "string",
        required: false,
      },
      {
        name: "LinkComponent",
        type: "string",
        meta: {
          ts: "ElementType<any, keyof IntrinsicElements>",
        },
      },
      {
        name: "size",
        type: "string",
        enum: ["large", "medium", "small"],
      },
      {
        name: "startIcon",
        type: "string",
        meta: {
          ts: "any",
        },
      },
      {
        name: "style",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "CSSProperties",
        },
      },
      {
        name: "sx",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "SxProps<Theme>",
        },
      },
      {
        name: "TouchRippleProps",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "Partial<TouchRippleProps>",
        },
      },
      {
        name: "touchRippleRef",
        type: "object",
        hideFromUI: true,
        meta: {
          ts: "Ref<TouchRippleActions>",
        },
      },
      {
        name: "variant",
        type: "string",
        enum: ["contained", "outlined", "text"],
      },
    ],
  },
];
