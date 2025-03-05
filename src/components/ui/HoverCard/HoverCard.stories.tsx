import HoverCardDemo from "../../demo/hovercard-demo.tsx";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./HoverCard.tsx"
import { Toggle } from "../Toggle/Toggle.tsx"
import { Button } from "../Button/Button.tsx";


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
  render: () => <HoverCardDemo />
};


