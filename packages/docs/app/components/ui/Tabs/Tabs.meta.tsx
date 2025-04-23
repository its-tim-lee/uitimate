import type { ComponentMeta } from "#/types/index.ts";
const meta: ComponentMeta = {
  description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  anatomy: `
<Tabs>
  <TabsList>
    <TabsTrigger />
    {/* more <TabsTrigger />... */}
  </TabsList>

  <TabsContent />
  {/* more <TabsContent />... */}
</Tabs>
  `
}

export default meta