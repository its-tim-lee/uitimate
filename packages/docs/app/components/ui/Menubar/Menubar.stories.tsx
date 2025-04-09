import MenubarDemo from "../../demo/menubar-demo.tsx";

export default {
  title: 'Example/Menubar',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Demo = {
  name: 'Demo',
  render: () => <MenubarDemo />
};

