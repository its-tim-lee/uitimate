import { type ComponentProps } from "react"
import { Root, List, Item, Trigger, Content, Link, Viewport, Indicator, Sub } from "@radix-ui/react-navigation-menu"
import { tv } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon.tsx"

const navigationMenuVariants = tv({
  slots: {
    root: "tw:relative tw:z-10 tw:flex tw:max-w-max tw:flex-1 tw:items-center tw:justify-center",
    list: "tw:group tw:flex tw:flex-1 tw:list-none tw:items-center tw:justify-center tw:space-x-1",
    trigger: [
      "tw:group tw:inline-flex tw:h-9 tw:w-max tw:items-center tw:justify-center tw:rounded-md tw:bg-background tw:px-4 tw:py-2 tw:text-sm tw:font-medium tw:transition-colors",
      "tw:hover:bg-accent tw:hover:text-accent-foreground",
      "tw:focus:bg-accent tw:focus:text-accent-foreground tw:focus:outline-hidden",
      "tw:disabled:pointer-events-none tw:disabled:opacity-50",
      "tw:data-active:bg-accent/50 tw:data-[state=open]:bg-accent/50"
    ],
    triggerIcon: [
      "tw:relative tw:top-[1px] tw:ml-1 tw:h-3 tw:w-3 tw:transition tw:duration-300",
      "tw:group-data-[state=open]:rotate-180"
    ],
    content: [
      "tw:left-0 tw:top-0 tw:w-full tw:md:absolute tw:md:w-auto",
      "tw:data-[motion^=from-]:animate-in tw:data-[motion^=to-]:animate-out",
      "tw:data-[motion^=from-]:fade-in tw:data-[motion^=to-]:fade-out",
      "tw:data-[motion=from-end]:slide-in-from-right-52 tw:data-[motion=from-start]:slide-in-from-left-52 tw:data-[motion=to-end]:slide-out-to-right-52 tw:data-[motion=to-start]:slide-out-to-left-52"
    ],
    viewportWrapper: "tw:absolute tw:left-0 tw:top-full tw:flex tw:justify-center",
    viewport: [
      "tw:origin-top-center tw:relative tw:mt-1.5 tw:w-full tw:overflow-hidden tw:rounded-md tw:border tw:bg-popover tw:text-popover-foreground tw:shadow",
      "tw:h-(--radix-navigation-menu-viewport-height) tw:md:w-(--radix-navigation-menu-viewport-width)",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
      "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-90"
    ],
    indicator: [
      "tw:top-full tw:z-1 tw:flex tw:h-1.5 tw:items-end tw:justify-center tw:overflow-hidden",
      "tw:data-[state=visible]:animate-in tw:data-[state=hidden]:animate-out",
      "tw:data-[state=hidden]:fade-out tw:data-[state=visible]:fade-in"
    ],
    indicatorArrow: "tw:relative tw:top-[60%] tw:h-2 tw:w-2 tw:rotate-45 tw:rounded-tl-sm tw:bg-border tw:shadow-md"
  }
})

const {
  root,
  list,
  trigger,
  triggerIcon,
  content,
  viewportWrapper,
  viewport,
  indicator,
  indicatorArrow
} = navigationMenuVariants()

type NavigationMenuProps = ComponentProps<typeof Root>
const NavigationMenu = ({
  className,
  children,
  ...props
}: NavigationMenuProps) => (
  <Root
    className={root({ className })}
    {...props}
  >
    <List
      className={list({ className })}
    >
      {children}
    </List>
    <NavigationMenuViewport />
  </Root>
)

type NavigationMenuItemProps = ComponentProps<typeof Item>
const NavigationMenuItem = Item

type NavigationMenuTriggerProps = ComponentProps<typeof Trigger>
const NavigationMenuTrigger = ({
  className,
  children,
  ...props
}: NavigationMenuTriggerProps) => (
  <Trigger
    className={trigger({ className })}
    {...props}
  >
    {children}{" "}
    <Icon icon='lucide:chevron-down' className={triggerIcon()} aria-hidden="true" />
  </Trigger>
)

type NavigationMenuContentProps = ComponentProps<typeof Content>
const NavigationMenuContent = ({
  className,
  ...props
}: NavigationMenuContentProps) => (
  <Content
    className={content({ className })}
    {...props}
  />
)

type NavigationMenuViewportProps = ComponentProps<typeof Viewport>
const NavigationMenuViewport = ({
  className,
  ...props
}: NavigationMenuViewportProps) => (
  <div className={viewportWrapper()}>
    <Viewport
      className={viewport({ className })}
      {...props}
    />
  </div>
)

type NavigationMenuIndicatorProps = ComponentProps<typeof Indicator>
const NavigationMenuIndicator = ({
  className,
  ...props
}: NavigationMenuIndicatorProps) => (
  <Indicator
    className={indicator({ className })}
    {...props}
  >
    <div className={indicatorArrow()} />
  </Indicator>
)

type NavigationMenuLinkProps = ComponentProps<typeof Link>
const NavigationMenuLink = ({
  className,
  ...props
}: NavigationMenuLinkProps) => (
  <Link
    className={trigger({ className })}
    {...props}
  />
)

NavigationMenu.displayName = "NavigationMenu"
NavigationMenuItem.displayName = "NavigationMenuItem"
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"
NavigationMenuContent.displayName = "NavigationMenuContent"
// TBD:
// - doc -> most of time, you really don't need these
// - doc -> We don't expose NavigationSubMenu cuz we can implement that using Tabs
NavigationMenuViewport.displayName = "NavigationMenuViewport"
NavigationMenuIndicator.displayName = "NavigationMenuIndicator"
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
  navigationMenuVariants,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  NavigationMenuLink,
  type NavigationMenuProps,
  type NavigationMenuItemProps,
  type NavigationMenuTriggerProps,
  type NavigationMenuContentProps,
  type NavigationMenuViewportProps,
  type NavigationMenuIndicatorProps,
  type NavigationMenuLinkProps
}

