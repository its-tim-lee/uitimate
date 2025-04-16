import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible.tsx";
import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { List, ListItem } from "#/components/ui/List/List.tsx";

const items = [
  { content: 'Sponsers', dropdown: false },
  { content: 'Building Your Application', dropdown: true },
  { content: 'API Reference', dropdown: true }
];

export default () => {
  return (
    <List className='tw:w-[400px]'>
      {items.map((e, i) => (
        <ListItem key={i} className=' tw:p-2'>
          <Collapsible className='tw:w-full tw:group'>
            <span className="tw:flex tw:items-center tw:justify-between tw:p-2">
              {e.content}{" "}
              {e.dropdown && (
                <CollapsibleTrigger asChild className='tw:cursor-pointer'>
                  <span>
                    <Icon icon="lucide:chevron-down" className="tw:inline tw:group-data-[state=open]:hidden" />
                    <Icon icon="lucide:chevron-up" className="tw:inline tw:group-data-[state=closed]:hidden" />
                  </span>
                </CollapsibleTrigger>
              )}
            </span>
            <CollapsibleContent>
              <List className='tw:mb-4'>
                <ListItem className='tw:hover:bg-muted tw:text-muted-foreground tw:hover:rounded-md tw:p-2'>
                  Routing
                </ListItem>
                <ListItem className='tw:hover:bg-muted tw:text-muted-foreground tw:hover:rounded-md tw:p-2'>
                  Data Fetching
                </ListItem>
              </List>
            </CollapsibleContent>
          </Collapsible>
        </ListItem>
      ))}
    </List>
  )
}