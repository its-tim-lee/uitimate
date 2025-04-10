import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";
import VersatileTabs from "#/components/internal/VersatileTabs";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import { Link } from "react-router";
import QA from "#/components/internal/QA";
import meta from "./meta";

export default () => {
  return (
    <>
      <Heading size="h1">
        <HeadingTitle>Introduction</HeadingTitle>
        <HeadingSubtitle>{meta.description}</HeadingSubtitle>
      </Heading>


      <br />

      <Heading size="h2">
        <HeadingTitle>Quick Demo</HeadingTitle>
        <HeadingSubtitle>Heading is commonly found in below (but not limit to) cases:</HeadingSubtitle>
      </Heading>
      <VersatileTabs
        settings={[
          {
            title: "Article",
            type: "preview",
            demoId: "heading-article",
          },
          {
            title: "Card",
            type: "preview",
            demoId: "heading-card",
          },
          {
            title: "Alert",
            type: "preview",
            demoId: "heading-alert",
          },
        ]}
      />

      <br />
      <br />

      <Heading size="h2">Quick Start</Heading>
      <p>
        This component is used under the anatomy of:
      </p>
      <CodeBlock>
        {`
          <Heading>
            <HeadingTitle/>
            <HeadingSubtitle/>
          </Heading>
        `}
      </CodeBlock>
      <p>
        All the child components are optional, but if only title is needed, instead of the tedious:
      </p>
      <CodeBlock>
        {`
          <Heading>
            <HeadingTitle>...<HeadingTitle>
          </Heading>
        `}
      </CodeBlock>
      <p>
        This ergonomic approach will have the same result:
      </p>
      <CodeBlock>
        {`
          <Heading>...<Heading>
        `}
      </CodeBlock>
      <p>
        {`<HeadingTitle>`} can have 6 sizes (note: from h1 to h6), but what if you want to control the size while still use above's ergonomic approach? Just specify that on the root component:
      </p>
      <CodeBlock>
        {`
          <Heading size='h3'>...</Heading>
        `}
      </CodeBlock>
      <p>
        Here is the demos for all the possible sizes:
      </p>
      <VersatileTabs
        settings={[
          {
            title: "Only title",
            type: "preview",
            demoId: "heading-only-title",
            content: <>note that we don't use any {`<HeadingSubtitle>`}</>
          },
          {
            title: "6 Levels",
            type: "preview",
            demoId: "heading-6levels",
            content: <>{`<HeadingSubtitle>`} will keep the same style no matter which size is declared on {`<Heading>`}</>
          },
        ]}
      />
      <p>
        That's! <br /> Now go ahead to check <Link className='tw:link' to="/docs/components/core/heading/api">more demos</Link> or read the source code!
      </p>
      <br />
      <br />

      <Heading size="h2">Q&A</Heading>
      <p>
        If you have the questions that's more like a design philosophy on this component,
        you actually can have a better answer by just checking the source code
        (we provide more context there using clear comments); for other questions, see below:
      </p>
      <br />

      <QA items={[
        {
          value: 'q1',
          trigger: "Can we use <HeadingSubtitle> as the only child of <Heading>?",
          content: (
            <p>
              You can, but, …it doesn't make sense.
              Because the reason that a heading can get reader's more attention is mostly through the style impression from {`<HeadingTitle>`}, not {`<HeadingSubtitle>`}.
            </p>
          )
        },
      ]} />
    </>
  );
};

