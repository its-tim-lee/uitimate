import VersatileTabs from "#/components/internal/VersatileTabs.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA.tsx";
import meta from "./Toast.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='Introduction' subtitle={meta.description} />

      <br />

      <QuickDemoSection />
      <p>
        We simply forward <b className='tw:brand'>sonner</b> for the ease of use, so refer <Link className="tw:link" to="https://sonner.emilkowal.ski/" target="_blank" rel="noopener noreferrer">their documentation</Link> for more details.
      </p>
      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "toast-demo",
          },
        ]}
      />

    </>
  );
}