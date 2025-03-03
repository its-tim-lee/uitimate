import { Button } from "../Button/Button.tsx"
import { Icon } from "../Icon/Icon.tsx"
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
  SidebarTrigger,
  useSidebar
} from "./Sidebar.tsx"

import { Calendar, Home, Inbox, MoreHorizontal, Search, Settings, SidebarIcon } from "lucide-react"
import { Separator } from '@/components/ui/Separator/Separator.tsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../DropdownMenu/DropdownMenu.tsx";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../Collapsible/Collapsible.tsx";
import { useState } from "react";

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
      }
      return <Story />;
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

function SidebarVariant1() {
  return (
    <Sidebar collapsible="offcanvas" variant="inset" side="left">
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

        {data.navMain.map((section) => (
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
        ))}
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

const SidebarVariantMix = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="tw:text-accent-foreground/0">Favorites</SidebarGroupLabel>
          <SidebarGroupAction className="tw:group/yo">
            <Icon icon="lucide:more-vertical" className='tw:group-hover/yo:opacity-100 tw:opacity-0' />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Home</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export const VariantMix = {
  name: 'Mix',
  render: () => {
    return (
      <SidebarProvider>
        <SidebarVariantMix />
        <SidebarInset>
          <SidebarTrigger />
        </SidebarInset>
      </SidebarProvider>
    )
  }
}

export const Variant1 = {
  name: 'V1 / Sizable Header',
  render: () => {
    return (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Sidebar Header</SidebarHeader>
          <SidebarSeparator />
          <SidebarContent>
            <SidebarGroup>Sidebar Content</SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header className="tw:flex tw:sticky tw:top-0 tw:bg-background tw:h-16 tw:shrink-0 tw:items-center tw:gap-2 tw:border-b tw:px-4">
            <SidebarTrigger className="tw:-ml-1" />
            <Separator orientation="vertical" className="tw:mr-2 tw:h-4" />
            <span>This is some title of the "sizable header"</span>
          </header>
          <div className="tw:flex tw:flex-1 tw:flex-col tw:gap-4 tw:p-4">
            <p>
              A sizable header is a header that can be resized by the appearance of the sidebar.
            </p>
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className="tw:aspect-video tw:h-12 tw:w-full tw:rounded-lg tw:bg-muted/50"
              />
            ))}
          </div>
        </SidebarInset>
      </SidebarProvider>
    )
  },
};

const UnSizableHeader = () => {
  const { toggleSidebar } = useSidebar()
  return (
    <header className="tw-fle tw:sticky tw:top-0 tw:z-50 tw:w-full tw:items-center tw:border-b tw:bg-background">
      <div className="tw:flex tw:h-(--header-height) tw:w-full tw:items-center tw:gap-2 tw:px-4">
        <Button className="tw:h-8 tw:w-8" variant="ghost" size="icon" onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="tw:mr-2 tw:h-4" />
        <span>This is some title of the "unsizable header"</span>
      </div>
    </header>
  )
}

export const Variant1A = {
  name: 'V1A / Unsizable Header',
  render: () => {
    return (
      <div className="tw:[--header-height:calc(--spacing(14))]">
        <SidebarProvider className="tw:flex tw:flex-col">
          <UnSizableHeader />
          <div className='tw:flex tw:flex-1'>
            <Sidebar className="tw:top-(--header-height) tw:h-[calc(100svh-var(--header-height))]!">
              <SidebarHeader>Sidebar Header</SidebarHeader>
              <SidebarSeparator />
              <SidebarContent>
                <SidebarGroup>Sidebar Content</SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <SidebarInset>
              <div className="tw:flex tw:flex-1 tw:flex-col tw:gap-4 tw:p-4">
                <p>
                  A unsizable header is a header that will not be resized by the appearance of the sidebar.
                </p>
                {Array.from({ length: 24 }).map((_, index) => (
                  <div
                    key={index}
                    className="tw:aspect-video tw:h-12 tw:w-full tw:rounded-lg tw:bg-muted/50"
                  />
                ))}
              </div>
            </SidebarInset>
          </div>

        </SidebarProvider>
      </div>
    )
  },
}

const sidebarVariant2Data = [
  {
    title: "Getting Started",
    url: "#",
    items: [
      {
        title: "Installation",
        url: "#",
      },
      {
        title: "Project Structure",
        url: "#",
      },
    ],
  },
  {
    title: "Building Your Application",
    url: "#",
    items: [
      {
        title: "Routing",
        url: "#",
      },
      {
        title: "Data Fetching",
        url: "#",
        isActive: true,
      }
    ],
  },
]

const SidebarVariant2 = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarVariant2Data.map((item) => (
              <DropdownMenu key={item.title}>
                <SidebarMenuItem>
                  <SidebarMenuButton className="tw-data-[state=open]:tw-bg-sidebar-accent tw-data-[state=open]:tw-text-sidebar-accent-foreground tw:group/menu-button">
                    {/* <Icon icon="lucide:more-vertical" /> */}
                    {item.title} <DropdownMenuTrigger asChild><Icon icon="lucide:more-vertical" className="tw:ml-auto tw:invisible tw:group-data-[state=open]:tw-rotate-90 tw:group-hover/menu-button:visible" /></DropdownMenuTrigger>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <DropdownMenuContent side="right" align="start" className="tw:min-w-56 tw:rounded-lg">
                      {item.items.map((item) => (
                        <DropdownMenuItem asChild key={item.title}>
                          <a href={item.url}>{item.title}</a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  ) : null}
                </SidebarMenuItem>
              </DropdownMenu>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
/**
 * This shows case a way to implement submenu without using sidebar's built-in submenu components like `SidebarMenuSub`
 */
export const Variant2 = {
  name: 'V2 / Submenu: SidebarGroupx1 +Dropdown',
  render: () => {
    return (
      <SidebarProvider>
        <SidebarVariant2 />
        <SidebarInset>
          <main><SidebarTrigger /></main>
        </SidebarInset>
      </SidebarProvider>
    )
  },
};

const SidebarVariant3 = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarVariant3Data.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="tw:group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Icon icon="lucide:plus" className="tw:ml-auto tw:group-data-[state=open]/collapsible:hidden" />
                      <Icon icon="lucide:minus" className="tw:ml-auto tw:group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map(($i) => (
                          <SidebarMenuSubItem key={$i.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={$i.isActive}
                            >
                              <a href={$i.url}>{$i.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

const sidebarVariant3Data = [
  {
    title: "Getting Started",
    url: "#",
    items: [
      {
        title: "Installation",
        url: "#",
      },
      {
        title: "Project Structure",
        url: "#",
      },
    ],
  },
  {
    title: "Building Your Application",
    url: "#",
    items: [
      {
        title: "Routing",
        url: "#",
      },
      {
        title: "Data Fetching",
        url: "#",
        isActive: true,
      },
      {
        title: "Rendering",
        url: "#",
      },
      {
        title: "Caching",
        url: "#",
      },
      {
        title: "Styling",
        url: "#",
      },
      {
        title: "Optimizing",
        url: "#",
      },
      {
        title: "Configuring",
        url: "#",
      },
      {
        title: "Testing",
        url: "#",
      },
      {
        title: "Authentication",
        url: "#",
      },
      {
        title: "Deploying",
        url: "#",
      },
      {
        title: "Upgrading",
        url: "#",
      },
      {
        title: "Examples",
        url: "#",
      },
    ],
  },
  {
    title: "API Reference",
    url: "#",
    items: [
      {
        title: "Components",
        url: "#",
      },
      {
        title: "File Conventions",
        url: "#",
      },
      {
        title: "Functions",
        url: "#",
      },
      {
        title: "next.config.js Options",
        url: "#",
      },
      {
        title: "CLI",
        url: "#",
      },
      {
        title: "Edge Runtime",
        url: "#",
      },
    ],
  },
  {
    title: "Architecture",
    url: "#",
    items: [
      {
        title: "Accessibility",
        url: "#",
      },
      {
        title: "Fast Refresh",
        url: "#",
      },
      {
        title: "Next.js Compiler",
        url: "#",
      },
      {
        title: "Supported Browsers",
        url: "#",
      },
      {
        title: "Turbopack",
        url: "#",
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
      },
    ],
  },
]

export const Variant3 = {
  name: 'V3 / Submenu: SidebarGroup x 1 + Collapsible + SidebarMenuSub',
  render: () => {
    return (
      <SidebarProvider>
        <SidebarVariant3 />
        <SidebarInset><SidebarTrigger /></SidebarInset>
      </SidebarProvider>
    )
  },
};

const SidebarVariant4 = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarVariant3Data.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="tw:font-medium">{item.title}</a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export const Variant4 = {
  name: 'V4 / Submenu: SidebarGroup x 1 + SidebarMenuSub',
  render: () => {
    return (
      <SidebarProvider>
        <SidebarVariant4 />
        <SidebarInset><SidebarTrigger /></SidebarInset>
      </SidebarProvider>
    )
  },
};

const SidebarVariant5 = () => {
  const [activeItem, setActiveItem] = useState('');
  return (
    <Sidebar>
      <SidebarContent>
        {sidebarVariant3Data.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map(($i) => (
                  <SidebarMenuItem key={$i.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={$i.title === activeItem}
                      onClick={() => setActiveItem($i.title)}
                    >
                      <a href={$i.url} className="tw:font-medium">{$i.title}</a>
                    </SidebarMenuButton>
                    <SidebarMenuAction className="tw:opacity-0 tw:peer-data-[active=true]/menu-button:opacity-100">
                      <Icon icon="lucide:chevron-right" />
                    </SidebarMenuAction>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
};

export const Variant5 = {
  name: 'V5 / Submenu: many SidebarGroup + SidebarGroupLabel',
  render: () => {
    return (
      <SidebarProvider>
        <SidebarVariant5 />
        <SidebarInset><SidebarTrigger /></SidebarInset>
      </SidebarProvider>
    )
  },
};

const SidebarVariant6 = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>1st</SidebarMenuButton>
              <SidebarMenuBadge>Badge</SidebarMenuBadge>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton>2nd</SidebarMenuSubButton>
                </SidebarMenuSubItem>
                <SidebarMenuSubItem>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton>3rd</SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSkeleton showIcon />
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export const Variant6 = {
  name: 'V6 / Nested Menus',
  render: () => {
    return (
      <SidebarProvider>
        <SidebarVariant6 />
        <SidebarInset><SidebarTrigger /></SidebarInset>
      </SidebarProvider>
    )
  },
};