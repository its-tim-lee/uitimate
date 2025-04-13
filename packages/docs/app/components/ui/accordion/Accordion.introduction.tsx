import VersatileTabs from "#/components/internal/VersatileTabs";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import QA from "#/components/internal/QA";
import meta from "./Accordion.meta.tsx";
import ComponentPageHero from "#/components/internal/ComponentPageHero.tsx";
import { Link } from "react-router";
import { QuickDemoSection, QuickStartSection } from "#/components/internal/IntroductionDoc.tsx";

export default () => {
  return (
    <>
      <ComponentPageHero title='Introduction' subtitle={meta.description} />

      <br />
      <br />

      <QuickDemoSection />

      <VersatileTabs
        settings={[
          {
            type: "preview",
            demoId: "accordion-demo",
          },
        ]}
      />

      <br />
      <br />

      <QuickStartSection />
      <p>
        This component is used under the anatomy of:
      </p>
      <CodeBlock>
        {meta.anatomy}
      </CodeBlock>

      <br />
      <p>

      The first and the most important props are <code className='tw:code'>type</code> and <code className='tw:code'>collapsible</code>.
      They are tricky to describe by words, so the best way to learn them is playing around the demos:
      </p>
      <br />
      <VersatileTabs
        settings={[
          {
            title: "type=single",
            type: "preview",
            demoId: "accordion-single",
          },
          {
            title: "type=multiple",
            type: "preview",
            demoId: "accordion-multiple",
          },
          {
            title: "type=single, collapsible",
            type: "preview",
            demoId: "accordion-single-collapsible",
          },
        ]}
      />
      <br />
      <p>

      You can even decide that which item to be disabled (ie., non-interactive),
      or disable the entire component:
      </p>
      <br />
      <VersatileTabs
        settings={[
          {
            title: "disabled",
            type: "preview",
            demoId: "accordion-disabled",
          },
          {
            title: "single item disabled",
            type: "preview",
            demoId: "accordion-single-item-disabled",
          },
        ]}
      />
      <br />
      <p>
        Let's! For more on its family components to use, and more demos on showing how versatile this component can be, check <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>
      <br />
      <br />
    </>
  )
}