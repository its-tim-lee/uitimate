import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "./Drawer.tsx"
import { Button } from "../Button/Button"
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
          <Button variant="outline" pressed={false}>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="tw:mx-auto tw:w-full tw:max-w-sm tw:flex tw:flex-col tw:gap-4">
            <span>Some content</span>
            <DrawerClose asChild>
              <Button variant="outline" pressed={false}>Cancel</Button>
            </DrawerClose>
          </div>
        </DrawerContent>
      </Drawer>
    )
  },
};
