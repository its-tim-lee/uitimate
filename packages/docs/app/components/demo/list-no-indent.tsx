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
    <div className='tw:w-[400px]'>
      <h3 className='tw:text-lg tw:font-bold'>CASE-A</h3>
      <br />
      <List>
        <ListItem className='tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>Sponsers</ListItem>
        <br />
        <ListItem className='tw:text-sm tw:text-muted-foreground tw:p-2 tw:flex tw:items-center tw:justify-between tw:gap-2'>
          Building Your Application
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Icon icon='lucide:ellipsis-vertical' />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="tw:p-3">
              <DropdownMenuItem>Upload Photo</DropdownMenuItem>
              <DropdownMenuItem>Use DALL·E</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ListItem>
        <ListItem className='tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>
          Routing
        </ListItem>
        <ListItem className='tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>
          Data Fetching
        </ListItem>
      </List>
      <br />
      <List>
        <ListItem className='tw:text-sm tw:font-bold tw:p-2'>
          Get Started
        </ListItem>
        <ListItem className='tw:text-sm tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>
          Introduction
        </ListItem>
        <ListItem className='tw:text-sm tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>
          Setup
        </ListItem>

      </List>

      <br />
      <List>
        <br />
        <h3 className='tw:text-lg tw:font-bold'>CASE-B</h3>
        <br />
        {caseBItems.map((e, i) => (
          <ListItem key={i} className=' tw:p-2'>
            <Collapsible className='tw:w-full tw:group'>
              <span className="tw:flex tw:items-center tw:justify-between tw:p-2">
                {e.content}{" "}
                {e.dropdown && (
                  <CollapsibleTrigger asChild>
                    <span>
                      <Icon icon="lucide:chevron-down" className="tw:inline tw:group-data-[state=open]:hidden" />
                      <Icon icon="lucide:chevron-up" className="tw:inline tw:group-data-[state=closed]:hidden" />
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
                <List className='tw:ml-0 tw:pl-0 tw:mb-4'>
                  <ListItem className='tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>
                    Routing
                  </ListItem>
                  <ListItem className='tw:hover:bg-muted tw:hover:rounded-md tw:p-2'>
                    Data Fetching
                  </ListItem>
                </List>
              </CollapsibleContent>
            </Collapsible>
          </ListItem>
        ))}
      </List>
    </div>
  )
}