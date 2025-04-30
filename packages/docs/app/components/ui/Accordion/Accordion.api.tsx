import {
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Accordion.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="accordion-demo"
        enableHeading
        anatomy={meta.anatomy}
      />

      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="accordion-overview" variant="underline">
        <VersatileTabs2Content value="accordion-overview" demoId="accordion-overview" />
      </VersatileTabs2>
    </>
  )
}