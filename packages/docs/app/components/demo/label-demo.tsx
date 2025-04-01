import { Label } from "#/components/ui/Label/Label"
import { Icon } from "../ui/Icon/Icon"
import { Input } from "../ui/Input/Input"
import { SelectTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectValue } from "../ui/Select/Select"

export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-2">
      <Label htmlFor="ttl" className='tw:flex tw:items-center tw:gap-2'>
        Token time to live
        <Icon icon="mingcute:question-line" />
      </Label>
      <div className="tw:flex tw:flex-col tw:gap-2">
        <Input id="ttl" value={1} />
        <Select>
          <SelectTrigger ><SelectValue placeholder="days" /></SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="days">days</SelectItem>
              <SelectItem value="weeks">weeks</SelectItem>
              <SelectItem value="months">months</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

      </div>
    </div>
  )
}

