import {
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc";
import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./Progress.meta";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="progress-loading"
        enableHeading
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="progress-demo" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="progress-demo">Indeterminate</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="dialog-loading">Dialog Loading</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="progress-demo" demoId="progress-demo" />
        <VersatileTabs2Content value="dialog-loading" demoId="dialog-loading" />
      </VersatileTabs2>


    </>
  )
}