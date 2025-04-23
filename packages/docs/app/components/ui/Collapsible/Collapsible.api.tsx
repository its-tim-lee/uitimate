import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Collapsible.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="collapsible-demo"
        enableHeading
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="collapsible-open-control" variant="underline">
        <VersatileTabs2Content value="collapsible-open-control" demoId="collapsible-open-control" caption='The source code here also shows how to use Collapsible in a "decoupled" fashion.' />
      </VersatileTabs2>

      <br />
      <br />

      <DemoRecipeSection />
      <VersatileTabs2 defaultValue="collapsible-stepper" variant="underline">
        <VersatileTabs2Content value="collapsible-stepper" demoId="collapsible-stepper" />
      </VersatileTabs2>

      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/collapsible" target="_blank" rel="noopener noreferrer">@radix-ui/react-collapsible</Link>
    </>
  )
}