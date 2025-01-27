import { Toggle } from "@/components/ui/Toggle/Toggle.tsx"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./Tooltip.tsx"

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
  render: () => {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <Toggle variant="outline" size="sm">
            Hover
          </Toggle>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    )
  },
};