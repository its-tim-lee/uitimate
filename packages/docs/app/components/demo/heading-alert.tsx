import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";
import { Icon } from "../ui/Icon/Icon";
import { Flat } from "../preset/flat";

export default () => (
  <Flat size="sm" className="tw:flex tw:items-start tw:gap-2 tw:border-primary">
    <Icon icon='lucide:info' className='tw:mt-1' />
    <Heading size="h4" className='tw:mb-0'>
      <HeadingTitle>Updated!</HeadingTitle>
      <HeadingSubtitle>The application has been updated from v1.2 to v1.3.</HeadingSubtitle>
    </Heading>
  </Flat >
)