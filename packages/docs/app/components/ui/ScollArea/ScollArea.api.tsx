
import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./ScollArea.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="scroll-area-demo"
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Horizontal Scrolling",
            type: "preview",
            demoId: "scroll-area-horizontal",
            content: (
              <p>
                Horizontal scrolling requires to use another family component <code className="tw:code">{`<ScrollAreaScrollBar />`}</code>.
                And this is probably the only case that you will NOT just use <code className="tw:code">{`<ScrollArea />`}</code> to build the scrolling.
                <br />
                <br />
              </p>
            )
          },
        ]}
      />
      <br />
      <br />

      <DependenciesSection />
      <a className="tw:link tw:w-fit" href="https://www.radix-ui.com/primitives/docs/components/scroll-area" target="_blank" rel="noopener noreferrer">@radix-ui/react-scroll-area</a>
    </>
  )
}