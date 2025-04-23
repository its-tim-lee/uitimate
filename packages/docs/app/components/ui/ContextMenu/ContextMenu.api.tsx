import {
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./ContextMenu.meta.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="contextmenu-demo"
        enableHeading
        anatomy={meta.anatomy}
      />


      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://www.radix-ui.com/primitives/docs/components/context-menu" target="_blank" rel="noopener noreferrer">@radix-ui/react-context-menu</Link>
    </>
  )
}