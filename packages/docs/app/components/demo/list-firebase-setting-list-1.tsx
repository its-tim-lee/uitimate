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