import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "@/components/ui/Heading/Heading";
import { Flat } from "@/components/preset/flat/index.tsx";

export default () => (
  <Flat className='tw:w-xl'>
    <Heading size="h4">
      <HeadingTitle>Shrimp and Chorizo Paella</HeadingTitle>
      <HeadingSubtitle>September 14, 2016</HeadingSubtitle>
    </Heading>
    <p className="tw:py-3">
      This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
    </p>
  </Flat>
)