import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading";
import { Cta } from "#/components/ui/Cta/Cta";

export default () => (
  <div className="tw:w-xl tw:[&_p]:pb-4">
    <Heading size="h1">
      <HeadingTitle>Vision</HeadingTitle>
      <HeadingSubtitle>Learn how to use vision capabilities to understand images.</HeadingSubtitle>
    </Heading>
    <p className="tw:text-justify">
      Several OpenAI models have vision capabilities, meaning the models can take images as input and answer questions about them. Historically, language models were limited to a single input modality: text.
    </p>
    <p className="tw:text-justify">
      Currently, models that can take images as input include <Cta muted variant='secondary' shapes={['badge']}>o1</Cta>, <Cta muted variant='secondary' shapes={['badge']}>gpt-4.5-preview</Cta>, <Cta muted variant='secondary' shapes={['badge']}>gpt-4o</Cta>, <Cta muted variant='secondary' shapes={['badge']}>gpt-4o-mini</Cta>, and <Cta muted variant='secondary' shapes={['badge']}>gpt-4-turbo</Cta>.
    </p>
    <br />
    <Heading size="h3">Quickstart</Heading>
    <p className="tw:text-justify">
      Images are made available to the model in two main ways: by passing a link to the image or by passing the Base64 encoded image directly in the request. Images can be passed in the user messages.
    </p>
  </div>
)