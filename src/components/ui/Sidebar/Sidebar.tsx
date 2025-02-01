import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import { type ComponentProps, type ComponentRef } from "react"
import { useState, useCallback, useEffect, useMemo, createContext, useContext, type Ref, type ReactNode, type CSSProperties } from "react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button/Button.tsx"
import { Input } from "@/components/ui/Input/Input.tsx"
import { Separator } from "@/components/ui/Separator/Separator.tsx"
import { Skeleton } from "@/components/ui/Skeleton/Skeleton.tsx"
import { Sheet, SheetContent } from "@/components/ui/Sheet/Sheet.tsx"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip/Tooltip.tsx"
import { Icon } from "@/components/ui/Icon/Icon.tsx"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

type SidebarContext = {
  state: "expanded" | "collapsed"
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = createContext<SidebarContext | null>(null)

function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = (
  {
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
  }: {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
    className?: string
    style?: CSSProperties
    children?: ReactNode
  } & ComponentProps<"div">
) => {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open]
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = useCallback(() => {
    return isMobile
      ? setOpenMobile((open) => !open)
      : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = useMemo<SidebarContext>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style,
            } as CSSProperties
          }
          className={cn(
            "tw-group/sidebar-wrapper tw-flex tw-min-h-svh tw-w-full has-[[data-variant=inset]]:tw-bg-sidebar",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

interface SidebarProps extends ComponentProps<"div"> {
  side?: "left" | "right"
  variant?: "sidebar" | "floating" | "inset"
  collapsible?: "offcanvas" | "icon" | "none"
}
const Sidebar = (
  {
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    ref,
    ...props
  }: SidebarProps
) => {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        className={cn(
          "tw-flex tw-h-full tw-w-[--sidebar-width] tw-flex-col tw-bg-sidebar tw-text-sidebar-foreground",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
  if (isMobile) {   // FIXME: it's weird that the original file doesn't apply ref here
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-mobile="true"
          className="tw-w-[--sidebar-width] tw-bg-sidebar tw-p-0 tw-text-sidebar-foreground [&>button]:tw-hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
            } as CSSProperties
          }
          side={side}
        >
          <div className="tw-flex tw-h-full tw-w-full tw-flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      ref={ref}
      className="tw-group tw-peer tw-hidden tw-text-sidebar-foreground md:tw-block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        className={cn(
          "tw-relative tw-h-svh tw-w-[--sidebar-width] tw-bg-transparent tw-transition-[width] tw-duration-200 tw-ease-linear",
          "group-data-[collapsible=offcanvas]:tw-w-0",
          "group-data-[side=right]:tw-rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:tw-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
            : "group-data-[collapsible=icon]:tw-w-[--sidebar-width-icon]"
        )}
      />
      <div
        className={cn(
          "tw-fixed tw-inset-y-0 tw-z-10 tw-hidden tw-h-svh tw-w-[--sidebar-width] tw-transition-[left,right,width] tw-duration-200 tw-ease-linear md:tw-flex",
          side === "left"
            ? "tw-left-0 group-data-[collapsible=offcanvas]:tw-left-[calc(var(--sidebar-width)*-1)]"
            : "tw-right-0 group-data-[collapsible=offcanvas]:tw-right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "tw-p-2 group-data-[collapsible=icon]:tw-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
            : "group-data-[collapsible=icon]:tw-w-[--sidebar-width-icon] group-data-[side=left]:tw-border-r group-data-[side=right]:tw-border-l",
          className
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          className="tw-flex tw-h-full tw-w-full tw-flex-col tw-bg-sidebar group-data-[variant=floating]:tw-rounded-lg group-data-[variant=floating]:tw-border group-data-[variant=floating]:tw-border-sidebar-border group-data-[variant=floating]:tw-shadow"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

interface SidebarTriggerProps extends ComponentProps<typeof Button> { }
const SidebarTrigger = ({ className, onClick, children, ...props }: SidebarTriggerProps) => {
  const { toggleSidebar } = useSidebar()
  return (
    <Button
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("tw-h-7 tw-w-7", className)}
      onClick={(event) => {
        onClick?.(event) // FIXME: what is this?
        toggleSidebar()
      }}
      {...props}
    >
      {children ?? <Icon icon='lucide:panel-left' />}
      <span className="tw-sr-only">Toggle Sidebar</span>
    </Button>
  )
}

interface SidebarRailProps extends ComponentProps<"button"> { }
const SidebarRail = ({ className, children, ...props }: SidebarRailProps) => {
  const { toggleSidebar } = useSidebar()
  return (
    <button
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "tw-absolute tw-inset-y-0 tw-z-20 tw-hidden tw-w-4 tw--translate-x-1/2 tw-transition-all tw-ease-linear after:tw-absolute after:tw-inset-y-0 after:tw-left-1/2 after:tw-w-[2px] hover:after:tw-bg-sidebar-border group-data-[side=left]:tw--right-4 group-data-[side=right]:tw-left-0 sm:tw-flex",
        "[[data-side=left]_&]:tw-cursor-w-resize [[data-side=right]_&]:tw-cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:tw-cursor-e-resize [[data-side=right][data-state=collapsed]_&]:tw-cursor-w-resize",
        "group-data-[collapsible=offcanvas]:tw-translate-x-0 group-data-[collapsible=offcanvas]:after:tw-left-full group-data-[collapsible=offcanvas]:hover:tw-bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:tw--right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:tw--left-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

/**
 * Inset is just certain style of a sidebar that is hard to described using words,
 * but it works like a sidebar is like a base layer of the page, and the other stuff of the page are "the upper" layers.
 * Try compare this visual concept between the default sidebar and the inset sidebar from the different stories.
 *
 * FIXME: when sidebar's variant is inset, the inset content's border radius seems inappropriate.
 */
interface SidebarInsetProps extends ComponentProps<"main"> { }
const SidebarInset = ({ className, children, ...props }: SidebarInsetProps) => {
  return (
    <main
      className={cn(
        "tw-relative tw-flex tw-min-h-svh tw-flex-1 tw-flex-col tw-bg-background",
        "peer-data-[variant=inset]:tw-min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:tw-m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:tw-ml-2 md:peer-data-[variant=inset]:tw-ml-0 md:peer-data-[variant=inset]:tw-rounded-xl md:peer-data-[variant=inset]:tw-shadow",
        className
      )}
      {...props}
    >
      {children}
    </main>
  )
}

interface SidebarInputProps extends ComponentProps<typeof Input> { }
const SidebarInput = ({ className, children, ...props }: SidebarInputProps) => {
  return (
    <Input
      data-sidebar="input"
      className={cn(
        "tw-h-8 tw-w-full tw-bg-background tw-shadow-none focus-visible:tw-ring-2 focus-visible:tw-ring-sidebar-ring",
        className
      )}
      {...props}
    >
      {children}
    </Input>
  )
}

interface SidebarHeaderProps extends ComponentProps<"div"> { }
const SidebarHeader = ({ className, children, ...props }: SidebarHeaderProps) => {
  return (
    <div
      data-sidebar="header"
      className={cn("tw-flex tw-flex-col tw-gap-2 tw-p-2", className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface SidebarFooterProps extends ComponentProps<"div"> { }
const SidebarFooter = ({ className, children, ...props }: SidebarFooterProps) => {
  return (
    <div
      data-sidebar="footer"
      className={cn("tw-flex tw-flex-col tw-gap-2 tw-p-2", className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface SidebarSeparatorProps extends ComponentProps<typeof Separator> { }
const SidebarSeparator = (
  { ref, className, children, ...props }: SidebarSeparatorProps,
) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("tw-w-auto tw-bg-sidebar-border", className)}
      {...props}
    >
      {children}
    </Separator>
  )
}

interface SidebarContentProps extends ComponentProps<"div"> { }
const SidebarContent = ({ className, children, ...props }: SidebarContentProps) => {
  return (
    <div
      data-sidebar="content"
      className={cn(
        "tw-flex tw-min-h-0 tw-flex-1 tw-flex-col tw-gap-2 tw-overflow-auto group-data-[collapsible=icon]:tw-overflow-hidden !tw-relative",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
/**
 * A group of stuff can be a list of several menus,
 * where each menu can have its own items.
 * So, this should give you a sense that, it really depends what's the "group" you defined.
 * A group doesn't have to be just a single menu,
 * and you can have literally everything in a single, giant `SidebarGroup`.
 */
interface SidebarGroupProps extends ComponentProps<"div"> { }
const SidebarGroup = ({ children, className, ...props }: SidebarGroupProps) => {
  return (
    <div
      data-sidebar="group"
      className={cn("tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-p-2 !tw-relative", className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface SidebarGroupLabelProps extends ComponentProps<"div"> {
  asChild?: boolean
}
const SidebarGroupLabel = ({ className, asChild = false, children, ...props }: SidebarGroupLabelProps) => {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-sidebar="group-label"
      className={cn(
        "tw-flex tw-h-8 tw-shrink-0 tw-items-center tw-rounded-md tw-px-2 tw-text-xs tw-font-medium tw-text-sidebar-foreground/70 tw-outline-none tw-ring-sidebar-ring tw-transition-[margin,opa] tw-duration-200 tw-ease-linear focus-visible:tw-ring-2 [&>svg]:tw-size-4 [&>svg]:tw-shrink-0",
        "group-data-[collapsible=icon]:tw--mt-8 group-data-[collapsible=icon]:tw-opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

/**
 * You may pass `title` to show native tooltip.
 */
interface SidebarGroupActionProps extends ComponentProps<"button"> {
  asChild?: boolean
}
const SidebarGroupAction = (
  { children, ref, className, asChild = false, ...props }: SidebarGroupActionProps
) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "tw-absolute tw-right-3 tw-top-3.5 tw-flex tw-aspect-square tw-w-5 tw-items-center tw-justify-center tw-rounded-md tw-p-0 tw-text-sidebar-foreground tw-outline-none tw-ring-sidebar-ring tw-transition-transform hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground focus-visible:tw-ring-2 [&>svg]:tw-size-4 [&>svg]:tw-shrink-0",
        // Increases the hit area of the button on mobile.
        "after:tw-absolute after:tw--inset-2 after:md:tw-hidden",
        "group-data-[collapsible=icon]:tw-hidden",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

/**
 * FIXME:
 * It's not necessary to be always used with `SidebarGroupLabel`.
 * I guess this component is more about providing a stylable anchor using data-*
 */
interface SidebarGroupContentProps extends ComponentProps<"div"> { }
const SidebarGroupContent = ({ children, className, ...props }: SidebarGroupContentProps) => (
  <div
    data-sidebar="group-content"
    className={cn("tw-w-full tw-text-sm !tw-relative", className)}
    {...props}
  >
    {children}
  </div>
)

interface SidebarMenuProps extends ComponentProps<"ul"> { }
const SidebarMenu = ({ ref, className, children, ...props }: SidebarMenuProps) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn("tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-gap-1", className)}
    {...props}
  >
    {children}
  </ul>
)

interface SidebarMenuItemProps extends ComponentProps<"li"> { }
const SidebarMenuItem = ({ ref, className, children, ...props }: SidebarMenuItemProps) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("tw-group/menu-item !tw-relative", className)}
    {...props}
  >
    {children}
  </li>
)

const sidebarMenuButtonVariants = cva(
  "tw-peer/menu-button tw-flex tw-w-full tw-items-center tw-gap-2 tw-overflow-hidden tw-rounded-md tw-p-2 tw-text-left tw-text-sm tw-outline-none tw-ring-sidebar-ring tw-transition-[width,height,padding] hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground focus-visible:tw-ring-2 active:tw-bg-sidebar-accent active:tw-text-sidebar-accent-foreground disabled:tw-pointer-events-none disabled:tw-opacity-50 tw-group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:tw-pointer-events-none aria-disabled:tw-opacity-50 data-[active=true]:tw-bg-sidebar-accent data-[active=true]:tw-font-medium data-[active=true]:tw-text-sidebar-accent-foreground data-[state=open]:hover:tw-bg-sidebar-accent data-[state=open]:hover:tw-text-sidebar-accent-foreground group-data-[collapsible=icon]:tw-!size-8 group-data-[collapsible=icon]:tw-!p-2 [&>span:last-child]:tw-truncate [&>svg]:tw-size-4 [&>svg]:tw-shrink-0",
  {
    variants: {
      variant: {
        default: "hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground",
        outline:
          "tw-bg-background tw-shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground hover:tw-shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "tw-h-8 tw-text-sm",
        sm: "tw-h-7 tw-text-xs",
        lg: "tw-h-12 tw-text-sm group-data-[collapsible=icon]:tw-!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface SidebarMenuButtonProps extends ComponentProps<"button">, VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
  size?: "default" | "sm" | "lg"
  isActive?: boolean
  variant?: "default" | "outline"
  tooltip?: string | ComponentProps<typeof TooltipContent>
}

const SidebarMenuButton = (
  {
    asChild = false,
    size = "default",
    isActive = false,
    variant = "default",
    tooltip,
    className,
    ref,
    children,
    ...props
  }: SidebarMenuButtonProps
) => {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()
  const button = (
    <Comp
      ref={ref}
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Comp>
  )
  if (!tooltip) return button
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }
  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

interface SidebarMenuActionProps extends ComponentProps<"button"> {
  asChild?: boolean
  showOnHover?: boolean
}
const SidebarMenuAction = ({
  children, ref, className, asChild = false, showOnHover = false, ...props }: SidebarMenuActionProps
) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "tw-absolute tw-right-1 tw-top-1.5 tw-flex tw-aspect-square tw-w-5 tw-items-center tw-justify-center tw-rounded-md tw-p-0 tw-text-sidebar-foreground tw-outline-none tw-ring-sidebar-ring tw-transition-transform hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground focus-visible:tw-ring-2 tw-peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:tw-size-4 [&>svg]:tw-shrink-0",
        // Increases the hit area of the button on mobile.
        "after:tw-absolute after:tw--inset-2 after:md:tw-hidden",
        "tw-peer-data-[size=sm]/menu-button:top-1",
        "tw-peer-data-[size=default]/menu-button:top-1.5",
        "tw-peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:tw-hidden",
        showOnHover &&
        "tw-group-focus-within/menu-item:opacity-100 tw-group-hover/menu-item:opacity-100 data-[state=open]:tw-opacity-100 tw-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:tw-opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

interface SidebarMenuBadgeProps extends ComponentProps<"div"> { }
const SidebarMenuBadge = ({ className, children, ...props }: SidebarMenuBadgeProps) => (
  <div
    data-sidebar="menu-badge"
    className={cn(
      "tw-pointer-events-none tw-absolute tw-right-1 tw-flex tw-h-5 tw-min-w-5 tw-select-none tw-items-center tw-justify-center tw-rounded-md tw-px-1 tw-text-xs tw-font-medium tw-tabular-nums tw-text-sidebar-foreground",
      "tw-peer-hover/menu-button:text-sidebar-accent-foreground tw-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
      "tw-peer-data-[size=sm]/menu-button:top-1",
      "tw-peer-data-[size=default]/menu-button:top-1.5",
      "tw-peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:tw-hidden",
      className
    )}
    {...props}
  >
    {children}
  </div>
)

interface SidebarMenuSkeletonProps extends ComponentProps<"div"> {
  showIcon?: boolean
}
const SidebarMenuSkeleton = ({ className, showIcon = false, children, ...props }: SidebarMenuSkeletonProps) => {
  const width = useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, []) // Random width between 50 to 90%.
  return (
    <div
      data-sidebar="menu-skeleton"
      className={cn("tw-flex tw-h-8 tw-items-center tw-gap-2 tw-rounded-md tw-px-2", className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="tw-size-4 tw-rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="tw-h-4 tw-max-w-[--skeleton-width] tw-flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as CSSProperties
        }
      />
    </div>
  )
}

/**
 * When using this component, visually speaking, it doens't need to "look like" a submenu,
 * but in code, to implement a nested menu (eg., 2 levels), use this component.
 */
interface SidebarMenuSubProps extends ComponentProps<"ul"> { }
const SidebarMenuSub = ({ children, ref, className, ...props }: SidebarMenuSubProps) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      "tw-mx-3.5 tw-flex tw-min-w-0 tw-translate-x-px tw-flex-col tw-gap-1 tw-border-l tw-border-sidebar-border tw-px-2.5 tw-py-0.5",
      "group-data-[collapsible=icon]:tw-hidden",
      className
    )}
    {...props}
  >
    {children}
  </ul>
)

interface SidebarMenuSubItemProps extends ComponentProps<"li"> { }
const SidebarMenuSubItem = ({ children, ref, ...props }: SidebarMenuSubItemProps) => <li ref={ref} {...props}>{children}</li>

/**
 * FIXME: why not just use `SidebarMenuButton`?
 */
interface SidebarMenuSubButtonProps extends ComponentProps<"a"> {
  asChild?: boolean
  size?: "sm" | "md"
  isActive?: boolean
  ref?: Ref<HTMLAnchorElement>
}
const SidebarMenuSubButton = (
  { asChild = false, size = "md", isActive, className, ref, children, ...props }: SidebarMenuSubButtonProps
) => {
  const Comp = asChild ? Slot : "a"
  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "tw-flex tw-h-7 tw-min-w-0 tw--translate-x-px tw-items-center tw-gap-2 tw-overflow-hidden tw-rounded-md tw-px-2 tw-text-sidebar-foreground tw-outline-none tw-ring-sidebar-ring hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground focus-visible:tw-ring-2 active:tw-bg-sidebar-accent active:tw-text-sidebar-accent-foreground disabled:tw-pointer-events-none disabled:tw-opacity-50 aria-disabled:tw-pointer-events-none aria-disabled:tw-opacity-50 [&>span:last-child]:tw-truncate [&>svg]:tw-size-4 [&>svg]:tw-shrink-0 [&>svg]:tw-text-sidebar-accent-foreground",
        "data-[active=true]:tw-bg-sidebar-accent data-[active=true]:tw-text-sidebar-accent-foreground",
        size === "sm" && "tw-text-xs",
        size === "md" && "tw-text-sm",
        "group-data-[collapsible=icon]:tw-hidden",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
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
  useSidebar,
}

SidebarProvider.displayName = "SidebarProvider"
Sidebar.displayName = "Sidebar"
SidebarTrigger.displayName = "SidebarTrigger"
SidebarRail.displayName = "SidebarRail"
SidebarContent.displayName = "SidebarContent"
SidebarGroup.displayName = "SidebarGroup"
// if don't use stuff like Collapsible that has sort of trigger and content,
// then we can use below stuff; but we also can combine below stuff with other component's trigger and content
// (eg., https://ui.shadcn.com/docs/components/sidebar#collapsible-sidebargroup)
SidebarGroupLabel.displayName = "SidebarGroupLabel"
SidebarGroupContent.displayName = "SidebarGroupContent"
SidebarGroupAction.displayName = "SidebarGroupAction"

SidebarMenu.displayName = "SidebarMenu"
SidebarMenuItem.displayName = "SidebarMenuItem"
SidebarMenuButton.displayName = "SidebarMenuButton"


SidebarSeparator.displayName = "SidebarSeparator"


SidebarHeader.displayName = "SidebarHeader"
SidebarFooter.displayName = "SidebarFooter"


SidebarInset.displayName = "SidebarInset"
SidebarInput.displayName = "SidebarInput"

SidebarMenuAction.displayName = "SidebarMenuAction"
SidebarMenuBadge.displayName = "SidebarMenuBadge"
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

SidebarMenuSub.displayName = "SidebarMenuSub"
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"
