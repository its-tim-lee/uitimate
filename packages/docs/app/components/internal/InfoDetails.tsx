import { type ComponentProps, type ReactNode } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible"
import { Icon } from "#/components/ui/Icon/Icon"

type InfoDetailsProps = {
  title: ReactNode;
  children: ReactNode;
  content?: string | ReactNode;
}
export default ({ title, children, content }: InfoDetailsProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <span className='tw:cursor-pointer tw:flex tw:items-center tw:gap-2 tw:p-4 tw:pl-0 tw:text-muted-foreground'>
          <Icon icon='lucide:chevron-right' className='tw:in-data-[state=open]:rotate-90' />
          <span>{title}</span>
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className='tw:p-4 tw:pt-0 tw:text-muted-foreground'>
        {content ? content : children}
      </CollapsibleContent>
    </Collapsible>
  )
}