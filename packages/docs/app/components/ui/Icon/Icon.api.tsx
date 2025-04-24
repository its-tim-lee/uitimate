import {
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Icon.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="icon-size"
        anatomy={meta.anatomy}
        enableHeading
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="icon-demo" variant="underline">
        <VersatileTabs2Content value="icon-demo" demoId="icon-demo" />
      </VersatileTabs2>


      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://iconify.design/docs/icon-components/react/" target="_blank" rel="noopener noreferrer">@iconify/react</Link>
    </>
  )
}