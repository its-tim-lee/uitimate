import {
  Heading,
  HeadingSubtitle,
  HeadingTitle,
} from "#/components/ui/Heading/Heading.tsx";
import { Link as ScrollLink } from "react-scroll";

const UsageSection = () => {
  return (
    <Heading size="h2" id="usage">
      <HeadingTitle>Usage</HeadingTitle>
      <HeadingSubtitle>How you can play this component.</HeadingSubtitle>
    </Heading>
  )
}

const DemoApiSection = () => {
  return (
    <Heading size="h2" id='demo-api'>
      <HeadingTitle>DEMO / API</HeadingTitle>
      <HeadingSubtitle>Trying to show all the common API/Component usages below, but this can be insufficient/impossible in some cases, and we'd then use
        {' '}
        <ScrollLink
          to="demo-scenarios"
          spy={true}
          smooth={true}
          offset={-20}
          duration={0}
          className="tw:link tw:cursor-pointer"
        >DEMO / Scenario</ScrollLink> to express more.</HeadingSubtitle>
    </Heading>
  )
}

const DemoScenariosSection = () => {
  return (
    <Heading size="h2" id="demo-scenarios">
      <HeadingTitle>DEMO / Scenario</HeadingTitle>
      <HeadingSubtitle>This demostrates the commmon API/Component usages as well as some common real-world use cases.</HeadingSubtitle>
    </Heading>
  )
}


const DemoRecipeSection = () => {
  return (
    <Heading size="h2" id="demo-recipe">
      <HeadingTitle>DEMO / Recipe</HeadingTitle>
      <HeadingSubtitle>These are the ones that many other libraries might treat them as part of their core components, but we show how those can be implemented without futher encapsulation.</HeadingSubtitle>
    </Heading>
  )
}

const DependenciesSection = () => {
  return (
    <Heading size="h2" id="dependencies">
      <HeadingTitle>Dependencies</HeadingTitle>
      <HeadingSubtitle>Below lists out the 3rd-party libaries that this component depends on.</HeadingSubtitle>
    </Heading>
  )
}

export {
  UsageSection, DemoApiSection, DemoScenariosSection, DemoRecipeSection, DependenciesSection
}