import type { ComponentProps } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible";
import { Cta } from "#/components/ui/Cta/Cta";
import QA from "#/components/internal/QA.tsx";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#/components/ui/Tooltip/Tooltip";
import { Icon } from "#/components/ui/Icon/Icon";

const QuickDemoSection = () => <h2 id='quick-demo'>Quick Demo</h2>

const QuickStartSection = () => {
  return (
    <span className="tw:flex tw:items-center tw:gap-2">
      <h2 id='quick-start'>Quick Start</h2>

      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild><Icon icon="mingcute:question-line" /></TooltipTrigger>

        <TooltipContent className="tw:w-[400px] tw:p-4">
          <p className="tw:text-justify">Walking you through the common usage of this component to get your start quickly.</p>
        </TooltipContent>
      </Tooltip>
    </span>
  )
}

const DefinitionSection = ({ children, ref }: ComponentProps<'div'>) => {
  return (
    <div>
      <span className="tw:flex tw:items-center tw:gap-2">
        <h2 ref={ref} id='definition'>Definition</h2>

        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild><Icon icon="mingcute:question-line" /></TooltipTrigger>

          <TooltipContent className="tw:w-[400px] tw:p-4">
            <p className="tw:text-justify">A high-level spec (or a blueprint) to correctly define what is meant to be such component.</p>
          </TooltipContent>
        </Tooltip>
      </span>
      <Collapsible>
        <CollapsibleTrigger asChild>
          <Cta shapes={["badge"]} variant="outline" size="lg" className="tw:data-[state=open]:hidden">
            Click to see more
          </Cta>
        </CollapsibleTrigger>
        <CollapsibleContent className="tw:prose tw:prose-gray dark:tw:prose-invert tw:max-w-none">
          {children}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

const QASection = () => <h2 id='qa'>Q&A</h2>

export {
  QuickDemoSection, QuickStartSection, QASection, DefinitionSection, QA
}