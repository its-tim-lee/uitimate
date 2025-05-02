import { VersatileTabs2, VersatileTabs2List, VersatileTabs2Trigger, VersatileTabs2Content } from "#/components/internal/VersatileTabs2";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import meta from "./Accordion.meta.tsx";
import { Link } from "react-router";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";

export default () => {
  return (
    <>
      <QuickDemoSection />
      <VersatileTabs2 defaultValue="accordion-demo" variant="pill">
        <VersatileTabs2Content value="accordion-demo" demoId="accordion-demo" />
      </VersatileTabs2>


      <QuickStartSection />
      <p>
        This component uses the anatomy:
      </p>
      <CodeBlock>
        {meta.anatomy ? String(meta.anatomy) : ''}
      </CodeBlock>

      <p>
        The most important props are <code className='tw:code'>type</code> and <code className='tw:code'>collapsible</code>.
        They're tricky to explain with words, so the best way to understand is to try the demos:
      </p>
      <VersatileTabs2 defaultValue="accordion-single" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="accordion-single">type=single</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="accordion-multiple">type=multiple</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="accordion-single-collapsible">type=single, collapsible</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="accordion-single" demoId="accordion-single" />
        <VersatileTabs2Content value="accordion-multiple" demoId="accordion-multiple" />
        <VersatileTabs2Content value="accordion-single-collapsible" demoId="accordion-single-collapsible" />
      </VersatileTabs2>
      <br />
      <p>
        You can make specific items non-interactive (disabled), or disable the entire component:
      </p>
      <VersatileTabs2 defaultValue="accordion-disabled" variant="underline">
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="accordion-disabled">disabled</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="accordion-single-item-disabled">single item disabled</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="accordion-disabled" demoId="accordion-disabled" />
        <VersatileTabs2Content value="accordion-single-item-disabled" demoId="accordion-single-item-disabled" />
      </VersatileTabs2>
      <br />
      <p>
        Let's! For more on its family components to use, and more demos on showing how versatile this component can be, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
    </>
  )
}