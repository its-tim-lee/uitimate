import { Cta } from "../ui/Cta/Cta"
import { Icon } from "../ui/Icon/Icon"
import { ListItem } from "../ui/List/List"

import { List } from "../ui/List/List"


export default () => {
  return (
    <List className='tw:w-[500px]'>
      <ListItem className='tw:p-2 tw:justify-between'>
        Status
        <Cta variant='secondary' shapes={['badge']} muted>Authorized</Cta>
      </ListItem>
      <ListItem className='tw:p-2 tw:justify-between'>
        ID
        <span className='tw:flex tw:items-center tw:gap-2'>
          u_2J89JSA4GJ <Icon icon='lucide:copy' className='tw:cursor-pointer' ></Icon>
        </span>
      </ListItem>
      <ListItem className='tw:p-2 tw:justify-between'>
        <span className='tw:flex tw:items-center tw:gap-2'>
          Project ID <Icon icon='lucide:circle-help'></Icon>
        </span>
        nuxt-webapplication
      </ListItem>
    </List>
  )
}