import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Carousel.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="carousel-demo"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Auto-loop",
            type: "preview",
            demoId: "carousel-auto-loop",
          },
          {
            title: "Use API",
            type: "preview",
            demoId: "carousel-use-api",
          },
        ]}
      />
      <br />
      <br />

      <DependenciesSection />

      <Link className="tw:link tw:w-fit" to="https://github.com/davidjerleke/embla-carousel" target="_blank" rel="noopener noreferrer">embla-carousel</Link>
    </>
  )
}