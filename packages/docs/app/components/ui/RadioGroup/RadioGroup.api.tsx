import {
  UsageSection,
  DependenciesSection,
} from "#/components/internal/ApiDoc.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./RadioGroup.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>


      <ComponentPageUsage
        demoId="radio-group-demo"
        enableHeading
        anatomy={meta.anatomy}
      />



    </>
  )
}