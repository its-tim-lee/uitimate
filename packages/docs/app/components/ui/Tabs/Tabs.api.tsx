import {
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Tabs.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="tabs-demo"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="tabs-pill" variant="underline">
        <VersatileTabs2Content value="tabs-pill" demoId="tabs-pill" />
      </VersatileTabs2>


      <DependenciesSection />

      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/tabs" target="_blank" rel="noopener noreferrer">@radix-ui/react-tabs</Link>
    </>
  )
}