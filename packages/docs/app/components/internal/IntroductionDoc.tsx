import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading.tsx";
import type { ComponentProps } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/Collapsible/Collapsible";
import { Cta } from "../ui/Cta/Cta";
import QA from "#/components/internal/QA.tsx";

const QuickDemoSection = () => {
  return (
    <Heading size="h2" id='quick-demo' className="not-prose tw:pt-10">Quick Demo</Heading>
  )
}

const QuickStartSection = () => {
  return (
    <Heading size="h2" id='quick-start' className="not-prose">
      <HeadingTitle>
        Quick Start
      </HeadingTitle>
      <HeadingSubtitle>
        Walking you through the common usage of this component to get your start quickly.
      </HeadingSubtitle>
    </Heading>
  )
}

const DefinitionSection = ({ children, ref }: ComponentProps<'div'>) => {
  return (
    <div className="tw:py-10">
      <Heading ref={ref} size="h2" id='definition' className="not-prose">
        <HeadingTitle>
          Definition
        </HeadingTitle>
        <HeadingSubtitle>
          A high-level spec of a blueprint to correctly define what is meant to be such component.
        </HeadingSubtitle>
      </Heading>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Cta shapes={["badge"]} variant="outline" size="lg" className="tw:data-[state=open]:hidden">
            Click to see more
          </Cta>
        </CollapsibleTrigger>
        <CollapsibleContent className="tw:prose tw:prose-gray dark:tw:prose-invert tw:max-w-none">
          {children}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

const QASection = () => {
  return (
    <Heading size="h2" id='qa' className="not-prose">Q&A</Heading>
  )
}

export {
  QuickDemoSection, QuickStartSection, QASection, DefinitionSection, QA
}