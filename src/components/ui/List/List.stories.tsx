
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar/Avatar.tsx";
import { Badge } from "../Badge/Badge.tsx";
import { Heading, HeadingTitle } from "../Heading/Heading.tsx";
import IconV2 from "../Icon/IconV2.tsx";
import { Separator } from "../Separator/Separator.tsx";
import { Switch } from "../Switch/Switch.tsx";
import { List, ListItem, ListSubheader } from "./List.tsx";
import { HeadingSubtitle } from '@/components/ui/Heading/Heading.tsx';
import { ListBox, ListBoxItem } from 'react-aria-components';


export default {
  title: 'Example/List',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}
// Observation:
// - build hover effect on a list item is tedious? (maybe i need rounded when hover?)
//   - but there're many list dont need hover or rounded
// - style the common items in a list item is tedious (eg., badge or action on the right)

export const Variant1 = {
  name: 'Default',
  render: () => {
    return (
      <>



        <List className='tw:w-[500px]'>
          <ListItem className='tw:items-center tw:justify-between'>
            Status
            <Badge variant='secondary'>Authorized</Badge>
          </ListItem>
          <ListItem className='tw:items-center tw:justify-between'>
            ID
            <span className='tw:flex tw:items-center tw:gap-2'>
              u_2J89JSA4GJ <IconV2 icon='lucide:copy'></IconV2>
            </span>

          </ListItem>
          <ListItem className='tw:items-center tw:justify-between'>
            <span className='tw:flex tw:items-center tw:gap-2'>
              Project ID <IconV2 icon='lucide:circle-help'></IconV2>
            </span>
            nuxt-webapplication
          </ListItem>
          <ListItem className='tw:items-center tw:justify-start'>
            <Heading size='h6'>
              <HeadingTitle>
                App nickname
              </HeadingTitle>
              <HeadingSubtitle className='tw:flex tw:items-center tw:gap-2'>
                nuxt-webapplication <IconV2 icon='lucide:pencil'></IconV2>
              </HeadingSubtitle>
            </Heading>
          </ListItem>
          <ListItem className='tw:items-center tw:justify-start'>
            <Heading size='h6'>
              <HeadingTitle className='tw:flex tw:items-center tw:gap-2'>
                App ID <IconV2 icon='lucide:circle-help'></IconV2>
              </HeadingTitle>
              <HeadingSubtitle>
                1:1085562005852:web:e017a129fd3ad76d333999
              </HeadingSubtitle>
            </Heading>
          </ListItem>
        </List>
        <br />
        <br />


        <ListBox className='tw:w-[500px]'>
          <ListBoxItem className='tw:flex tw:items-center tw:justify-between tw:p-3 tw:gap-2'>
            <span className='tw:flex tw:items-center tw:gap-3'>
              <IconV2 icon='lucide:mail' />Inbox
            </span>
            <Badge variant='ghost'>128</Badge>
          </ListBoxItem>
          <ListBoxItem>
            <Separator className='tw:w-[90%] tw:mx-auto' />
          </ListBoxItem>
          <ListBoxItem className='tw:flex tw:items-center tw:justify-between tw:p-3 tw:gap-2'>
            <span className='tw:flex tw:items-center tw:gap-3'>
              <IconV2 icon='lucide:sticky-note' />Drafts
            </span>
            <Badge variant='ghost'>9</Badge>
          </ListBoxItem>
        </ListBox>
        <br />
        <br />
        <List className='tw:w-[500px]'>
          <ListItem className='tw:items-center tw:justify-between'>
            <span className='tw:flex tw:items-center tw:gap-3'>
              <IconV2 icon='lucide:mail' />Inbox
            </span>
            <Badge variant='ghost'>128</Badge>
          </ListItem>
          <Separator className='tw:w-[90%] tw:mx-auto' />
          <ListItem className='tw:items-center tw:justify-between'>
            <span className='tw:flex tw:items-center tw:gap-3'>
              <IconV2 icon='lucide:sticky-note' />Drafts
            </span>
            <Badge variant='ghost'>9</Badge>
          </ListItem>

        </List>
        <br />
        <br />
        <List className='tw:w-[500px]'>
          <ListItem className='tw:items-center'>
            <Heading size='h6'>
              <HeadingTitle>
                Strictly Necessary
              </HeadingTitle>
              <HeadingSubtitle>
                These cookies are essential in order to use the website and use its features.
              </HeadingSubtitle>
            </Heading>
            <Switch />
          </ListItem>
          <ListItem className='tw:items-center'>
            <Heading size='h6'>
              <HeadingTitle>
                Functional Cookies
              </HeadingTitle>
              <HeadingSubtitle>
                These cookies allow the website to provide personalized functionality.
              </HeadingSubtitle>
            </Heading>
            <Switch />
          </ListItem>
          <ListItem className='tw:items-center'>
            <Avatar className='tw:mr-2'>
              <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
              <AvatarFallback>
                SD
              </AvatarFallback>
            </Avatar>
            <Heading size='h6'>
              <HeadingTitle>
                Sofia Davis
              </HeadingTitle>
              <HeadingSubtitle>
                sofia@example.com
              </HeadingSubtitle>
            </Heading>
          </ListItem>
          <ListItem className='tw:items-center'>
            <Avatar className='tw:mr-2'>
              <AvatarImage src="https://ui.shadcn.com/avatars/02.png" />
              <AvatarFallback>
                JL
              </AvatarFallback>
            </Avatar>
            <Heading size='h6'>
              <HeadingTitle>
                Jackson Lee
              </HeadingTitle>
              <HeadingSubtitle>
                jackson@example.com
              </HeadingSubtitle>
            </Heading>
          </ListItem>

        </List>
      </>


    )
  },
};