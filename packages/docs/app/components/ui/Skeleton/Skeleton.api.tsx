import {
  UsageSection,
} from "#/components/internal/ApiDoc.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./Skeleton.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="skeleton-demo"
        enableHeading
      />

      <br />
      <br />
    </>
  )
}