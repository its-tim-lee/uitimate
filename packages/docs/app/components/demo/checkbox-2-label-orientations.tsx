import { Checkbox, type CheckedState } from "#/components/ui/Checkbox/Checkbox.tsx"
import { useState } from "react"
import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading.tsx"
import { Label } from "#/components/ui/Label/Label.tsx"
export default () => {
  const [checked, setChecked] = useState<CheckedState>(true)
  return (
    <div className="tw:flex tw:gap-4">


      <div className="tw:flex tw:items-start tw:gap-2">
        <Checkbox id='first' checked={checked} onCheckedChange={setChecked} />
        <Heading size="h6">
          <HeadingTitle asChild>
            <Label className='' htmlFor='first'>Label on the right</Label>
          </HeadingTitle>
          <HeadingSubtitle>This is a description</HeadingSubtitle>
        </Heading>
      </div>

      <br />
      <br />

      <div className="tw:flex tw:items-start tw:gap-2">
        <Heading size="h6">
          <HeadingTitle asChild>
            <Label className='' htmlFor='first'>Label on the left</Label>
          </HeadingTitle>
          <HeadingSubtitle>This is a description</HeadingSubtitle>
        </Heading>
        <Checkbox id='first' checked={checked} onCheckedChange={setChecked} />
      </div>
    </div>
  )
}