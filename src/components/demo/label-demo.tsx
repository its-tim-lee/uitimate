import { Label } from "@/components/ui/Label/Label"
import Button from "~/src/pages/docs/components/button.astro"
import IconV2 from "../ui/Icon/IconV2"
import { Input } from "../ui/Input/Input"
import { SelectTrigger, Select, SelectContent, SelectGroup, SelectItem, SelectValue } from "../ui/Select/Select"

// export default () => {
//   return (
//     <div className="tw:flex tw:flex-col tw:gap-2">
//       <div className="tw:flex tw:justify-between tw:items-center tw:gap-2">
//         <Label htmlFor="find-repo" className='tw:font-medium'>
//           Top repositories
//         </Label>
//         <Button variant="primary">
//           <IconV2 icon="lucide:book-marked" className='tw:bg-green-500' />
//           New
//         </Button>
//       </div>
//       <Input id="find-repo" placeholder="Find a repository..." />
//     </div>
//   )
// }



export default () => {
  return (
    <div className="tw:flex tw:flex-col tw:gap-2">
      <Label htmlFor="ttl-value" className=''>
        Token time to live
        <IconV2 icon="mingcute:question-line" className='tw:bg-green-500' />
      </Label>
      <div>
        <Input id="ttl-repo" type="number" value={1} />
        <Select>
          <SelectTrigger >
            <SelectValue placeholder="days" />
          </SelectTrigger>
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

