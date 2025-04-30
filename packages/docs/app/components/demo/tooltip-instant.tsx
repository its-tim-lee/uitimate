import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#/components/ui/Tooltip/Tooltip";
import { Icon } from "#/components/ui/Icon/Icon";

export default () => (
  <span className="tw:flex tw:items-center tw:gap-2">

    Code Interpreter & Data Analysis

    <Tooltip delayDuration={0}>

      <TooltipTrigger asChild><Icon icon="mingcute:question-line" /></TooltipTrigger>

      <TooltipContent className="tw:w-[400px] tw:p-4">
        <p className="tw:text-justify">Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you've uploaded, do math, and more.</p>
      </TooltipContent>

    </Tooltip>
  </span>
)