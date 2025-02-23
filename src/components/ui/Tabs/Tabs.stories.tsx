import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./Tabs.tsx"

export default {
  title: 'Example/Tabs',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

// TBD: user can provide where's the UI component in path,
//      so that when user click copy-the-code,
//      the import statement will be generated automatically with AI by respecting the path in that code
//
//      - Having a customized "Code" tab on Panel
//      -
export const Variant1 = {
  name: 'Default',
  render: () => {
    const [value, setValue] = useState('password')
    return (
      <Tabs defaultValue="password" value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <h1>Account details</h1>
        </TabsContent>
        <TabsContent value="password">
          <h1>Password details</h1>
        </TabsContent>
      </Tabs>
    )
  },
};