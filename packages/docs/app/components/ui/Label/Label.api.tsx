import {
  UsageSection,

  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Label.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="checkbox-demo"
      />

      <br />

      {/* <DemoApiSection />
      <VersatileTabs
        settings={[
          {
            title: "Basic Usage",
            type: "preview",
            demoId: "label-basic",
          },
          {
            title: "With Form Control",
            type: "preview",
            demoId: "label-with-form-control",
          }
        ]}
      />
      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Required Field",
            type: "preview",
            demoId: "label-required",
          },
          {
            title: "Disabled State",
            type: "preview",
            demoId: "label-disabled",
          }
        ]}
      />
      <br />
      <br />

      <DemoRecipeSection />
      <VersatileTabs
        settings={[
          {
            title: "Custom Styling",
            type: "preview",
            demoId: "label-custom-style",
          }
        ]}
      /> */}
      <br />
      <br />

      <DependenciesSection />
      <Link
        className="tw:link tw:w-fit"
        to="https://www.radix-ui.com/primitives/docs/components/label"
        target="_blank"
        rel="noopener noreferrer"
      >
        @radix-ui/react-label
      </Link>
    </>
  )
}