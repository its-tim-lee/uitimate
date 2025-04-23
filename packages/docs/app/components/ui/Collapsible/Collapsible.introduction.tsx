import { VersatileTabs2, VersatileTabs2Content } from "#/components/internal/VersatileTabs2.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import meta from "./Collapsible.meta.tsx";
import { QuickDemoSection, QuickStartSection } from "#/components/internal/IntroductionDoc.tsx";
import InfoBanner from "#/components/internal/InfoBanner.tsx";

export default () => {
  return (
    <>
      <QuickDemoSection />
      <VersatileTabs2 defaultValue="collapsible-demo" variant="underline">
        <VersatileTabs2Content value="collapsible-demo" demoId="collapsible-demo" />
      </VersatileTabs2>


      <QuickStartSection />
      <InfoBanner>
        If you're 100% sure you fully understand how <b className='tw:brand'>Radix</b>'s Collapsible works, you can skip this introduction.
      </InfoBanner>
      <br />

      <p>
        Collapsible is one of the components from <b className='tw:brand'>Radix</b> that I believe is heavily underappreciated due to
        its inadequate demo and somewhat misleading introduction in their documentation.

        <br />
        <br />
        It's an incredible component that deserves a few words so you can understand its potential and use cases.
        <br />
      </p>
      <p>
        This component uses this simple anatomy:
      </p>
      <CodeBlock>{meta.anatomy}</CodeBlock>
      <p>
        Simple, right? The key thing to understand is that <code className="tw:code">CollapsibleContent</code>
        takes up space in the layout - whether it's collapsed or not, it will affect the surrounding elements and spacing!
        <br />
        <br />
        Now, open your browser's devtools and inspect how <code className="tw:code">CollapsibleContent</code>
        is rendered in the DOM.
        <br />
        <br />
        Don't let the demo above limit your imagination. Once you grasp how it works, you'll see it can be used in many situations like:
      </p>
      <br />

      <VersatileTabs2 defaultValue="collapsible-stepper" variant="underline">
        <VersatileTabs2Content value="collapsible-stepper" demoId="collapsible-stepper" />
      </VersatileTabs2>
      <br />
      <p>
        For more family components and the demos showing how versatile this component can be, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
    </>
  );
};