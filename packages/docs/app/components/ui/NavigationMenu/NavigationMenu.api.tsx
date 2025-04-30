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


    </>
  )
}