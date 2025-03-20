import { HeadingSubtitle } from "../ui/Heading/Heading.tsx";

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
import { Separator } from '@/components/ui/Separator/Separator';

const caseAItems = [
  { content: 'Sponsers', dropdown: false },
  { content: 'Building Your Application', dropdown: true },
  { content: 'Routing', dropdown: false },
  { content: 'Data Fetching', dropdown: false }
];

const caseBItems = [
  { content: 'Sponsers', dropdown: false },
  { content: 'Building Your Application', dropdown: true },
  { content: 'API Reference', dropdown: true }
];

export default () => {
  return (
    <List className='tw:w-[400px]'>
      {caseBItems.map((e, i) => (
        <ListItem key={i} className=' tw:p-2'>
          <Collapsible className='tw:w-full tw:group'>
            <span className="tw:flex tw:items-center tw:justify-between tw:p-2">
              {e.content}{" "}
              {e.dropdown && (
                <CollapsibleTrigger asChild>
                  <span>
                    <Icon icon="lucide:plus" className="tw:inline tw:group-data-[state=open]:hidden" />
                    <Icon icon="lucide:minus" className="tw:inline tw:group-data-[state=closed]:hidden" />
                  </span>
                </CollapsibleTrigger>
              )}
            </span>
            <CollapsibleContent>
              {/* TBD: doc: the indent needs to be reset manually
                   such resetting is considered fine on DX, cuz
                   1) in most of time we need indent
                   2) this style of list is special (cuz no indent)

                */}
              <List className='tw:mb-4'>
                <ListItem className='tw:hover:bg-muted tw:text-muted-foreground tw:hover:rounded-md tw:p-2'>
                  Routing
                </ListItem>
                <ListItem className='tw:hover:bg-muted tw:text-muted-foreground tw:hover:rounded-md tw:p-2'>
                  Data Fetching
                </ListItem>
              </List>
            </CollapsibleContent>
          </Collapsible>
        </ListItem>
      ))}
    </List>
  )
}