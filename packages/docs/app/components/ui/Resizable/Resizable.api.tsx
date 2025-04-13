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
      <ComponentPageHero title="API" subtitle={meta.description} />

      <br />

      <UsageSection />
      <ComponentPageUsage
        demoId="resizable-demo"
        anatomy={meta.anatomy}
      />

      <br />
      <br />

      <DependenciesSection />
      <Link className="tw:link tw:w-fit" to="https://github.com/bvaughn/react-resizable-panels" target="_blank" rel="noopener noreferrer">
        react-resizable-panels
      </Link>
    </>
  )
}