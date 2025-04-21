import SidebarChatGPT from "#/components/demo/sidebar-chatgpt"
import { Icon } from "../Icon/Icon"
import {
  Sidebar,
  SidebarPeer,
  SidebarLayout,
  useSidebar

} from "./Sidebar.tsx"

import { Separator } from '#/components/ui/Separator/Separator.tsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "#/components/ui/DropdownMenu/DropdownMenu.tsx";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "#/components/ui/Collapsible/Collapsible.tsx";
import { useState } from "react";
import { Cta } from "#/components/ui/Cta/Cta.tsx";
import { DrawerHeading } from "#/components/ui/Drawer/Drawer.tsx";
import { useIsMobile } from "#/helpers/hooks/use-mobile.tsx";
import { DialogAction, DialogContent } from "#/components/ui/Dialog/Dialog.tsx";
import { DialogHeading, DialogSubtitle } from "#/components/ui/Dialog/Dialog.tsx";
import { Dialog, DialogTitle } from "#/components/ui/Dialog/Dialog.tsx";
import { Skeleton } from "#/components/ui/Skeleton/Skeleton.tsx";
import { List, ListItem } from "#/components/ui/List/List.tsx";
import { Heading, HeadingSubtitle, HeadingTitle } from "#/components/ui/Heading/Heading.tsx";
import SidebarToggleControl from "#/components/demo/sidebar-toggle-control"
import SidebarRwdMinimumDemo from "../../demo/sidebar-rwd-minimum-demo.tsx";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
          icon: 'lucide:home'
        },
        {
          title: "Project Structure",
          url: "#",
          icon: 'lucide:calendar',
          subs: [
            {
              title: 'Routing',
              url: '#',
            },
            {
              title: 'Rendering',
              url: '#',
            }
          ]
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
          icon: 'lucide:settings'
        },
      ],
    },
  ],
}

export default {
  title: 'Example/Sidebar',
  decorators: [
    /**
     * Storybook has a default style on the root element, which creates style issues on this very component.
     * So below is a workaround to prevent the styling issues.
     */
    (Story: any) => {
      const rootElement = document.getElementById('storybook-root');
      if (rootElement) {
        rootElement.style.width = '100%';
        rootElement.style.padding = 'unset';
        rootElement.style.height = '100dvh';
        rootElement.style.display = 'flex';
        rootElement.style.justifyContent = 'center';
        rootElement.style.alignItems = 'center';
      }
      return <Story />;
    },
  ],
  // includeStories: [],
  parameters: {
    layout: 'centered',
  },
}
// - TBD: doc
//  - Main content scrollable
//  - default shortcut
//  - mobile and desktop sidebar
//    - how they work smoothly in changing the breakpoint
//    - must provide DrawerHeading
//    - can provide different style to different breakpoints, just make sure to use Tailwind
//      - cuz Tailwind's default breakpoint matches to our `useIsMobile`
// #20250324
export const RWDMinimum = {
  name: 'RWD Minimum Demo',
  render: () => <SidebarRwdMinimumDemo />
}
// - TBD: doc
//  - Scrollable,
//  - Different shortcuts
//  - 2 variants
//  - watch out how we express right and left sidebar using composition
export const Scenario2Sidebars = {
  name: 'Scenario / 2 Sidebars',
  render: () => {
    const [leftOpen, setLeftOpen] = useState(true)
    const [rightOpen, setRightOpen] = useState(true)
    return (
      <SidebarLayout
        variant="floating"
        open={rightOpen}
        directions={["right", "right"]}
        shortcut='ctrl+1, command+1'
        onOpenChange={setRightOpen}
      >
        <SidebarPeer>
          <SidebarLayout
            variant="inset"
            open={leftOpen}
            directions={["left", "left"]}
            shortcut='ctrl+2, command+2'
            onOpenChange={setLeftOpen}
          >
            <Sidebar
              className='tw:w-[320px]'
            >
              <div className='tw:p-6 tw:overflow-y-scroll tw:space-y-4'>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className="tw:h-10 tw:w-full" />
                ))}
              </div>
            </Sidebar>
            <SidebarPeer>
              <div className='tw:p-6 tw:overflow-y-scroll tw:space-y-4'>
                {Array.from({ length: 20 }).map((_, index) => (
                  <Skeleton key={index} className="tw:h-20 tw:w-full" />
                ))}
              </div>
            </SidebarPeer>
          </SidebarLayout>
        </SidebarPeer>
        <Sidebar className='tw:w-[320px]'>
          <div className='tw:p-6 tw:overflow-y-scroll tw:space-y-4'>
            {Array.from({ length: 30 }).map((_, index) => (
              <Skeleton key={index} className="tw:h-10 tw:w-full" />
            ))}
          </div>
        </Sidebar>
      </SidebarLayout>
    )
  }
}
// - TBD: doc
//  - integration with Dialog
//  - key classes to make this work: overflow-hidden, max-h-[500px]
export const InWindowSidebar = {
  name: 'Scenario / In-Window Sidebar',
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='tw:overflow-hidden tw:p-0 tw:md:max-h-[500px]'>
          <SidebarLayout defaultOpen directions={["left"]}>
            <Sidebar className='tw:p-4'>
              <List>
                <ListItem className='tw:p-2 tw:gap-3'>
                  <Icon icon='lucide:settings' /> General
                </ListItem>
                <ListItem className='tw:p-2 tw:gap-3'>
                  <Icon icon='lucide:bell' /> Notifications
                </ListItem>
                <ListItem className='tw:p-2 tw:gap-3'>
                  <Icon icon='lucide:person-standing' /> Personalization
                </ListItem>
              </List>
            </Sidebar>
            <SidebarPeer className='tw:p-6'>
              <DialogHeading size="h4">
                <DialogTitle>Edit profile</DialogTitle>
                <DialogSubtitle>Make changes to your profile here. Click save when you're done.</DialogSubtitle>
              </DialogHeading>
              <br />
              <div className='tw:overflow-y-scroll tw:space-y-4'>
                {Array.from({ length: 20 }).map((_, index) => (
                  <Skeleton key={index} className="tw:h-5 tw:w-full" />
                ))}
              </div>
            </SidebarPeer>
          </SidebarLayout>
        </Dialog>
        <Cta onClick={() => setIsOpen(true)}>Open</Cta>
      </>
    )

  }
}

// - TBD: doc
//  - Toggle Control
//  - enableMobileSidebar
//    - You may provide ur fully customized mobile sidebar with our optional `useIsMobile` hook
//  - shortcut
export const ToggleControl = {
  name: 'API / Toggle Control',
  render: () => <SidebarToggleControl />
}


export const YT = {
  name: 'Showcase / YT',
  render: () => {
    const [open, setOpen] = useState(true)
    const onOpenChange = (open: boolean) => {
      setOpen(open)
    }
    return (
      <div className='tw:flex tw:w-full tw:h-full'>
        <List
          data-toggle={open ? true : undefined}
          data-tag='sidebar-icon'
          className='tw:gap-3 tw:shrink-0 tw:h-full tw:hidden tw:sm:block tw:md:data-toggle:hidden'
        >
          <ListItem className='tw:p-3 tw:gap-1 tw:flex-col tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
            <Icon icon='mdi:home' className='tw:size-5' />
            Home
          </ListItem>
          <ListItem className='tw:p-3 tw:gap-1 tw:flex-col tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
            <Icon icon='proicons:youtube-shorts' className='tw:size-5' />
            Shorts
          </ListItem>
        </List>
        <SidebarLayout open={open} onOpenChange={onOpenChange} directions={["left", "left"]} className="tw:flex-1">
          <Sidebar className='tw:w-[240px]!'>
            <List className='tw:p-4! tw:w-full'>
              <ListItem className='tw:p-3 tw:gap-3 tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
                <Icon icon='mdi:home' className='tw:size-5' />
                Home
              </ListItem>
              <ListItem className='tw:p-3 tw:gap-3 tw:hover:bg-muted tw:rounded-lg tw:cursor-pointer'>
                <Icon icon='proicons:youtube-shorts' className='tw:size-5' />
                Shorts
              </ListItem>
            </List>
          </Sidebar>
          <SidebarPeer className='tw:flex tw:flex-col tw:items-center tw:justify-center'>
            <p className='tw:px-20'>
              Press <kbd className='tw:code'>ctrl b</kbd> (or <kbd className='tw:code'>command b</kbd>) to toggle the sidebar whenever you want during the breakpoint changing.
            </p>
          </SidebarPeer>
        </SidebarLayout>
      </div>
    )
  }
}

export const ChatGPT = {
  name: 'Showcase / GPT Sidebar',
  render: () => <SidebarChatGPT />
}