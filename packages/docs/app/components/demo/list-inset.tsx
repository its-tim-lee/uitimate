import { Avatar, AvatarFallback, AvatarImage } from "#/components/ui/Avatar/Avatar.tsx";
import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading.tsx";
import { List, ListItem } from "#/components/ui/List/List.tsx";
import React from 'react';
import { Separator } from "#/components/ui/Separator/Separator.tsx";

const items = [
  {
    avatarSrc: "https://ui.shadcn.com/avatars/01.png",
    avatarFallback: "SD",
    title: "Brunch this weekend?",
    subtitle: "Ali Connors — I'll be in your neighborhood doing errands this…",
    avatarVisible: true
  },
  {
    avatarSrc: "https://ui.shadcn.com/avatars/02.png",
    avatarFallback: "SD",
    title: "Breaking News",
    subtitle: "This weekend, the largest deportations...",
    avatarVisible: false
  },
  {
    avatarSrc: "https://ui.shadcn.com/avatars/03.png",
    avatarFallback: "SD",
    title: "Oui Oui",
    subtitle: "Sandra Adams — Do you have Paris recommendations? Have you ever…",
    avatarVisible: true
  }
];
export default () => {
  return (
    <List className='not-prose'>
      {items.map((e, i) => (
        <React.Fragment key={i}>
          <ListItem className='tw:items-start tw:hover:bg-muted tw:p-3'>
            <Avatar className={`tw:mr-2 ${e.avatarVisible ? '' : 'tw:invisible'}`}>
              <AvatarImage src={e.avatarSrc} />
              <AvatarFallback>{e.avatarFallback}</AvatarFallback>
            </Avatar>
            <Heading size='h6'>
              <HeadingTitle>{e.title}</HeadingTitle>
              <HeadingSubtitle>{e.subtitle}</HeadingSubtitle>
            </Heading>
          </ListItem>
          {i < items.length - 1 && <Separator className='tw:w-[90%] tw:ml-auto' />}
        </React.Fragment>
      ))}
    </List>
  )
}