import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2 } from "#/components/internal/VersatileTabs2.tsx";
import { VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Switch.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="switch-demo"
        enableHeading
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="switch-detect-on-off" variant="underline">
        <VersatileTabs2Content value="switch-detect-on-off" demoId="switch-detect-on-off" />
      </VersatileTabs2>


    </>
  )
}