import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./HoverCard.tsx"
import { Toggle } from "../Toggle/Toggle.tsx"


export default {
  title: 'Components/HoverCard',
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
      <HoverCard>
        <HoverCardTrigger asChild>
          <Toggle variant="secondary">@nextjs</Toggle>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            content
          </div>
        </HoverCardContent>
      </HoverCard>
    )
  },
};