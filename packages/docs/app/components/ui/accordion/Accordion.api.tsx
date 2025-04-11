import {
  UsageSection,
  DemoApiSection,
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Accordion.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="accordion-demo"
        anatomy={meta.anatomy}
      />

      <br />

      <DemoApiSection />
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "accordion-overview",
          },
        ]}
      />
      <br />
      <br />

      <DemoScenariosSection />
      <h1>WIP...</h1>
      {/* <VersatileTabs
        settings={[
          {
            title: "Disabled",
            type: "preview",
            demoId: "accordion-disabled",
          },
          {
            title: "Single Item Disabled",
            type: "preview",
            demoId: "accordion-single-item-disabled",
          },
        ]}
      /> */}

      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/accordion" target="_blank" rel="noopener noreferrer">@radix-ui/react-accordion</Link>
    </>
  )
}