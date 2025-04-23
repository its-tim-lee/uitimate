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

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://headlessui.com/react/textarea" target="_blank" rel="noopener noreferrer">@headlessui/react</Link>
    </>
  )
}