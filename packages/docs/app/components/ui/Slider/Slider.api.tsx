import {
  UsageSection,
  DemoApiSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./Slider.meta";
import ComponentPageHero from "#/components/internal/ComponentPageHero";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title="API" subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="slider-demo"
      />

      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/slider" target="_blank" rel="noopener noreferrer">@radix-ui/react-slider</Link>
    </>
  );
};