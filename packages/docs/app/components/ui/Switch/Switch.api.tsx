import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Switch.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="switch-demo"
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "With Dialog",
            type: "preview",
            demoId: "switch-detect-on-off",
          }
        ]}
      />
      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/switch" target="_blank" rel="noopener noreferrer">@radix-ui/react-switch</Link>
    </>
  )
}