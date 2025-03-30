import DropdownMenuMix1 from "../../demo/dropdownmenu-mix1.tsx";
import DropdownMenuDemo from "../../demo/dropdownmenu-demo.tsx";
import DropdownMenuMix2 from "../../demo/dropdownmenu-mix2.tsx";


export default {
  title: 'Example/DropdownMenu',
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
  render: () => <DropdownMenuDemo />
};

export const Mix1 = {
  name: 'Mix1',
  render: () => <DropdownMenuMix1 />
};

export const Mix2 = {
  name: 'Mix2',
  render: () => <DropdownMenuMix2 />
};

