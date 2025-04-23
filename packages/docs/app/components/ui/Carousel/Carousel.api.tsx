import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Carousel.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="carousel-demo"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DemoScenariosSection />
      <VersatileTabs2 defaultValue="carousel-auto-loop" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="carousel-auto-loop">Auto-loop</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="carousel-use-api">Use API</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="carousel-auto-loop" demoId="carousel-auto-loop" />
        <VersatileTabs2Content value="carousel-use-api" demoId="carousel-use-api" />
      </VersatileTabs2>

      <DependenciesSection />

      <Link className="tw:link tw:w-fit" to="https://github.com/davidjerleke/embla-carousel" target="_blank" rel="noopener noreferrer">embla-carousel</Link>
    </>
  )
}