import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import { Tabs, TabsList } from "./index.tsx";

/**
 * TODO: guess we can add different instructions for each component to Builder's AI
 * In this case, we might tell it to generate the code with the setting like:
 * `<Tabs defaultValue="password" value={value} onValueChange={setValue}>`
 *
 * Or think about how can we provide TS type of a component tow Builder's AI as an instruction?
 * Otherwise AI might add some weird props such `tabIndex` on <TabsTrigger>
 */
figmaMapping({
  componentKey: "e51a2a8a45186f9e096f31eca5b5515afe9bbccd",
  mapper(figma: BaseFigmaProps) {
    return <Tabs>
      <TabsList>
        {figma.$children}
      </TabsList>
    </Tabs>;
  },
});
