import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible"
import { Cta } from "#/components/ui/Cta/Cta"
import { Icon } from "#/components/ui/Icon/Icon"
import { List, ListItem } from "#/components/ui/List/List"
import { Tooltip, TooltipContent, TooltipTrigger } from "#/components/ui/Tooltip/Tooltip"

export default () => {
  return (
    <List className='tw:text-sm tw:w-[300px] '>
      <ListItem className='tw:group tw:hover:bg-muted tw:rounded-md tw:p-2 tw:text-xs tw:justify-between'>
        Favorites
        <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent tw:group-hover:block tw:hidden'>
          <Icon icon='tabler:dots'></Icon>
        </Cta>
      </ListItem>

      <ListItem className='tw:group tw:rounded-md'>
        <Collapsible className='tw:group/collapsible tw:w-full'>
          <span className='tw:flex tw:justify-between tw:items-center tw:hover:bg-muted tw:p-2'>
            <span className='tw:flex tw:gap-1 tw:items-center'>
              <CollapsibleTrigger asChild>
                <Cta shapes={['icon', 'badge']} size='lg' variant="ghost" className='tw:bg-transparent'>
                  <Icon icon='carbon:document' className='tw:group-hover:hidden'></Icon>
                  <Icon icon='lucide:chevron-right' data-trigger className='tw:group-data-[state=open]/collapsible:rotate-90 tw:hidden tw:group-hover:block'></Icon>
                </Cta>
              </CollapsibleTrigger>
              <span className='tw:truncate tw:text-ellipsis'>Growth Hacker Guidelines</span>
            </span>
            <span className='tw:group-hover:flex tw:gap-1 tw:hidden'>
              <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                  <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent '>
                    <Icon icon='tabler:dots'></Icon>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>
                  Remove, rename, and more...
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                  <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent'>
                    <Icon icon='lucide:plus'></Icon>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>
                  Add a page inside
                </TooltipContent>
              </Tooltip>
            </span>
          </span>
          <CollapsibleContent>
            <List>
              <ListItem className='tw:p-2 tw:text-muted-foreground/50 tw:cursor-pointer'>
                No pages inside
              </ListItem>
            </List>
          </CollapsibleContent>
        </Collapsible>
      </ListItem>


      <ListItem className='tw:group tw:hover:bg-muted tw:rounded-md tw:p-2 tw:text-xs tw:justify-between'>
        Private
        <span className='tw:flex tw:gap-1'>
          <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent tw:group-hover:block tw:hidden'>
            <Icon icon='tabler:dots'></Icon>
          </Cta>
          <Tooltip delayDuration={500}>
            <TooltipTrigger asChild>
              <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent tw:group-hover:block tw:hidden'>
                <Icon icon='lucide:plus'></Icon>
              </Cta>
            </TooltipTrigger>
            <TooltipContent>
              Add a page
            </TooltipContent>
          </Tooltip>
        </span>
      </ListItem>

      <ListItem className=' tw:rounded-md '>
        <Collapsible className='tw:group/collapsible tw:w-full'>
          <span className='tw:group tw:flex tw:justify-between tw:items-center tw:hover:bg-muted tw:p-2'>
            <span className='tw:flex tw:gap-1 tw:items-center'>
              <CollapsibleTrigger asChild>
                <Cta shapes={['icon', 'badge']} size='lg' variant="ghost" className='tw:bg-transparent'>
                  <Icon icon='carbon:document' className='tw:group-hover:hidden'></Icon>
                  <Icon icon='lucide:chevron-right' data-trigger className='tw:group-data-[state=open]/collapsible:rotate-90 tw:hidden tw:group-hover:block'></Icon>
                </Cta>
              </CollapsibleTrigger>
              <span className='tw:truncate tw:text-ellipsis'>Figma</span>
            </span>
            <span className='tw:group-hover:flex tw:gap-1 tw:hidden'>
              <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                  <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent '>
                    <Icon icon='tabler:dots'></Icon>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>
                  Remove, rename, and more...
                </TooltipContent>
              </Tooltip>
              <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                  <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent'>
                    <Icon icon='lucide:plus'></Icon>
                  </Cta>
                </TooltipTrigger>
                <TooltipContent>
                  Add a page inside
                </TooltipContent>
              </Tooltip>
            </span>
          </span>
          <CollapsibleContent>
            <List>
              <ListItem className='tw:justify-between tw:p-2 tw:group tw:rounded-md tw:hover:bg-muted'>
                <span className='tw:flex tw:gap-1 tw:items-center'>
                  <Cta shapes={['icon', 'badge']} size='lg' variant="ghost" className='tw:bg-transparent'>
                    <Icon icon='carbon:document' ></Icon>
                  </Cta>
                  <span className='tw:truncate tw:text-ellipsis'>Jargons</span>
                </span>
                <span className='tw:group-hover:flex tw:gap-1 tw:hidden'>
                  <Tooltip delayDuration={500}>
                    <TooltipTrigger asChild>
                      <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent '>
                        <Icon icon='tabler:dots'></Icon>
                      </Cta>
                    </TooltipTrigger>
                    <TooltipContent>
                      Remove, rename, and more...
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip delayDuration={500}>
                    <TooltipTrigger asChild>
                      <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent'>
                        <Icon icon='lucide:plus'></Icon>
                      </Cta>
                    </TooltipTrigger>
                    <TooltipContent>
                      Add a page inside
                    </TooltipContent>
                  </Tooltip>
                </span>
              </ListItem>
              <ListItem className='tw:justify-between tw:p-2 tw:group tw:rounded-md tw:hover:bg-muted'>
                <span className='tw:flex tw:gap-1 tw:items-center'>
                  <Cta shapes={['icon', 'badge']} size='lg' variant="ghost" className='tw:bg-transparent'>
                    <Icon icon='carbon:document' ></Icon>
                  </Cta>
                  <span className='tw:truncate tw:text-ellipsis'>Integrations</span>
                </span>
                <span className='tw:group-hover:flex tw:gap-1 tw:hidden'>
                  <Tooltip delayDuration={500}>
                    <TooltipTrigger asChild>
                      <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent '>
                        <Icon icon='tabler:dots'></Icon>
                      </Cta>
                    </TooltipTrigger>
                    <TooltipContent>
                      Remove, rename, and more...
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip delayDuration={500}>
                    <TooltipTrigger asChild>
                      <Cta shapes={['icon', 'badge']} size='sm' variant="ghost" className='tw:bg-transparent'>
                        <Icon icon='lucide:plus'></Icon>
                      </Cta>
                    </TooltipTrigger>
                    <TooltipContent>
                      Add a page inside
                    </TooltipContent>
                  </Tooltip>
                </span>
              </ListItem>
            </List>
          </CollapsibleContent>
        </Collapsible>
      </ListItem>




      <ListItem className='tw:relative tw:p-2 tw:text-xs tw:hover:bg-muted tw:rounded-md'>

        <Tooltip delayDuration={500}>
          <TooltipTrigger asChild>
            {/* TBD: doc: this is how we stil keep everything in ListItem: Tooltip */}
            <span className='tw:absolute tw:top-0 tw:right-0 tw:w-full tw:h-full' />
          </TooltipTrigger>
          <TooltipContent>All private pages</TooltipContent>
        </Tooltip>

        <span className='tw:flex tw:gap-3 tw:items-center'>
          <Cta muted shapes={['icon', 'badge']} size='lg' variant="ghost" className='tw:bg-transparent'>
            <Icon icon='lucide:more-horizontal'></Icon>
          </Cta>
          More
        </span>
      </ListItem>
    </List>
  )
}