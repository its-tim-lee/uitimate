import {
  UsageSection,
  DemoApiSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Menubar.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="menubar-demo"
        anatomy={meta.anatomy}
        preview={<p>
          This demo has shown all the most common family components (the leftover can be extreme rare to be used).
          <br />
          <br />

        </p>}
      />

      <br />
      <br />

      <DependenciesSection />
      <a className="tw:link tw:w-fit" href="https://www.radix-ui.com/primitives/docs/components/menubar" target="_blank" rel="noopener noreferrer">@radix-ui/react-menubar</a>
    </>
  )
}