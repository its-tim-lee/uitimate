import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading.tsx";

const QuickDemoSection = () => {
  return (
    <Heading size="h2" id='quick-demo'>Quick Demo</Heading>
  )
}

const QuickStartSection = () => {
  return (
    <Heading size="h2" id='quick-start'>
      <HeadingTitle>
        Quick Start
      </HeadingTitle>
      <HeadingSubtitle>
        Walking you through the common usage of this component to get your start quickly.
      </HeadingSubtitle>
    </Heading>
  )
}

const QASection = () => {
  return (
    <Heading size="h2" id='qa'>Q&A</Heading>
  )
}

export {
  QuickDemoSection, QuickStartSection, QASection
}