import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "@/components/ui/Heading/Heading";
import { Badge } from "@/components/ui/Badge/Badge";

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
      Currently, models that can take images as input include <Badge variant='secondary'>o1</Badge>, <Badge variant='secondary'>gpt-4.5-preview</Badge>, <Badge variant='secondary'>gpt-4o</Badge>, <Badge variant='secondary'>gpt-4o-mini</Badge>, and <Badge variant='secondary'>gpt-4-turbo</Badge>.
    </p>
    <br />
    <Heading size="h3">Quickstart</Heading>
    <p className="tw:text-justify">
      Images are made available to the model in two main ways: by passing a link to the image or by passing the Base64 encoded image directly in the request. Images can be passed in the user messages.
    </p>
  </div>
)