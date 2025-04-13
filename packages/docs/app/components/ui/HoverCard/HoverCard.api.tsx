import {
  UsageSection,
  DemoApiSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./HoverCard.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="hovercard-demo"
        anatomy={meta.anatomy}
      />

      <br />
      <br />
      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "API Doc",
            type: "preview",
            demoId: "hovercard-api-doc",
          },
        ]}
      />

      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/hover-card" target="_blank" rel="noopener noreferrer">@radix-ui/react-hover-card</Link>
    </>
  )
}