import { Separator } from "#/components/ui/Separator/Separator"
import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading"

export default () => (
  <div>
    <Heading
      size="h3"
    >
      <HeadingTitle>Prompt engineering</HeadingTitle>
      <HeadingSubtitle>
        Enhance results with prompt engineering strategies.

      </HeadingSubtitle>
    </Heading>
    <Separator className="tw:my-4" />
    <p className='tw:text-muted-foreground'>
      This guide shares strategies and tactics for getting better results from large language models (sometimes referred to as GPT models) like GPT-4o. The methods described here can sometimes be deployed in combination for greater effect. We encourage experimentation to find the methods that work best for you.


    </p>
  </div>
)