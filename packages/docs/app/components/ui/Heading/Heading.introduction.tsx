import { VersatileTabs2, VersatileTabs2Content, VersatileTabs2List, VersatileTabs2Trigger } from "#/components/internal/VersatileTabs2.tsx";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import { QA2, QA2Item, QA2Trigger, QA2Content } from "#/components/internal/QA2.tsx";
import meta from "./Heading.meta.tsx";
import { QuickDemoSection, QuickStartSection, QASection } from "#/components/internal/IntroductionDoc.tsx";
import ComponentPageUsage from "#/components/internal/ComponentPageUsage.tsx";

export default () => {
  return (
    <>
      <ComponentPageUsage
        demoId="heading-article"
        enableHeading
        anatomy={meta.anatomy}
      />


      <QuickDemoSection />
      <VersatileTabs2
        variant="underline"
        defaultValue="heading-card"
      >
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="heading-card">Card</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="heading-alert">Alert</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="heading-card" demoId="heading-card" />
        <VersatileTabs2Content value="heading-alert" demoId="heading-alert" />
      </VersatileTabs2>


      <QuickStartSection />
      <p>
        This component follows this anatomy:
      </p>
      <CodeBlock>{meta.anatomy ? String(meta.anatomy) : ''}</CodeBlock>
      <p>
        All child components are optional. If you only need a title, instead of the verbose:
      </p>
      <CodeBlock>
        {`
          <Heading>
            <HeadingTitle>...<HeadingTitle>
          </Heading>
        `}
      </CodeBlock>
      <p>
        You can use this simpler approach with the same result:
      </p>
      <CodeBlock>
        {`
          <Heading>...<Heading>
        `}
      </CodeBlock>
      <p>
        {`<HeadingTitle>`} supports 6 sizes (h1 to h6). Want to control the size while using the simpler approach? Just specify it on the root component:
      </p>
      <CodeBlock>
        {`
          <Heading size='h3'>...</Heading>
        `}
      </CodeBlock>
      <br />
      <p>
        Here are demos for all possible sizes:
      </p>
      <VersatileTabs2
        variant="underline"
        defaultValue="heading-only-title"
      >
        <VersatileTabs2List>
          <VersatileTabs2Trigger value="heading-only-title">Only title</VersatileTabs2Trigger>
          <VersatileTabs2Trigger value="heading-6levels">6 Levels</VersatileTabs2Trigger>
        </VersatileTabs2List>
        <VersatileTabs2Content value="heading-only-title" demoId="heading-only-title">
          Note that we don't use any {`<HeadingSubtitle>`}
        </VersatileTabs2Content>
        <VersatileTabs2Content value="heading-6levels" demoId="heading-6levels">
          By default, {`<HeadingSubtitle>`} maintains the same style regardless of the size declared on {`<Heading>`}
        </VersatileTabs2Content>
      </VersatileTabs2>
      <p>
        For more info on related components and demos showing how versatile this component can be, check out <Link className="tw:link" to="./../api">the API reference page</Link>.
      </p>

      <QASection />
      <p className='tw:text-muted-foreground'>
        If you have questions about the design philosophy of this component,
        you'll find better answers by checking the source code
        (we provide context there with clear comments).
        For other common questions, see below:
      </p>

      <QA2>
        <QA2Item value="q1">
          <QA2Trigger>Can we use &lt;HeadingSubtitle&gt; as the only child of &lt;Heading&gt;?</QA2Trigger>
          <QA2Content>
            <p>
              You can, but it doesn't make sense.
              Headings grab readers' attention mainly through the visual style of {`<HeadingTitle>`}, not {`<HeadingSubtitle>`}.
            </p>
          </QA2Content>
        </QA2Item>
      </QA2>
    </>
  );
};

