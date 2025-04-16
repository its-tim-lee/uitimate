import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Select.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="select-demo"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Scrollable",
            type: "preview",
            demoId: "select-scrollable",
          },
        ]}
      />
      <br />
      <br />

      <DependenciesSection />

      <a className="tw:link tw:w-fit" href="https://www.npmjs.com/package/@radix-ui/react-select" target="_blank" rel="noopener noreferrer">@radix-ui/react-select</a>
    </>
  )
}