import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA.tsx";
import meta from "./Chart.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='Introduction' subtitle={meta.description} />

      <br />

      <QuickDemoSection />

      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "chart-demo",
          },
        ]}
      />

      <br />
      <br />

      <QuickStartSection />
      <p>
        What this componet does is literally just providing some helpful tools around the charts you built via <b className="tw:brand"><Link to='https://recharts.org/en-US/' className="tw:link" target="_blank">Recharts</Link></b>.
        (eg., tooltip), so all these tools are optional, and they don't really change anything on any chart.
        <br />
        <br />
        This is the only component in our library that literally just borrows from <b className="tw:brand">Shadcn</b> without any change,
        so for more example usages, refer to <Link className="tw:link" to='https://ui.shadcn.com/charts' target="_blank">their chart demos</Link>.
      </p>
      <br />
      <br />

    </>
  )
}