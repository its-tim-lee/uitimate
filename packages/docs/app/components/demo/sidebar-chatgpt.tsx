import { useState } from 'react'
import { Cta } from '#/components/ui/Cta/Cta'
import { Icon } from '#/components/ui/Icon/Icon'
import { List, ListItem } from '#/components/ui/List/List'
import { Heading, HeadingTitle, HeadingSubtitle } from '#/components/ui/Heading/Heading'
import { Sidebar, SidebarLayout, SidebarPeer } from '#/components/ui/Sidebar/Sidebar'

export default function SidebarChatGPT() {
  const [open, setOpen] = useState(false)

  return (
    <SidebarLayout open={open} onOpenChange={setOpen} directions={["left", "left"]} className='tw:border tw:border-muted-foreground/50 tw:rounded-lg tw:h-[500px]'>
      <Sidebar className='tw:w-[260px] tw:p-2'>
        <div className='tw:w-full tw:flex tw:flex-col tw:h-full'>
          <div className='tw:flex tw:justify-between tw:items-center'>
            <Cta
              variant="ghost"
              shapes={['icon']}
              size="lg"
              onClick={() => setOpen(!open)}
            >
              <Icon icon='lucide:panel-left' />
            </Cta>
            <div>
              <Cta
                variant="ghost"
                shapes={['icon']}
                size="lg"
              >
                <Icon icon='lucide:search' />
              </Cta>
              <Cta
                variant="ghost"
                shapes={['icon']}
                size="lg"
              >
                <Icon icon='lucide:edit' />
              </Cta>
            </div>
          </div>

          <List className='tw:mt-6'>
            <ListItem className='tw:p-3 tw:gap-3 tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
              <Icon icon='hugeicons:chat-gpt' className='tw:size-5' />
              ChatGPT
            </ListItem>
          </List>

          <List className='tw:mt-6'>
            <ListItem className='tw:text-muted-foreground tw:font-bold tw:p-3'>
              Projects
            </ListItem>
            <ListItem className='tw:p-3 tw:gap-3 tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
              <Icon icon='mdi:folder-plus-outline' className='tw:size-5' />
              New project
            </ListItem>
          </List>
          <List className='tw:mt-6'>
            <ListItem className='tw:text-muted-foreground tw:font-bold tw:p-3'>
              Today
            </ListItem>
            <ListItem className='tw:p-3 tw:gap-3 tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer tw:overflow-hidden tw:whitespace-nowrap'>
              CCP Taiwan Threat
            </ListItem>
          </List>
          <div className='tw:p-3 tw:mt-auto tw:flex tw:items-center tw:gap-3'>
            <Icon icon='hugeicons:chat-gpt' className='tw:size-7' />
            <Heading size="h5" className='tw:mb-0'>
              <HeadingTitle>View plans</HeadingTitle>
              <HeadingSubtitle className='tw:whitespace-nowrap'>Unlimited access, team....</HeadingSubtitle>
            </Heading>
          </div>
        </div>
      </Sidebar>
      <SidebarPeer className='tw:flex tw:flex-col tw:p-2'>
        {!open && (
          <Cta
            variant="ghost"
            shapes={['icon']}
            size="lg"
            onClick={() => setOpen(!open)}
          >
            <Icon icon='lucide:panel-left' />
          </Cta>
        )}
        <h1 className='tw:text-2xl tw:font-extrabold tw:flex-1 tw:flex tw:items-center tw:justify-center'>What can i help with?</h1>
      </SidebarPeer>
    </SidebarLayout>
  )
}