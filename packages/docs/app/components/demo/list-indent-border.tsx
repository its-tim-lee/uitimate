import { List, ListItem } from "#/components/ui/List/List.tsx";

export default () => {
  return (
    <List className='tw:[&_[data-item]]:hover:bg-muted tw:[&_[data-item]]:p-2 tw:text-left'>
      <ListItem data-item>Performance</ListItem>
      <ListItem>
        <div data-item>Architecture</div>
        <List className="tw:border-l-2 tw:border-muted">
          <ListItem data-item>Accessibility</ListItem>
          <ListItem data-item>Fast Refresh</ListItem>
        </List>
      </ListItem>
    </List>
  )
}