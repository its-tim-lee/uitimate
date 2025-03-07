import { Checkbox, CheckboxSubtitle, CheckboxTitle, type CheckedState } from "@/components/ui/Checkbox/Checkbox"
import IconV2 from "../ui/Icon/IconV2"
import { TooltipContent, TooltipTrigger, Tooltip, } from "../ui/Tooltip/Tooltip"
import { Flat } from "../preset/flat"

export default () => {
  return (
    <Flat className='tw:w-[500px] tw:flex tw:flex-col tw:gap-4'>
      <p>After permanent deletion of the app:</p>
      <Checkbox>
        <CheckboxTitle className='tw:leading-6 tw:-mt-1'>
          If the app is linked to Google Analytics, Google Play, AdMob, or BigQuery, this link will be severed.
        </CheckboxTitle>
      </Checkbox>
      <Checkbox>
        <CheckboxTitle className='tw:flex tw:items-center tw:gap-2'>
          The app's App ID will be permanently deleted.
          <Tooltip>
            <TooltipTrigger asChild>
              <IconV2 icon='lucide:circle-help'></IconV2>
            </TooltipTrigger>
            <TooltipContent className='tw:w-[320px] tw:p-4' align='end'>
              <p className='tw:leading-5'>This App ID is a unique Google-assigned identifier for each app. Several Google products use this ID, including Google Ads where key events are keyed off this ID.</p>
            </TooltipContent>
          </Tooltip>
        </CheckboxTitle>
      </Checkbox>
    </Flat>
  )
}