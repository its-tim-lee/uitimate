import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./NavigationMenu.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="navigationmenu-demo"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DependenciesSection />

      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/navigation-menu" target="_blank" rel="noopener noreferrer">@radix-ui/react-navigation-menu</Link>
    </>
  )
}