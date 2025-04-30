import {
  UsageSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage";
import meta from "./Resizable.meta";
import ComponentPageHero from "#/components/internal/ComponentPageHero";
import { Link } from "react-router";

export default () => {
  return (
    <>


      <ComponentPageUsage
        enableHeading
        demoId="resizable-demo"
        anatomy={meta.anatomy}
      />

    </>
  )
}