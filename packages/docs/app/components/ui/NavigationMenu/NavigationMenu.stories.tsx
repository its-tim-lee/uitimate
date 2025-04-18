
import NavigationMenuDemo from "#/components/demo/navigationmenu-demo.tsx"
export default {
  title: 'Example/NavigationMenu',
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
  render: () => <NavigationMenuDemo />
};