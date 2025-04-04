import { Icon } from "#/components/ui/Icon/Icon";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "#/components/ui/Tooltip/Tooltip";

export default function DevelopmentToolsDemo() {
  return (
    <div className="tw:bg-gray-900 tw:text-gray-300 tw:p-4 tw:rounded-lg tw:w-[300px]">
      <h3 className="tw:text-gray-400 tw:mb-4 tw:text-sm">Related development tools</h3>

      <div className="tw:flex tw:flex-col tw:gap-3">
        <div className="tw:flex tw:items-center tw:gap-2">
          <span className="tw:text-blue-400 tw:text-base">IDX</span>
          <Icon icon="lucide:external-link" className="tw:text-blue-400 tw:size-4" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon icon="mingcute:question-line" className="tw:text-gray-500 tw:size-4 tw:ml-1" />
            </TooltipTrigger>
            <TooltipContent>
              Cloud-based workspace for writing your app
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="tw:flex tw:items-center tw:gap-2">
          <span className="tw:text-blue-400 tw:text-sm">Checks</span>
          <Icon icon="lucide:external-link" className="tw:text-blue-400 tw:size-4" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Icon icon="mingcute:question-line" className="tw:text-gray-500 tw:size-4 tw:ml-1" />
            </TooltipTrigger>
            <TooltipContent>
              Simplify app compliance with AI
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}