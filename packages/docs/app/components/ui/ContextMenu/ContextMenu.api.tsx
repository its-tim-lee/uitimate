import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./ContextMenu.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageHero title='API' subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="contextmenu-demo"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/context-menu" target="_blank" rel="noopener noreferrer">@radix-ui/react-context-menu</Link>
    </>
  )
}