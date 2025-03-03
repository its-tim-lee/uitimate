import { Toggle } from "@/components/ui/Toggle/Toggle.tsx"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./Tooltip.tsx"
import TooltipDemo from "../../demo/tooltip-demo.tsx";

export default {
  title: 'Example/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => <TooltipDemo />
};