
import DrawerDemo from "../../demo/drawer-demo.tsx";
export default {
  title: 'Example/Drawer',
  includeStories: [],
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
  render: () => <DrawerDemo />
};
