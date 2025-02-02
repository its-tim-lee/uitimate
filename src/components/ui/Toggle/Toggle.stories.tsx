import { Icon } from "@/components/ui/Icon/Icon.tsx";
import { Toggle } from "./Toggle.tsx"

export default {
  title: 'Example/Toggle',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'No-state Button',
  render: () => {
    return (
      <Toggle pressed={false} variant="outline" size="sm">
        <Icon icon='lucide:shopping-cart' />Order
      </Toggle>
    )
  },
};

export const Variant2 = {
  name: 'Stateful Button',
  render: () => {
    return (
      <div className="tw:flex tw:flex-col tw:gap-4">
        <Toggle defaultPressed variant="default" size="lg">
          Variant: default, size: lg
        </Toggle>
        <Toggle defaultPressed variant="outline" size="lg">
          Variant: outline, size: lg
        </Toggle>
        <Toggle defaultPressed variant="destructive" size="default">
          Variant: destructive, size: default
        </Toggle>
        <Toggle defaultPressed variant="secondary" size="sm" className="tw:underline-offset-4 tw:hover:underline">
          Variant: secondary, size: sm
        </Toggle>
      </div>
    )
  },
};

export const Variant3 = {
  name: 'Link',
  render: () => {
    return (
      <Toggle defaultPressed variant="default" size="lg" className="tw:underline-offset-4 tw:hover:underline">
      Hover Me
    </Toggle>
    )
  },
};