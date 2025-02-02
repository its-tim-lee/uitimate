import { Toggle } from "../Toggle/Toggle.tsx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "./Drawer.tsx"

export default {
  title: 'Example/Drawer',
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
      <Drawer>
        <DrawerTrigger asChild>
          <Toggle variant="outline" pressed={false}>Open Drawer</Toggle>
        </DrawerTrigger>
        <DrawerContent>
          <div className="tw:mx-auto tw:w-full tw:max-w-sm tw:flex tw:flex-col tw:gap-4">
            <span>Some content</span>
            <DrawerClose asChild>
              <Toggle variant="outline" pressed={false}>Cancel</Toggle>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    )
  },
};
