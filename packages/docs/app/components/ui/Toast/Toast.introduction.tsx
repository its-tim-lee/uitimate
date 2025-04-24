import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import { QA2, QA2Item, QA2Trigger, QA2Content } from "#/components/internal/QA2.tsx";
import meta from "./Toast.meta.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
import { DependenciesSection } from "#/components/internal/ApiDoc.tsx";
export default () => {
  return (
    <>


      <QuickDemoSection />
      <p>
        We simply forward <b className='tw:brand'>sonner</b> for the ease of use, so refer <Link className="tw:link" to="https://sonner.emilkowal.ski/" target="_blank" rel="noopener noreferrer">their documentation</Link> for more details.
      </p>
      <VersatileTabs2 defaultValue="toast-demo" variant="underline">
        <VersatileTabs2Content value="toast-demo" demoId="toast-demo" />
      </VersatileTabs2>

      <DependenciesSection />
      <Link className="tw:link" to="https://sonner.emilkowal.ski/" target="_blank" rel="noopener noreferrer">sonner</Link>

    </>
  );
}