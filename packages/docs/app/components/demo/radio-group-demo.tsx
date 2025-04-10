import { Label } from "#/components/ui/Label/Label.tsx"
import {
  RadioGroup,
  RadioGroupItem
} from "#/components/ui/RadioGroup/RadioGroup.tsx"

export default () => {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="tw:flex tw:items-center tw:space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="tw:flex tw:items-center tw:space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="tw:flex tw:items-center tw:space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}