import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";
import { Icon } from "#/components/ui/Icon/Icon";

export default () => (
  <div className="tw:flex tw:items-start tw:gap-2 tw:border-primary not-prose tw:w-xl tw:bg-background tw:shadow-sm tw:border tw:border-solid tw:rounded-[8px] tw:p-3">
    <Icon icon='lucide:info' className='tw:mt-1' />
    <Heading size="h4" className='tw:mb-0'>
      <HeadingTitle>Updated!</HeadingTitle>
      <HeadingSubtitle>The application has been updated from v1.2 to v1.3.</HeadingSubtitle>
    </Heading>
  </div>
)