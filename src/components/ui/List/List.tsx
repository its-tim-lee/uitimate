import { cn } from "@/lib/utils";

// Implement: ListSubheader
// List
// - mode='compact' | 'flexible'
// - with virtualized list
// ListItem
// - use with Heading


const List = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div {...props} className={cn('tw:flex tw:flex-col', className)} />
  )
}

const ListItem = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    // <div {...props} className={cn('tw:outline tw:outline-muted tw:p-2 tw:gap-2 tw:flex', className)} />
    // <div {...props} className={cn('tw:p-2 tw:gap-2 tw:flex', className)} />
    <div {...props} className={cn('tw:p-3 tw:gap-2 tw:flex tw:hover:bg-muted tw:rounded-lg', className)} />
  )
}
// TBD:
const ListSubheader = ({ ...props }) => {
  return (
    <div {...props} />
  )
}



export { List, ListItem, ListSubheader }