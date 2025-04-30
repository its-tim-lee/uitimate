import {
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Select.meta.tsx";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="select-demo"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DemoScenariosSection />
      <VersatileTabs2 variant="underline" defaultValue="select-scrollable">
        <VersatileTabs2Content value="select-scrollable" demoId="select-scrollable" />
      </VersatileTabs2>


    </>
  )
}