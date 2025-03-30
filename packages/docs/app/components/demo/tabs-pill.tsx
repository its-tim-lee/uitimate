
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs/Tabs.tsx"

export default () => (
  <Tabs defaultValue="create" variant="pill" className="tw:w-[320px] tw:md:w-[600px]">
    <TabsList>
      <TabsTrigger value="create">Create</TabsTrigger>
      <TabsTrigger value="configure">Configure</TabsTrigger>
    </TabsList>
    <TabsContent value="create">
      <p>
        Hi! I'll help you build a new GPT. You can say something like,
        "make a creative who helps generate visuals for new products" or
        "make a software engineer who helps format my code."
      </p>
      <p>
        What would you like to make?
      </p>
    </TabsContent>
    <TabsContent value="configure">
      Whatever
    </TabsContent>
  </Tabs>
)