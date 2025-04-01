import { HeadingSubtitle } from "../ui/Heading/Heading";

import { Image } from "../ui/Image/Image.tsx";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/Avatar/Avatar.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/Tooltip/Tooltip.tsx";
import { Collapsible, CollapsibleContent } from "../ui/Collapsible/Collapsible.tsx";
import { CollapsibleTrigger } from "../ui/Collapsible/Collapsible.tsx";
import { Cta } from "../ui/Cta/Cta.tsx";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/DropdownMenu/DropdownMenu.tsx";
import { DropdownMenu } from "../ui/DropdownMenu/DropdownMenu.tsx";
import { Heading, HeadingTitle } from "../ui/Heading/Heading.tsx";
import { Icon } from "../ui/Icon/Icon.tsx";
import { List, ListItem } from "../ui/List/List.tsx";
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/Accordion/Accordion.tsx";
import { Separator } from '#/components/ui/Separator/Separator';

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
    title: "Summer BBQ",
    subtitle: "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this…",
    // TBD: doc: this tries to mimic the style of some similar lib that provide the prop like "inset" to do the underling padding to u
    // but in our philosophy, you should do that urself.
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
// TBD: doc: u need to add hover urself
export default () => {
  return (
    <List>
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