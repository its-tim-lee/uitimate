import { Checkbox, type CheckedState } from "@/components/ui/Checkbox/Checkbox"
import { useState } from "react"

export default () => {
  const [checked, setChecked] = useState<CheckedState>(true)
  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
    />
  )
}