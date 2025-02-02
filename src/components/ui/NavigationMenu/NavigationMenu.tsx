import { Root, List, Item, Trigger, Content, Link, Viewport, Indicator, Sub } from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { type ComponentProps } from "react"
import { cn } from "@/lib/utils"

const NavigationMenu = ({ className, children, ...props }: ComponentProps<typeof Root>) => (
  <Root
    className={cn(
      "tw:relative tw:z-10 tw:flex tw:max-w-max tw:flex-1 tw:items-center tw:justify-center",
      className
    )}
    {...props}
  >
    <List
      className={cn(
        "tw:group tw:flex tw:flex-1 tw:list-none tw:items-center tw:justify-center tw:space-x-1",
        className
      )}
    >
      {children}
    </List>
    <NavigationMenuViewport />
  </Root>
)

const NavigationMenuItem = Item

const navigationMenuTriggerStyle = cva(
  "tw:group tw:inline-flex tw:h-9 tw:w-max tw:items-center tw:justify-center tw:rounded-md tw:bg-background tw:px-4 tw:py-2 tw:text-sm tw:font-medium tw:transition-colors tw:hover:bg-accent tw:hover:text-accent-foreground tw:focus:bg-accent tw:focus:text-accent-foreground tw:focus:outline-hidden tw:disabled:pointer-events-none tw:disabled:opacity-50 tw:data-active:bg-accent/50 tw:data-[state=open]:bg-accent/50"
)

const NavigationMenuTrigger = ({ className, children, ...props }: ComponentProps<typeof Trigger>) => (
  <Trigger
    className={cn(navigationMenuTriggerStyle(), "tw:group", className)}
    {...props}
  >
    {children}{" "}
    <Icon icon='lucide:chevron-down' className="tw:relative tw:top-[1px] tw:ml-1 tw:h-3 tw:w-3 tw:transition tw:duration-300 tw:group-data-[state=open]:rotate-180" aria-hidden="true" />
  </Trigger>
)

const NavigationMenuContent = ({ className, ...props }: ComponentProps<typeof Content>) => (
  <Content
    className={cn(
      "tw:left-0 tw:top-0 tw:w-full tw:data-[motion^=from-]:animate-in tw:data-[motion^=to-]:animate-out tw:data-[motion^=from-]:fade-in tw:data-[motion^=to-]:fade-out tw:data-[motion=from-end]:slide-in-from-right-52 tw:data-[motion=from-start]:slide-in-from-left-52 tw:data-[motion=to-end]:slide-out-to-right-52 tw:data-[motion=to-start]:slide-out-to-left-52 tw:md:absolute tw:md:w-auto tw-",
      className
    )}
    {...props}
  />
)

const NavigationMenuViewport = ({ className, ...props }: ComponentProps<typeof Viewport>) => (
  <div className={cn("tw:absolute tw:left-0 tw:top-full tw:flex tw:justify-center")}>
    <Viewport
      className={cn(
        "tw:origin-top-center tw:relative tw:mt-1.5 tw:h-(--radix-navigation-menu-viewport-height) tw:w-full tw:overflow-hidden tw:rounded-md tw:border tw:bg-popover tw:text-popover-foreground tw:shadow tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-90 tw:md:w-(--radix-navigation-menu-viewport-width)",
        className
      )}
      {...props}
    />
  </div>
)

const NavigationMenuIndicator = ({ className, ...props }: ComponentProps<typeof Indicator>) => (
  <Indicator
    className={cn(
      "tw:top-full tw:z-1 tw:flex tw:h-1.5 tw:items-end tw:justify-center tw:overflow-hidden tw:data-[state=visible]:animate-in tw:data-[state=hidden]:animate-out tw:data-[state=hidden]:fade-out tw:data-[state=visible]:fade-in",
      className
    )}
    {...props}
  >
    <div className="tw:relative tw:top-[60%] tw:h-2 tw:w-2 tw:rotate-45 tw:rounded-tl-sm tw:bg-border tw:shadow-md" />
  </Indicator>
)

const NavigationMenuLink = Link

NavigationMenu.displayName = "NavigationMenu"
NavigationMenuTrigger.displayName = "NavigationMenuTrigger"
NavigationMenuContent.displayName = "NavigationMenuContent"
NavigationMenuViewport.displayName = "NavigationMenuViewport"
NavigationMenuIndicator.displayName = "NavigationMenuIndicator"

/**
 * We don't expose NavigationSubMenu cuz we can implement that using Tabs
 */
export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
}
