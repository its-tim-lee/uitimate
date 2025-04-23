import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import meta from "./Menubar.meta.tsx";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="menubar-demo"
        enableHeading
        anatomy={meta.anatomy}
        preview={<p>
          This demo shows the 90% most-used family components. The rest? You'll probably never need them 🤷‍♂️
          <br />
          <br />
        </p>}
      />


      <DependenciesSection />
      <a className="tw:link tw:w-fit" href="https://www.radix-ui.com/primitives/docs/components/menubar" target="_blank" rel="noopener noreferrer">@radix-ui/react-menubar</a>
    </>
  )
}