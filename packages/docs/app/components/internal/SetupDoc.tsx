import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#/components/ui/Tooltip/Tooltip";
import { Icon } from "#/components/ui/Icon/Icon";
import OneClickSetup from './OneClickSetup';
import ComponentDependencyNotice from "./ComponentDependencyNotice";
import { PathPreferencesProvider } from './PathPreferencesContext';
import { useHoverTrack } from '#/helpers/hooks/useHoverTrack';

const DependenciesListingSection = ({ component }: { component: string }) => {
  const tooltipHandlers = useHoverTrack('check_dependencies_tooltip');
  return (
    <div>
      <span className="tw:flex tw:items-center tw:gap-2">
        <h2 id='dependencies'>Dependencies</h2>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Icon icon="mingcute:question-line" {...tooltipHandlers} />
          </TooltipTrigger>
          <TooltipContent className="tw:w-[400px] tw:p-4 tw:text-lg">
            <p className="tw:text-justify">The direct dependencies that this component relies on. Note that you don't need to worry about this in most of time if you just follow the setup instruction to use the component.</p>
          </TooltipContent>
        </Tooltip>
      </span>
      <ComponentDependencyNotice component={component} />
    </div>
  )
}

const OneClickSetupSection = ({
  component,
  additionalFiles = [],
  children
}: {
  component: string;
  additionalFiles?: string[];
  children?: React.ReactNode;
}) => {
  const tooltipHandlers = useHoverTrack('check_steps_tooltip');
  return (
    <div>
      <span className="tw:flex tw:items-center tw:gap-2">
        <h2 id='dependencies'>Steps</h2>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Icon icon="mingcute:question-line" {...tooltipHandlers} />
          </TooltipTrigger>
          <TooltipContent className="tw:w-[400px] tw:p-4 tw:text-lg">
            <p className="tw:text-justify">Follow the instruction below to be able to use this component in your project.</p>
          </TooltipContent>
        </Tooltip>
      </span>
      <PathPreferencesProvider>
        <OneClickSetup component={component} additionalFiles={additionalFiles}>{children}</OneClickSetup>
      </PathPreferencesProvider>
    </div>
  );
}

export {
  OneClickSetupSection,
  DependenciesListingSection
}