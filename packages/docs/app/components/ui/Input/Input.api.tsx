import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Input.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="input-demo"
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "With Button",
            type: "preview",
            demoId: "input-with-button",
          },
          {
            title: "File Upload",
            type: "preview",
            demoId: "input-form",
          },
        ]}
      />

      <br />
      <br />

      <DependenciesSection />
      <span>The input component from <Link className="tw:link tw:w-fit" to="https://headlessui.com/react/input" target="_blank" rel="noopener noreferrer">@headlessui/react</Link></span>
    </>
  )
}