import { Checkbox, CheckboxSubtitle, CheckboxTitle, type CheckedState } from "@/components/ui/Checkbox/Checkbox"
import { useState } from "react"
import { Heading, HeadingSubtitle, HeadingTitle } from "../ui/Heading/Heading"
import { Label } from "../ui/Label/Label"

export default () => {
  const [checked, setChecked] = useState<CheckedState>(true)
  return (
    <>
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
      >
        <CheckboxTitle>Label on the right</CheckboxTitle>
        <CheckboxSubtitle>This is a description</CheckboxSubtitle>
      </Checkbox>
      <br />
      <br />

      <div className="tw:flex tw:items-start tw:gap-2">
        <Checkbox
          id='checkbox-label-right'
          checked={checked}
          onCheckedChange={setChecked}
        >
        </Checkbox>
        <Heading size="h6">
          <HeadingTitle asChild>
            <Label htmlFor='checkbox-label-right'>Label on the right</Label>
          </HeadingTitle>
          <HeadingSubtitle>
            This is a description
          </HeadingSubtitle>
        </Heading>
      </div>


      <br />
      <br />
      <Checkbox
        checked={checked}
        onCheckedChange={setChecked}
        label="left"
      >
        <CheckboxTitle>Label on the left</CheckboxTitle>
        <CheckboxSubtitle>This is a description</CheckboxSubtitle>
      </Checkbox>
    </>
  )
}