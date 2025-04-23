import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#/components/ui/Tooltip/Tooltip";
import { Icon } from "#/components/ui/Icon/Icon";

const UsageSection = () => {
  return (
    <span className="tw:flex tw:items-center tw:gap-2">
      <h2 id="usage">Usage</h2>

      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild><Icon icon="mingcute:question-line" /></TooltipTrigger>

        <TooltipContent className="tw:w-[400px] tw:p-4">
          <p className="tw:text-justify">How you can play this component.</p>
        </TooltipContent>
      </Tooltip>
    </span>
  )
}

const DemoScenariosSection = () => {
  return (
    <span className="tw:flex tw:items-center tw:gap-2">
      <h2 id="demo-scenarios">DEMO / Scenario</h2>

      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild><Icon icon="mingcute:question-line" /></TooltipTrigger>

        <TooltipContent className="tw:w-[400px] tw:p-4">
          <p className="tw:text-justify">This demostrates the commmon API/Component usages as well as some common real-world use cases.</p>
        </TooltipContent>
      </Tooltip>
    </span>
  )
}


const DemoRecipeSection = () => {
  return (
    <span className="tw:flex tw:items-center tw:gap-2">
      <h2 id="demo-recipe">DEMO / Recipe</h2>

      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild><Icon icon="mingcute:question-line" /></TooltipTrigger>

        <TooltipContent className="tw:w-[400px] tw:p-4">
          <p className="tw:text-justify">These are the ones that many other libraries might treat them as part of their core components, but we show how those can be implemented without futher encapsulation.</p>
        </TooltipContent>
      </Tooltip>
    </span>
  )
}

const DependenciesSection = () => {
  return (
    <span className="tw:flex tw:items-center tw:gap-2">
      <h2 id="dependencies">Dependencies</h2>

      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild><Icon icon="mingcute:question-line" /></TooltipTrigger>

        <TooltipContent className="tw:w-[400px] tw:p-4">
          <p className="tw:text-justify">Below lists out the 3rd-party libaries that this component depends on.</p>
        </TooltipContent>
      </Tooltip>
    </span>
  )
}

export {
  UsageSection, DemoScenariosSection, DemoRecipeSection, DependenciesSection
}