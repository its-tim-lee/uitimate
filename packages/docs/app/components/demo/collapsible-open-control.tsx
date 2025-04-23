import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible"
import { Icon } from "#/components/ui/Icon/Icon"
import { useState } from "react"

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <span className="tw:flex tw:items-center tw:justify-between tw:p-2">
        <Icon icon={open ? "lucide:chevron-up" : "lucide:chevron-down"} onClick={() => setOpen(!open)} />
        &nbsp;
        Thought for 3 seconds
      </span>
      <Collapsible open={open} onOpenChange={setOpen} className='tw:w-[260px]'>
        <CollapsibleContent className="tw:p-2">
          This details how the AI thought about your question: .....
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}