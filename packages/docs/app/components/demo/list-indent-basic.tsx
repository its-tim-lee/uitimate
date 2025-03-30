import { List, ListItem } from "../ui/List/List";

// TBD: doc: simply add 2 classes we can have a beautify optional "indent border"
export default () => {
  return (
    <List>
      <ListItem className='tw:hover:bg-muted tw:p-2'>Performance</ListItem>
      <ListItem >
        <div className="tw:hover:bg-muted tw:p-2">Architecture</div>
        <List className="tw:border-l-2 tw:border-muted">
          <ListItem className="tw:hover:bg-muted tw:p-2">
            Accessibility
          </ListItem>
          <ListItem className="tw:hover:bg-muted tw:p-2">
            Fast Refresh
          </ListItem>
        </List>
      </ListItem>
    </List>
  )
}