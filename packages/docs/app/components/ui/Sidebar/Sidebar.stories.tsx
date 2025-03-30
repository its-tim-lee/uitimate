import { Icon } from "../Icon/Icon"
import {
  Sidebar,
  SidebarInset,
  SidebarLayout,
  useSidebar
  // SidebarContent,
  // SidebarFooter,
  // SidebarGroup,
  // SidebarGroupAction,
  // SidebarGroupContent,
  // SidebarGroupLabel,
  // SidebarHeader,
  // SidebarMenu,
  // SidebarMenuAction,
  // SidebarMenuBadge,
  // SidebarMenuButton,
  // SidebarMenuItem,
  // SidebarMenuSkeleton,
  // SidebarMenuSub,
  // SidebarMenuSubButton,
  // SidebarMenuSubItem,
  // SidebarSeparator,

} from "./Sidebar.tsx"

import { Calendar, Home, Inbox, MoreHorizontal, Search, Settings, SidebarIcon } from "lucide-react"
import { Separator } from '@/components/ui/Separator/Separator.tsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../DropdownMenu/DropdownMenu.tsx";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../Collapsible/Collapsible.tsx";
import { useState } from "react";
import { Button } from "../Button/Button.tsx";
import { Cta } from "../Cta/Cta.tsx";
import { DrawerHeading } from "../Drawer/Drawer.tsx";
import { useIsMobile } from "~/src/hooks/use-mobile.tsx";
import { DialogAction, DialogContent } from "../Dialog/Dialog.tsx";
import { DialogHeading, DialogSubtitle } from "../Dialog/Dialog.tsx";
import { Dialog, DialogTitle } from "../Dialog/Dialog.tsx";
import { Skeleton } from "../Skeleton/Skeleton.tsx";
import { List, ListItem } from "../List/List.tsx";
import { Heading, HeadingSubtitle, HeadingTitle } from "../Heading/Heading.tsx";

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
export const DEMO = {
  name: 'DEMO / Left Sidebar',
  render: () => {
    return (
      <SidebarLayout defaultOpen directions={["left", "bottom"]}>
        <Sidebar className='tw:p-0 tw:md:p-4'>
          <Sidebar.Mobile>
            <div className='tw:pb-4 tw:px-5 tw:overflow-y-scroll'>
              <DrawerHeading className='tw:text-center'>
                Mobile Sidebar
              </DrawerHeading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.

                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit.

                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam.

                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet.
              </p>
            </div>
          </Sidebar.Mobile>
          <Sidebar.Desktop>
            <div className="tw:p-4">
              <h3 className="tw:font-bold">Desktop Sidebar</h3>
            </div>
          </Sidebar.Desktop>
        </Sidebar>
        <SidebarInset>
          <div className='tw:p-6 tw:overflow-y-scroll tw:space-y-4'>
            {Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} className="tw:h-20 tw:w-full" />
            ))}
          </div>
        </SidebarInset >
      </SidebarLayout >
    )
  }
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
        <SidebarInset>
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
            <SidebarInset>
              <div className='tw:p-6 tw:overflow-y-scroll tw:space-y-4'>
                {Array.from({ length: 20 }).map((_, index) => (
                  <Skeleton key={index} className="tw:h-20 tw:w-full" />
                ))}
              </div>
            </SidebarInset>
          </SidebarLayout>
        </SidebarInset>
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
            <SidebarInset className='tw:p-6'>
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
            </SidebarInset>
          </SidebarLayout>
        </Dialog>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
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
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <SidebarLayout
        enableMobileSidebar={false}
        open={open}
        shortcut='ctrl+s, command+s'
        variant="floating"
        onOpenChange={setOpen}
        directions={["left", "bottom"]}
      >
        <Sidebar className="tw:w-[200px]" />
        <SidebarInset>
          <Cta
            variant="ghost"
            shapes={['icon']}
            size="lg"
            onClick={() => setOpen(!open)}
          >
            <Icon icon='lucide:panel-left' />
          </Cta>
        </SidebarInset>
      </SidebarLayout>
    )
  }
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
          <SidebarInset>

          </SidebarInset>
        </SidebarLayout>
      </div>
    )
  }
}

export const ChatGPT = {
  name: 'Showcase / GPT Sidebar',
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <SidebarLayout open={open} onOpenChange={setOpen} directions={["left", "left"]}>
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
        <SidebarInset className='tw:flex tw:flex-col tw:p-2'>
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
        </SidebarInset>
      </SidebarLayout>
    )
  }
}