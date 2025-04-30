import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content, VersatileTabs2List, VersatileTabs2Trigger } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Command.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="command-demo"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DemoScenariosSection />
      <VersatileTabs2 variant="underline" defaultValue="command-dialog">
        <VersatileTabs2Content value="command-dialog" demoId="command-dialog" />
      </VersatileTabs2>


      <DemoRecipeSection />
      <VersatileTabs2 variant="underline" defaultValue="combobox">
        <VersatileTabs2Content value="combobox" demoId="combobox" />
      </VersatileTabs2>


    </>
  )
}