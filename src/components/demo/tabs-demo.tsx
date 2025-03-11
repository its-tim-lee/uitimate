import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs/Tabs.tsx"
import { useState } from "react";

export default () => {
  const [value, setValue] = useState("anatomy")
  const items = [
    { value: "preview", label: "Preview" },
    { value: "anatomy", label: "Anatomy" },
    { value: "download", label: "Download" },
    { value: "playground", label: "Playground" },
  ];
  return (
    <Tabs variant="underline" value={value} onValueChange={setValue}>
      <TabsList>
        {items.map(e => <TabsTrigger key={e.value} value={e.value}>{e.label}</TabsTrigger>)}
      </TabsList>
      {items.map(e => <TabsContent key={e.value} value={e.value}>{e.label}</TabsContent>)}
    </Tabs>
  );
}