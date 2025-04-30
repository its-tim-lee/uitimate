import { Image } from "#/components/ui/Image/Image.tsx";
import { Tooltip, TooltipContent, TooltipTrigger } from "#/components/ui/Tooltip/Tooltip.tsx";
import { Cta } from "#/components/ui/Cta/Cta.tsx";
import { Icon } from "#/components/ui/Icon/Icon.tsx";
import { List, ListItem } from "#/components/ui/List/List.tsx";
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "#/components/ui/Accordion/Accordion.tsx";
import { Separator } from "#/components/ui/Separator/Separator.tsx";

export default () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div data-collapsed={toggle || undefined} className='tw:group/root tw:flex tw:flex-col tw:gap-4 tw:border-2 tw:border-muted tw:p-1 tw:pt-4 tw:text-sm tw:h-fit not-prose tw:w-fit'>

      <div className='tw:hidden tw:group-data-collapsed/root:block tw:w-fit'>
        <List>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Image
              className='tw:h-[28px]'
              src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png"></Image>
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Separator />
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Icon icon='lucide:house' className='tw:size-5' />
              </TooltipTrigger>
              <TooltipContent>Project Overview</TooltipContent>
            </Tooltip>
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Icon icon='lucide:settings' className='tw:size-5' />
              </TooltipTrigger>
              <TooltipContent>Project Settings</TooltipContent>
            </Tooltip>
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Separator />
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Icon icon='ic:baseline-people' className='tw:size-5' />
              </TooltipTrigger>
              <TooltipContent>Authentication</TooltipContent>
            </Tooltip>
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Icon icon='lineicons:gemini' className='tw:size-5' />
              </TooltipTrigger>
              <TooltipContent>Vertex AI</TooltipContent>
            </Tooltip>
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Icon icon='solar:chart-bold' className='tw:size-5' />
              </TooltipTrigger>
              <TooltipContent>Chart</TooltipContent>
            </Tooltip>
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Separator />
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Icon icon='mage:dots-menu' className='tw:size-5' />
              </TooltipTrigger>
              <TooltipContent>All products</TooltipContent>
            </Tooltip>
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Separator />
          </ListItem>
          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:justify-center tw:p-2'>
            <Icon icon='lucide:chevron-right' className='tw:size-5' onClick={() => setToggle(!toggle)} />
          </ListItem>
        </List>
      </div>

      <div className='tw:group-data-collapsed/root:hidden'>

        <div className="tw:flex tw:flex-col tw:gap-4 ">
          <span className="tw:flex tw:items-center tw:gap-3 tw:px-6">
            <Image
              className='tw:h-[28px]'
              src="https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png"></Image>
            <Image
              className='tw:h-[18px]'
              src="https://www.gstatic.com/mobilesdk/240926_mobilesdk/workmark_light_grey.svg"></Image>
          </span>
          <Separator />
          <div className="tw:flex tw:items-center tw:gap-6 tw:h-[20px] tw:px-6">
            <span className="tw:flex tw:items-center tw:gap-4">
              <Icon icon='lucide:house'></Icon>
              Project Overview
            </span>
            <Separator orientation="vertical" className='tw:h-ful' />
            <Icon icon='lucide:settings'></Icon>
          </div>
          <Separator />
        </div>

        <List className='tw:overflow-hidden'>

          <ListItem className='tw:text-muted-foreground tw:text-xs tw:p-2 tw:mb-2 tw:pl-6'>Project shortcuts</ListItem>

          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:p-2 tw:justify-between tw:group '>
            <span className='tw:flex tw:items-center tw:gap-4'>
              <span className='tw:flex tw:items-center'>
                <Icon icon='qlementine-icons:drag-16' className='tw:invisible tw:group-hover:visible tw:hover:cursor-grab' />
                <Icon icon='ic:baseline-people' className='tw:size-5' />
              </span>
              Authentication
            </span>
            <Tooltip delayDuration={0}>
              <TooltipTrigger >
                <Icon icon='lets-icons:view' className='tw:invisible tw:group-hover:visible' />
              </TooltipTrigger>
              <TooltipContent>Hide shortcut</TooltipContent>
            </Tooltip>
          </ListItem>

          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:p-2 tw:justify-between tw:group'>
            <span className='tw:flex tw:items-center tw:gap-4'>
              <span className='tw:flex tw:items-center'>
                <Icon icon='qlementine-icons:drag-16' className='tw:invisible tw:group-hover:visible tw:hover:cursor-grab' />
                <Icon icon='lineicons:gemini' className='tw:size-5' />
              </span>
              Vertex AI
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <Cta size='sm' variant='outline' shapes={['badge']} className='tw:rounded-full'>NEW</Cta>
                </TooltipTrigger>
                <TooltipContent>Generate images using Imagen 3 models</TooltipContent>
              </Tooltip>
            </span>
            <Tooltip delayDuration={0}>
              <TooltipTrigger >
                <Icon icon='lets-icons:view' className='tw:invisible tw:group-hover:visible' />
              </TooltipTrigger>
              <TooltipContent>Hide shortcut</TooltipContent>
            </Tooltip>
          </ListItem>

          <ListItem className='tw:hover:bg-muted tw:hover:rounded-full tw:p-2 tw:justify-between tw:group'>
            <span className='tw:flex tw:items-center tw:gap-4'>
              <span className='tw:flex tw:items-center'>
                <Icon icon='qlementine-icons:drag-16' className='tw:invisible tw:group-hover:visible tw:hover:cursor-grab' />
                <Icon icon='solar:chart-bold' className='tw:size-5' />
              </span>
              Analytics Dashboard
            </span>
            <Tooltip delayDuration={0}>
              <TooltipTrigger>
                <Icon icon='lets-icons:view' className='tw:invisible tw:group-hover:visible' />
              </TooltipTrigger>
              <TooltipContent>Hide shortcut</TooltipContent>
            </Tooltip>
          </ListItem>
        </List>

        <div className='tw:text-muted-foreground tw:text-xs tw:p-2 tw:pl-6 tw:text-left'>Product categories</div>

        <Accordion type="single" className="tw:mx-2 tw:px-3 tw:bg-muted/50 tw:rounded-lg">
          <AccordionItem key='build' value='build'>
            <AccordionTrigger>Build</AccordionTrigger>
            <AccordionContent>
              <List>
                <ListItem>
                  <Cta variant='ghost' size='sm' className='tw:w-full tw:justify-start tw:gap-2 tw:rounded-full tw:bg-transparent tw:hover:bg-muted'>
                    <Icon icon='solar:shield-check-linear' />
                    App Check
                  </Cta>
                </ListItem>
                <ListItem>
                  <Cta variant='ghost' size='sm' className='tw:w-full tw:justify-start tw:gap-2 tw:rounded-full tw:bg-transparent tw:hover:bg-muted'>
                    <Icon icon='ic:baseline-people' />
                    Authentication
                  </Cta>
                </ListItem>
              </List>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem key='run' value='run'>
            <AccordionTrigger>Run</AccordionTrigger>
            <AccordionContent>
              <List>
                <ListItem>
                  <Cta>Create a new project</Cta>
                </ListItem>
              </List>
            </AccordionContent>
          </AccordionItem>
        </Accordion>


        <Cta variant='ghost' className='tw:rounded-full tw:mr-[100%] tw:gap-4 tw:text-left tw:justify-start tw:hover:bg-muted tw:text-sm'>
          <Icon icon='mage:dots-menu'></Icon>
          All products
        </Cta>

        <Separator />

        <Cta variant='ghost' shapes={['icon']} className='tw:mr-[100%]' onClick={() => setToggle(!toggle)}>
          <Icon icon='lucide:chevron-left'></Icon>
        </Cta>
      </div>
    </div>

  );
}