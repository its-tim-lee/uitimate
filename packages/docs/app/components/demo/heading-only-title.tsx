import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";

export default () => (
  <div className="tw:flex tw:flex-col tw:gap-2 not-prose">
    <Heading size="h1">H1 Heading Title</Heading>
    <p>Some paragraph, but not subtitle</p>
    <br />
    <Heading size="h2">H2 Heading Title</Heading>
    <p>Some paragraph, but not subtitle</p>
    <br />
    <Heading size="h3">H3 Heading Title</Heading>
    <p>Some paragraph, but not subtitle</p>
    <br />
    <Heading size="h4">H4 Heading Title</Heading>
    <p>Some paragraph, but not subtitle</p>
    <br />
    <Heading size="h5">H5 Heading Title</Heading>
    <p>Some paragraph, but not subtitle</p>
    <br />
    <Heading size="h6">H6 Heading Title</Heading>
    <p>Some paragraph, but not subtitle</p>
  </div>
)