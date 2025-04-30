import {
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="input-demo"
        enableHeading
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="input-with-button" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="input-with-button">With Button</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="input-form">File Upload</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="input-with-button" demoId="input-with-button" />
        <VersatileTabs2Content value="input-form" demoId="input-form" />
      </VersatileTabs2>


    </>
  )
}