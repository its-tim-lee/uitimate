import {
  UsageSection,
  DemoApiSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc";
import VersatileTabs from "#/components/internal/VersatileTabs";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./Progress.meta";
import ComponentPageHero from "#/components/internal/ComponentPageHero";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="progress-loading"
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Indeterminate",
            type: "preview",
            demoId: "progress-demo",
          }
        ]}
      />
      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/progress" target="_blank" rel="noopener noreferrer">@radix-ui/react-progress</Link>
    </>
  )
}