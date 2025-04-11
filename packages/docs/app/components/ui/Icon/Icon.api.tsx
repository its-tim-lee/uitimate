import {
  UsageSection,
  DemoApiSection,
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Icon.meta.tsx";
import { Link } from "react-router";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="icon-size"
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Search",
            type: "preview",
            demoId: "icon-demo",
          },
        ]}
      />

      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://iconify.design/docs/icon-components/react/" target="_blank" rel="noopener noreferrer">@iconify/react</Link>
      <br />
      <br />
    </>
  )
}