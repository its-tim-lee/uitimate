import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "@/components/ui/Heading/Heading";

export default () => (
  <div className="tw:flex tw:flex-col tw:gap-2">
    <Heading size="h1" title="H1 Heading Title" subtitle="This is a short heading subtitle" />
    <br />
    <Heading size="h1" title="Only title" />
  </div>
)