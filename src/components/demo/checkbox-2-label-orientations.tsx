import { Checkbox, CheckboxSubtitle, CheckboxTitle, type CheckedState } from "@/components/ui/Checkbox/Checkbox"
import { useState } from "react"

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