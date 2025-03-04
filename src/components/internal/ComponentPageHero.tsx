import { Badge } from "@/components/ui/Badge/Badge.tsx"
import { Heading, HeadingSubtitle, HeadingTitle } from "../ui/Heading/Heading"
import IconV2 from "../ui/Icon/IconV2"
import { default as githubSVG } from '@iconify/icons-lucide/github';
import { default as bugSVG } from '@iconify/icons-lucide/bug';
import { default as figmaSVG } from '@iconify/icons-lucide/figma';
import { default as editSVG } from '@iconify/icons-lucide/edit-3';
import { default as codeSVG } from '@iconify/icons-lucide/code';

const { default: { body: github } } = githubSVG as any;
const { default: { body: code } } = codeSVG as any;
const { default: { body: bug } } = bugSVG as any;
const { default: { body: figma } } = figmaSVG as any;
const { default: { body: edit } } = editSVG as any;

export default ({ title, subtitle, apiLink }: { title: string, subtitle: string, apiLink?: string }) => {
  return <div className='tw:mb-6'>
    <Heading size="h1" className="tw:mb-4">
      <HeadingTitle className="tw:mb-2">{title}</HeadingTitle>
      <HeadingSubtitle>{subtitle}</HeadingSubtitle>
    </Heading>
    <div className="tw:flex tw:gap-2 tw:flex-wrap">
      <Badge variant="outline" className="tw:cursor-pointer">
        <IconV2 ssr icon={github} /> View on Github
      </Badge>
      <Badge variant="outline" className="tw:cursor-pointer">
        <IconV2 ssr icon={bug} /> Report a Bug
      </Badge>
      <Badge variant="outline" className="tw:cursor-pointer">
        <IconV2 ssr icon={figma} /> Figma Design
      </Badge>
      <Badge variant="outline" className="tw:cursor-pointer">
        <IconV2 ssr icon={edit} /> Edit this page
      </Badge>
      {/* FIXME: this seems have a smaller size comparing to others */}
      {apiLink && (
        <Badge variant="primary" className="tw:cursor-pointer" asChild>
          <a href={apiLink} target="_blank">
            <IconV2 ssr icon={code} /> API Reference
          </a>
        </Badge>
      )}
    </div>
  </div>
}