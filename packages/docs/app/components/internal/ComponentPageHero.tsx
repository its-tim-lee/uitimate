import { Badge } from "@/components/ui/Badge/Badge.tsx"
import { Heading, HeadingSubtitle, HeadingTitle } from "../ui/Heading/Heading"
import { Icon } from "../ui/Icon/Icon"


export default ({ title, subtitle, apiLink }: { title: string, subtitle: string, apiLink?: string }) => {
  return <div className='tw:mb-6'>
    <Heading size="h1" className="tw:mb-4">
      <HeadingTitle className="tw:mb-2">{title}</HeadingTitle>
      <HeadingSubtitle>{subtitle}</HeadingSubtitle>
    </Heading>
    <div className="tw:flex tw:gap-2 tw:flex-wrap">
      <Badge variant="outline" className="tw:cursor-pointer">
        <Icon icon='lucide:github' /> View on Github
      </Badge>
      <Badge variant="outline" className="tw:cursor-pointer">
        <Icon icon='lucide:bug' /> Report a Bug
      </Badge>
      <Badge variant="outline" className="tw:cursor-pointer">
        <Icon icon='lucide:figma' /> Figma Design
      </Badge>
      <Badge variant="outline" className="tw:cursor-pointer">
        <Icon icon='lucide:edit-3' /> Edit this page
      </Badge>
      {/* FIXME: this seems have a smaller size comparing to others */}
      {apiLink && (
        <Badge variant="primary" className="tw:cursor-pointer" asChild>
          <a href={apiLink} target="_blank">
            <Icon icon='lucide:code' /> API Reference
          </a>
        </Badge>
      )}
    </div>
  </div>
}