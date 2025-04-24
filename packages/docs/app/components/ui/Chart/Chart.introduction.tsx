import { Link } from "react-router";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";

export default () => {
  return (
    <>

      <QuickDemoSection />

      <VersatileTabs2 defaultValue="chart-demo" variant="underline">
        <VersatileTabs2Content value="chart-demo" demoId="chart-demo" />
      </VersatileTabs2>

      <QuickStartSection />
      <p>
        This component just adds some helpful extras (like tooltips) to the charts you build with <b className="tw:brand"><Link to='https://recharts.org/en-US/' className="tw:link" target="_blank">Recharts</Link></b>. They're optional and won't mess with your chart's core functionality.
      </p>
      <p>
        This is the <i>only</i> component in our library that's almost just copy-paste from <b className="tw:brand">Shadcn</b>. So, for more usage examples, definitely check out <Link className="tw:link" to='https://ui.shadcn.com/charts' target="_blank">their chart demos</Link>.
      </p>

    </>
  )
}