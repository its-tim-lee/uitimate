import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";
import VersatileTabs from "#/components/internal/VersatileTabs";
import { CodeBlock } from "#/components/internal/CodeBlock.tsx";
import QA from "#/components/internal/QA";
import meta from "./Accordion.meta.tsx";

export default () => {
  return (
    <>
      <Heading size="h1">
        <HeadingTitle>Accordion Introduction</HeadingTitle>
        <HeadingSubtitle>{ meta.description }</HeadingSubtitle>
      </Heading>

      <br />
      <br />

      <Heading size="h2">
        Quick Demo
      </Heading>

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

      <Heading size="h2">Quick Start</Heading>
      <p>
        This component is used under the anatomy of:
      </p>
      <CodeBlock>
        {`
          <Accordion>
            <AccordionItem>
              <AccordionTrigger />
              <AccordionContent />
            </AccordionItem>
          </Accordion>
        `}
      </CodeBlock>

      <br />
      <br />

      <Heading size="h2">Q&A</Heading>

      <QA items={[
        {
          value: '...',
          trigger: "What is the Accordion component used for?",
          content: (
            <p>
              The Accordion component is used to display collapsible content panels for presenting information in a limited amount of space.
            </p>
          )
        },
      ]} />
    </>
  )
}