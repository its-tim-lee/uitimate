import { Button } from "@/components/ui/Button/Button.tsx"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger
} from "@/components/ui/Sidebar/Sidebar.tsx"

import { Calendar, Home, Inbox, MoreHorizontal, Search, Settings } from "lucide-react"
import { Separator } from '@/components/ui/Separator/Separator.tsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/DropdownMenu/DropdownMenu.tsx";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/Collapsible/Collapsible.tsx";
import { useState } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/Breadcrumb/Breadcrumb.tsx";

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

function SidebarVariant1() {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar" side="left">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <Icon icon="lucide:chevron-down" className="tw:ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="tw:w-(--radix-popper-anchor-width)">
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className='tw:relative'>
        <SidebarGroup>
          <SidebarGroupLabel className="tw:peer/label">
            Favorites
          </SidebarGroupLabel>
          <SidebarGroupAction className="tw:opacity-0 tw:peer-hover/label:opacity-100">
            <Icon icon="lucide:more-vertical" />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Icon icon="lucide:home" className='tw:group-hover/menu-item:opacity-100 tw:opacity-0' />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* {data.navMain.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupAction title="More!!">
              <Icon icon="lucide:more-vertical" />
              <span className="tw:sr-only">More</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map(($i) => (
                  <SidebarMenuItem key={$i.title}>
                    <SidebarMenuButton asChild>
                      <a href={$i.url}>
                        <Icon icon={$i.icon} />
                        <span>{$i.title}</span>
                      </a>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction>
                          <Icon icon="lucide:chevron-right" />
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>
                          <span>Edit Project</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Delete Project</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))} */}
      </SidebarContent>






      <SidebarRail />

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button>
                <Settings />
                <span>Settings</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}


export default () => {
  return (
    <div className="tw-bg-red-500 dark:tw-bg-gray-800 tw-rounded-lg tw-px-6 tw-py-8 tw-ring tw-shadow-xl tw-ring-gray-900/5">

      <h3 className="tw-text-gray-900 dark:tw-text-white tw-mt-5 tw-text-base tw-font-medium tw-tracking-tight">
        Writes upside-down
      </h3>
      <p className="tw-text-gray-500 dark:tw-text-gray-400 tw-mt-2 tw-text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
      </p>
    </div>
    // <ul className="tw:space-y-4">
    //   <li className="tw:flex tw:items-center tw:space-x-4">
    //     <a href="#" className="tw:peer tw:p-2 tw:bg-blue-500 tw:text-white tw:rounded" data-active="true">
    //       Click Me
    //     </a>
    //     <button className="tw:p-2 tw:bg-gray-300 tw:rounded tw:peer-data-[active=true]:bg-green-500">
    //       I'm a Button
    //     </button>
    //   </li>
    //   <li className="tw:flex tw:items-center tw:space-x-4">
    //     <a href="#" className="tw:peer tw:p-2 tw:bg-blue-500 tw:text-white tw:rounded" data-active="false">
    //       Click Me
    //     </a>
    //     <button className="tw:p-2 tw:bg-gray-300 tw:rounded tw:peer-data-[active=true]:bg-green-500">
    //       I'm a Button
    //     </button>
    //   </li>
    // </ul>

    // <SidebarProvider>
    //   <SidebarVariant1 />
    //   <SidebarInset>
    //     <header className="tw:flex tw:sticky tw:top-0 tw:bg-background tw:h-16 tw:shrink-0 tw:items-center tw:gap-2 tw:border-b tw:px-4">
    //       <SidebarTrigger className="tw:-ml-1" />
    //       <Separator orientation="vertical" className="tw:mr-2 tw:h-4" />
    //       <Breadcrumb>
    //         <BreadcrumbList>
    //           <BreadcrumbItem className="tw:hidden tw:md:block">
    //             <BreadcrumbLink href="#">
    //               Building Your Application
    //             </BreadcrumbLink>
    //           </BreadcrumbItem>
    //           <BreadcrumbSeparator className="tw:hidden tw:md:block" />
    //           <BreadcrumbItem>
    //             <BreadcrumbPage>Data Fetching</BreadcrumbPage>
    //           </BreadcrumbItem>
    //         </BreadcrumbList>
    //       </Breadcrumb>
    //     </header>
    //     <div className="tw:flex tw:flex-1 tw:flex-col tw:gap-4 tw:p-4">
    //       {Array.from({ length: 24 }).map((_, index) => (
    //         <div
    //           key={index}
    //           className="tw:aspect-video tw:h-12 tw:w-full tw:rounded-lg tw:bg-muted/50"
    //         />
    //       ))}
    //     </div>
    //   </SidebarInset>
    // </SidebarProvider>

    // <div className="tw:group/collapsible" data-state="open">
    //   <div>
    //     <button className="tw:group-data-[state=closed]/collapsible:hidden">
    //       Plus Icon
    //     </button>
    //     <button className="tw:group-data-[state=open]/collapsible:hidden">
    //       Minus Icon
    //     </button>
    //   </div>
    // </div>
  )
}