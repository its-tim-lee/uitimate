import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./Textarea.meta";
import ComponentPageHero from "#/components/internal/ComponentPageHero";
import { Link } from "react-router";

export default () => {
  return (
    <>

      <ComponentPageUsage
        demoId="textarea-demo"
        enableHeading
      />

    </>
  )
}