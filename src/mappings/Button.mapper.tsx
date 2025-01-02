import {
  figmaMapping,
  type BaseFigmaProps,
  type ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { Button } from "@mui/material";

// ❖ <Button>
interface FigmaButtonProps extends BaseFigmaProps {
  "Start Icon"?: boolean;
  "End Icon"?: boolean;
  "↳ End Icon#9980:0"?: ChildrenNode; // when "End Icon" is true
  "↳ Start Icon#9975:0"?: ChildrenNode; // when "Start Icon" is true
  Label?: string;
  Size?: "Large" | "Medium" | "Small";
  Color?:
    | "Primary"
    | "Secondary"
    | "Error"
    | "Warning"
    | "Info"
    | "Success"
    | "Inherit"
    | "Inherit (white)";
  State?: "Enabled" | "Hovered" | "Focused" | "Pressed" | "Disabled";
  Variant?: "Contained" | "Outlined" | "Text";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "b48f64d8a96e0b33593e31c3f9e8d0957cba3fa9",
  mapper(figma: FigmaButtonProps) {
    return (
      <Button
        startIcon={
          figma["Start Icon"] ? figma["↳ Start Icon#9975:0"] : undefined
        }
        endIcon={figma["End Icon"] ? figma["↳ End Icon#9980:0"] : undefined}
        size={
          figma.Size === "Large"
            ? "large"
            : figma.Size === "Medium"
            ? "medium"
            : figma.Size === "Small"
            ? "small"
            : undefined
        }
        color={
          figma.Color === "Primary"
            ? "primary"
            : figma.Color === "Secondary"
            ? "secondary"
            : figma.Color === "Error"
            ? "error"
            : figma.Color === "Warning"
            ? "warning"
            : figma.Color === "Info"
            ? "info"
            : figma.Color === "Success"
            ? "success"
            : figma.Color === "Inherit"
            ? "inherit"
            : undefined
        }
        disabled={figma.State === "Disabled"}
        variant={
          figma.Variant === "Contained"
            ? "contained"
            : figma.Variant === "Outlined"
            ? "outlined"
            : figma.Variant === "Text"
            ? "text"
            : undefined
        }
      >
        {figma.Label}
      </Button>
    );
  },
});
