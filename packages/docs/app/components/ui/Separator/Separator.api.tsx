import {
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="separator-demo"
        enableHeading
      />


      <DemoScenariosSection />
      <VersatileTabs2 variant="underline" defaultValue="separator-vertical">
        <VersatileTabs2Content value="separator-vertical" demoId="separator-vertical" />
      </VersatileTabs2>


    </>
  )
}