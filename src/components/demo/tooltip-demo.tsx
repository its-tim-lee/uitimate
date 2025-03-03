import { Toggle } from "@/components/ui/Toggle/Toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip/Tooltip";
import IconV2 from "../ui/Icon/IconV2";

export default () => (
  <Tooltip>
    <TooltipTrigger asChild>
      <IconV2 icon="mingcute:question-line" className="tw:size-8" />
    </TooltipTrigger>
    <TooltipContent>
      <p>Some tooltip wrapped description</p>
    </TooltipContent>
  </Tooltip>
)