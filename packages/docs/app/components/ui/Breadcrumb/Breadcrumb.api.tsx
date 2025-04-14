import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Breadcrumb.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="breadcrumb-demo"
        anatomy={meta.anatomy}
        preview={
          <p>
            Note that <code className='tw:code'>{`<BreadcrumbFinal>`}</code> is optional, because what it does is literally just indicating the current viewingpage using more eye-catching style
            <br />
            <br />
          </p>
        }
      />

      <br />
      <br />

      <DemoScenariosSection />
      <VersatileTabs
        settings={[
          {
            title: "Advanced",
            type: "preview",
            demoId: "breadcrumb-mix",
          },
          {
            title: "Expansible",
            type: "preview",
            demoId: "breadcrumb-expansible-collapse",
            content: (
              <p>
                Now the hidden menu under the ellipsis can be show up on click, and the menu style will be different in desktop and in mobile.
                <br />
                <br />
              </p>
            )
          },
        ]}
      />
      <br />
      <br />
    </>
  )
}