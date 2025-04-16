import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible.tsx";
import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { List, ListItem } from "#/components/ui/List/List.tsx";
import { useState } from "react";
const items = [
  { content: 'Sponsers', dropdown: false },
  { content: 'Building Your Application', dropdown: true },
  { content: 'API Reference', dropdown: true }
];

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <List className='tw:w-[400px]'>
      {items.map((e, i) => (
        <ListItem key={i} className='tw:w-full tw:p-2'>
          <span className="tw:flex tw:items-center tw:justify-between tw:p-2 tw:w-full">
            {e.content}{" "}
            {e.dropdown && (
              <Icon
                onClick={() => setOpen(!open)}
                icon={open ? 'lucide:chevron-up' : 'lucide:chevron-down'}
                className="tw:cursor-pointer tw:inline"
              />
            )}
          </span>
          {e.dropdown &&
            <Collapsible open={open} onOpenChange={setOpen}>
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
          }
        </ListItem>
      ))}
    </List>
  )
}