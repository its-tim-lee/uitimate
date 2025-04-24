import {
  UsageSection,
  DemoScenariosSection,
  DependenciesSection,
  DemoRecipeSection,
} from "#/components/internal/ApiDoc.tsx";
import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";
import meta from "./InputOtp.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";

export default () => {
  return (
    <>


      <ComponentPageUsage
        enableHeading
        demoId="inputotp-demo"
        anatomy={meta.anatomy}
      />


      <DependenciesSection />

      <Link
        className="tw:link tw:w-fit"
        to="https://github.com/guilherme-n/input-otp"
        target="_blank"
        rel="noopener noreferrer"
      >
        input-otp
      </Link>
    </>
  )
}