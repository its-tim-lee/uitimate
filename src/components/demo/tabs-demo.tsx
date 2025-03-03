import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs/Tabs.tsx"

export default () => (
  <Tabs defaultValue="preview" variant="underline">
    <TabsList>
      <TabsTrigger value="preview">Preview</TabsTrigger>
      <TabsTrigger value="anatomy">Anatomy</TabsTrigger>
      <TabsTrigger value="download">Download</TabsTrigger>
      <TabsTrigger value="playground">Playground</TabsTrigger>
    </TabsList>
    <TabsContent value="preview">
      <h1>Preview</h1>
    </TabsContent>
    <TabsContent value="anatomy">
      <h1>Anatomy</h1>
    </TabsContent>
    <TabsContent value="download">
      <h1>Download</h1>
    </TabsContent>
    <TabsContent value="playground">
      <h1>Playground</h1>
    </TabsContent>
  </Tabs>
)