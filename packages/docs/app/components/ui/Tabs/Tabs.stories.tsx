import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./Tabs.tsx"
import TabsPill from "../../demo/tabs-pill.tsx";
import TabsUnderline from "../../demo/tabs-demo.tsx";
export default {
  title: 'Example/Tabs',
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
  name: 'API / Pill',
  render: () => <TabsPill />
};

export const Variant2 = {
  name: 'API / Underline',
  render: () => <TabsUnderline />
};