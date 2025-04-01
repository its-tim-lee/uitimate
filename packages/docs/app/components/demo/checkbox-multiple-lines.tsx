import { Checkbox, type CheckedState } from "#/components/ui/Checkbox/Checkbox.tsx"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import { TooltipContent, TooltipTrigger, Tooltip, } from "#/components/ui/Tooltip/Tooltip.tsx"
import { Flat } from "#/components/preset/flat/index.tsx"
import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading.tsx"
import { Label } from "#/components/ui/Label/Label.tsx"
import { useState } from "react"

export default () => {
  const [checked, setChecked] = useState<CheckedState>(true)
  return (
    <Flat className='tw:w-[500px] tw:flex tw:flex-col tw:gap-4'>

      <p>After permanent deletion of the app:</p>

      <div className="tw:flex tw:items-start tw:gap-2">
        <Checkbox id='first' checked={checked} onCheckedChange={setChecked} />
        <Heading size="h6">
          <HeadingTitle asChild>
            <Label className='' htmlFor='first'>If the app is linked to Google Analytics, Google Play, AdMob, or BigQuery, this link will be severed.</Label>
          </HeadingTitle>
        </Heading>
      </div>

      <div className="tw:flex tw:items-start tw:gap-2">
        <Checkbox id='second' checked={checked} onCheckedChange={setChecked} />
        <Heading size="h6">
          <HeadingTitle asChild>
            <Label className='tw:flex tw:items-center tw:gap-2' htmlFor='second'>
              The app's App ID will be permanently deleted.
              <Tooltip>
                <TooltipTrigger asChild>
                  <Icon icon='lucide:circle-help'></Icon>
                </TooltipTrigger>
                <TooltipContent className='tw:w-[320px] tw:p-4' align='end'>
                  <p className='tw:leading-5'>This App ID is a unique Google-assigned identifier for each app. Several Google products use this ID, including Google Ads where key events are keyed off this ID.</p>
                </TooltipContent>
              </Tooltip>
            </Label>
          </HeadingTitle>
        </Heading>
      </div>

    </Flat>
  )
}