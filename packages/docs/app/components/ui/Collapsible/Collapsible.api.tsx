import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Collapsible.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="collapsible-demo"
        anatomy={meta.anatomy}
      />
      <br />
      <br />
      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Open Control",
            type: "preview",
            demoId: "collapsible-open-control",
            content: (
              <p>
                The source code here also reveals how to use Collapsible in a "decoupled" fashion.
                <br />
                <br />
              </p>
            )
          }
        ]}
      />
      <br />
      <br />

      <DemoRecipeSection />
      <VersatileTabs
        settings={[

          {
            title: "Stepper",
            type: "preview",
            demoId: "collapsible-stepper"
          }
        ]}
      />

      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/collapsible" target="_blank" rel="noopener noreferrer">@radix-ui/react-collapsible</Link>
    </>
  )
}