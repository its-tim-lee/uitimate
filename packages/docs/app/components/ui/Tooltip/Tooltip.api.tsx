import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Tooltip.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="tooltip-instant"
        anatomy={meta.anatomy}
      />
      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Show on click",
            type: "preview",
            demoId: "tooltip-click-to-show",
            content: (
              <p>
                This example also reveal a technique to "de-couple the tooltip composition from the context".
                The context in this example is the icon; here, the entire tooltip component has no composition relationship with the icon －
                <code className='tw:code'>TooltipTrigger</code>doesn't need to wrap the icon.
                <br />
                <br />
              </p>
            )
          }
        ]}
      />
      <br />
      <br />

      <DependenciesSection />
      <a className="tw:link tw:w-fit" href="https://www.radix-ui.com/primitives/docs/components/tooltip" target="_blank" rel="noopener noreferrer">@radix-ui/react-tooltip</a>
    </>
  )
}