import { Icon } from "@iconify/react";

import {
  Badge,
} from "./Badge.tsx"

export default {
  title: 'Example/Badge',
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
  render: () => <Badge>Badge</Badge>
};

export const Variant2 = {
  name: 'Secondary',
  render: () => <Badge variant="secondary">Badge</Badge>
};

export const Variant3 = {
  name: 'Destructive',
  render: () => <Badge variant="destructive">Badge</Badge>
};

export const Variant4 = {
  name: 'Outline',
  render: () => <Badge variant="outline">Badge</Badge>
};

