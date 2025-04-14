import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible"
import { Icon } from "#/components/ui/Icon/Icon"

export default () => {
  return (
    <Collapsible className='tw:group tw:w-[260px]'>
      <span className="tw:flex tw:items-center tw:justify-between tw:p-2">
        <CollapsibleTrigger asChild>
          <span>
            <Icon icon="lucide:chevron-down" className="tw:inline tw:group-data-[state=open]:hidden" />
            <Icon icon="lucide:chevron-up" className="tw:inline tw:group-data-[state=closed]:hidden" />
          </span>
        </CollapsibleTrigger>
        &nbsp;
        Thought for 3 seconds
      </span>
      <CollapsibleContent className="tw:p-2">
        This details how the AI thought about your question: .....
      </CollapsibleContent>
    </Collapsible>
  )
}