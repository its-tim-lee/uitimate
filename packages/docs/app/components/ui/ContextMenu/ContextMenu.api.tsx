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


    </>
  )
}