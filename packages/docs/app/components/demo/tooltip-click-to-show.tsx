import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#/components/ui/Tooltip/Tooltip";
import { Icon } from "../ui/Icon/Icon";
import { useState } from "react";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="tw:flex tw:items-center tw:gap-2">

      Code Interpreter & Data Analysis
      <Icon icon="mingcute:question-line" onClick={() => setIsOpen(true)} />

      <Tooltip open={isOpen} onOpenChange={setIsOpen}>

        <TooltipTrigger asChild><span /></TooltipTrigger>

        <TooltipContent className="tw:w-[400px] tw:p-4">
          <p className="tw:text-justify">Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you've uploaded, do math, and more.</p>
        </TooltipContent>

      </Tooltip>
    </span>
  )
}