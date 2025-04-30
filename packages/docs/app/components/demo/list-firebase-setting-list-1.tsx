import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading";
import { Icon } from "#/components/ui/Icon/Icon";
import { List, ListItem } from "#/components/ui/List/List";
export default () => {
  const items = [
    {
      title: 'App nickname',
      subtitle: 'nuxt-webapplication',
      icon: 'lucide:pencil',
      titleIcon: null,
    },
    {
      title: 'App ID',
      subtitle: '1:1085562005852:web:e017a129fd3ad76d333999',
      icon: 'lucide:pencil',
      titleIcon: 'lucide:circle-help',
    },
  ];
  return (
    <List>
      {items.map((e, index) => (
        <ListItem key={index} className='tw:p-2'>
          <Heading size='h6'>
            <HeadingTitle className='tw:flex tw:items-center tw:gap-2'>
              {e.title} {e.titleIcon && <Icon icon={e.titleIcon} />}
            </HeadingTitle>
            <HeadingSubtitle className='tw:flex tw:items-center tw:gap-2 tw:group'>
              {e.subtitle} <Icon className='tw:cursor-pointer tw:group-hover:visible tw:invisible' icon={e.icon}></Icon>
            </HeadingSubtitle>
          </Heading>
        </ListItem>
      ))}
    </List>
  )
}