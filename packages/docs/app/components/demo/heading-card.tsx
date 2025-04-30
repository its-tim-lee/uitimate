import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";

export default () => (
  <div className='not-prose tw:w-xl tw:bg-background tw:shadow-sm tw:border tw:border-solid tw:border-zinc-200 tw:rounded-[8px] tw:p-6'>
    <Heading size="h4">
      <HeadingTitle>Shrimp and Chorizo Paella</HeadingTitle>
      <HeadingSubtitle>September 14, 2016</HeadingSubtitle>
    </Heading>
    <p className="tw:py-3">
      This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
    </p>
  </div>
)