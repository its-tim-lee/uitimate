import {
  UsageSection,

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

      <ComponentPageUsage
        enableHeading
        demoId="slider-demo"
      />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/slider" target="_blank" rel="noopener noreferrer">@radix-ui/react-slider</Link>
    </>
  );
};