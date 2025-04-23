import {
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./NavigationMenu.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="navigationmenu-demo"
        enableHeading
        anatomy={meta.anatomy}
      />

      <DependenciesSection />

      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/navigation-menu" target="_blank" rel="noopener noreferrer">@radix-ui/react-navigation-menu</Link>
    </>
  )
}