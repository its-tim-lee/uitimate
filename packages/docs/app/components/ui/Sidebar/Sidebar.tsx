import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ComponentProps } from "react"
import hotkeys from "hotkeys-js"
import { useIsMobile } from "#/helpers/hooks/use-mobile"
import { tv } from "tailwind-variants"
import { Drawer } from "#/components/ui/Drawer/Drawer.tsx"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7

type TSidebarContext = {
  isMobile: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  variant?: "flat" | "floating" | "inset";
  shortcut?: string;
  desktopSidebarDirection: "left" | "right";
  mobileSidebarDirection: "left" | "right" | "top" | "bottom";
  enableMobileSidebar: boolean;
}
const SidebarContext = createContext<TSidebarContext | null>(null)

const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarLayout.")
  }
  return context
}

type SidebarLayoutProps = ComponentProps<typeof Drawer> & ComponentProps<"div"> & {
  /**
    * This just creates visual effect of a sidebar among the vertical direction out of the monitor screen,
    * where (below only explains the major visual concept)
    * - flat: sidebar is at the same level of other app content
    * - floating: sidebar is higher than other app content; think about now the sidebar is like a mountain
    * - inset: sidebar is lower than other app content; think about now the sidebar is like a ground
  */
  variant?: "flat" | "floating" | "inset"
  open?: boolean
  /**
   * Specifies the positions for desktop sidebar and mobile sidebar.
   *
   * Side Note:
   * Having `desktopSidebarDirection` to "top" and "bottom" doesn't make sense,
   * (this is more like design concept that is not necessary related to technical implementation)
   * cuz you'd always have a better way to design what you want to achieve.
   *
   * Requiring the consumer to provide this turns out can reduce lots of code complexity.
   * Since in some UI designs, the mobile sidebar may not be appearing from the bottom,
   * that implies that people need to customize the direction of the mobile sidebar in such cases,
   * and since that kind of customization can happen, it makes sense to force the consumer always provide the direction,
   * but not just for the mobile, also for the desktop.
   */
  directions: [
    desktopSidebarDirection: "left" | "right",
    mobileSidebarDirection?: "left" | "right" | "top" | "bottom"
  ]
  onOpenChange?: (open: boolean) => void
  /**
   * Making sense to be a variable, cuz there're situations that an app can have more than one sidebar,
   * and it might need to have different shortcuts for controlling independently.
   */
  shortcut?: string
  /**
   * Control whether the desktop sidebar is initially open.
   */
  defaultOpen?: boolean
  /**
   * Control whether to use Drawer for sidebar in mobile mode
   * When false, the sidebar will be rendered the same way as desktop even on mobile
   *
   * Side Note:
   * The usage case is that there're some kinds of apps that only need to be a desktop app,
   * so they don't care about the mobile sidebar at all.
   */
  enableMobileSidebar?: boolean
}

/**
 * WARN: 3 React Effects implemented below are tricky, but this is how we make the usage of the sidebar smooth in any situation
 */
const SidebarLayout = ({
  className,
  // There can have the usage cases like (see #20250324), the consumers don't want to control the open state out of the sidebar,
  // but still want to use shortcut to toggle the state, and they also want the sidebar is open in the initial state.
  // Note that this will never be used for the embedded Radix drawer (aka. mobile sidebar),
  // cuz in 99% of time, the mobile sidebar will NOT be opened initially.
  defaultOpen = false,
  open,
  onOpenChange,
  variant = "flat",
  shortcut = 'ctrl+b, command+b',
  directions,
  enableMobileSidebar = true,
  ...props
}: SidebarLayoutProps) => {
  const isMobile = useIsMobile()
  const isControlled = open !== undefined
  const isInitialRender = useRef(true)
  const [isDesktopOpen, setIsDesktopOpen] = useState(isControlled ? !!open : defaultOpen)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const prevIsMobileRef = useRef(isMobile)
  const [desktopSidebarDirection, mobileSidebarDirection = "bottom"] = directions
  const runMobileSidebarIndependently = isMobile && enableMobileSidebar
  const isOpen = runMobileSidebarIndependently ? isMobileOpen : isDesktopOpen
  const setIsOpen = useCallback((e: boolean) => {
    runMobileSidebarIndependently ? setIsMobileOpen(e) : setIsDesktopOpen(e)
    onOpenChange?.(e)
  }, [runMobileSidebarIndependently, onOpenChange])

  useEffect(() => {
    const prevIsMobile = prevIsMobileRef.current
    prevIsMobileRef.current = isMobile
    // This only get triggered when just switched from desktop to mobile
    // At this moment, since mobile sidebar should always be closed initially,
    // but the single opening state control from the outside `open` can be other than `false`,
    // and if that's the case, we need to force the outside state control
    // (ie., the one controls this component's `open`) to be `false`
    if (runMobileSidebarIndependently && !prevIsMobile) return (setIsMobileOpen(false), onOpenChange?.(false))
    if (isControlled) {
      // the open state on desktop will always get controlled from the outside...
      if (!runMobileSidebarIndependently) setIsDesktopOpen(open)
      // but on mobile, it'll only be controlled from the outside AFTER the first render
      else if (!isInitialRender.current) setIsMobileOpen(open)
    }
    isInitialRender.current = false
  }, [isMobile, open, runMobileSidebarIndependently])

  useEffect(() => {
    hotkeys(shortcut, { scope: 'all' }, (e: KeyboardEvent) => (e.preventDefault(), setIsOpen(!isOpen)))
    return () => hotkeys.unbind(shortcut)
  }, [shortcut, isOpen, setIsOpen])

  useEffect(() => { if (runMobileSidebarIndependently) onOpenChange?.(false) }, [runMobileSidebarIndependently])

  const ctx = useMemo<TSidebarContext>(() => ({
    isMobile,
    isOpen,
    setIsOpen,
    variant,
    desktopSidebarDirection,
    mobileSidebarDirection,
    enableMobileSidebar
  }), [isMobile, isOpen, setIsOpen, variant, desktopSidebarDirection, mobileSidebarDirection, enableMobileSidebar])

  return (
    <SidebarContext.Provider value={ctx}>
      <div
        className={sidebarLayoutVariants({ sidebarVariant: variant, className })}
        data-variant={variant}
        data-toggle={isOpen ? "expanded" : "collapsed"}
        data-direction={desktopSidebarDirection}
        data-tag="sidebar-layout"
        {...props}
      />
    </SidebarContext.Provider>
  )
}
const sidebarLayoutVariants = tv({
  base: "tw:relative tw:flex tw:h-full tw:w-full tw:overflow-hidden",
  variants: {
    sidebarVariant: {
      flat: "tw:bg-background",
      floating: "tw:bg-sidebar",
      inset: "tw:bg-sidebar"
    }
  },
})

type SidebarProps = ComponentProps<"div">
const Sidebar = ({ className, children, ...props }: SidebarProps) => {
  const {
    isMobile,
    isOpen,
    setIsOpen,
    variant,
    desktopSidebarDirection,
    mobileSidebarDirection,
    enableMobileSidebar,
    ...drawerProps
  } = useSidebar()
  const runMobileSidebarIndependently = isMobile && enableMobileSidebar
  const { base, inner, drawer } = sidebarVariants({
    visible: isOpen,
    variant,
    desktopSidebarDirection,
    mobileSidebarDirection
  })
  if (runMobileSidebarIndependently) {
    return (
      <Drawer
        open={isOpen}
        onOpenChange={setIsOpen}
        direction={mobileSidebarDirection}
        className={drawer({ className })}
        data-sidebar
        data-variant={variant}
        data-toggle={isOpen ? "expanded" : "collapsed"}
        {...drawerProps}
      >
        {children}
      </Drawer>
    )
  }
  return (
    <div
      className={base({ className })}
      data-sidebar
      data-tag="sidebar"
      data-variant={variant}
      data-toggle={isOpen ? "expanded" : "collapsed"}
      data-direction={desktopSidebarDirection}
      {...props}
    >
      {/* This div is literally just for styling floating-variant, otherwise we can merge this to the parent div */}
      <div className={inner()}>{children}</div>
    </div>
  )
}
/**
 * Below is more like a compromise, cuz in React, unlike Vue, the update of the component can be slightly asynchronized,
 * so that the consumer can't use `useIsMobile` in using with our sidebar component,
 * cuz it can violate React's "Single Source of Truth" principle in some cases,
 * and it'd cause some bugs.
 *
 * eg.,
 * Without below compound components, providing different UI in different breakpoints from the consumer side
 * using `useIsMobile` will only lead to errors.
 *
 */
Sidebar.Mobile = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useSidebar();
  return isMobile ? children : null;
};
Sidebar.Desktop = ({ children }: { children: React.ReactNode }) => {
  const { isMobile } = useSidebar();
  return !isMobile ? children : null;
};

const sidebarVariants = tv({
  slots: {
    // `h-svh is a partial workaround to make user no needs to specify the specific height of the Sidebar.
    // This is important, cuz without this, remember setting an exact height for the sidebar is actually a tedious work,
    // in fact, before doing that, people will usually just see an "unexpected height" issue first, and wondering why,
    // and such "Wondering" (and the later debugging, of course) is really really bad in terms of DX.
    base: "tw:h-full tw:text-sidebar-foreground tw:h-svh",
    inner: "tw:flex tw:flex-col tw:h-full tw:w-full tw:relative",
    drawer: "tw:bg-background tw:text-sidebar-foreground tw:gap-4 tw:items-center"
  },
  variants: {
    mobileSidebarDirection: {
      left: { drawer: "tw:h-dvh!" },
      right: { drawer: "tw:h-dvh!" },
      top: { drawer: "tw:w-dvw!" },
      bottom: { drawer: "tw:w-dvw!" }
    },
    desktopSidebarDirection: { left: {}, right: {} },
    visible: {
      true: { base: 'tw:md:block tw:block' },
      false: { base: 'tw:hidden' }
    },
    variant: {
      inset: { base: "tw:p-2", inner: "tw:bg-sidebar" },
      flat: { inner: "tw:bg-background" },
      floating: {
        base: "tw:p-2",
        inner: "tw:bg-background tw:border-sidebar-border tw:rounded-lg tw:border tw:shadow-sm"
      },
    }
  },
  compoundVariants: [
    {
      variant: "flat",
      desktopSidebarDirection: "left",
      class: { base: "tw:border-r" }
    },
    {
      variant: "flat",
      desktopSidebarDirection: "right",
      class: { base: "tw:border-l" }
    }
  ],
})

type SidebarInsetProps = ComponentProps<"main">
const SidebarInset = ({ className, ...props }: SidebarInsetProps) => {
  const { variant: sidebarVariant, isOpen: isSidebarOpen, desktopSidebarDirection } = useSidebar()
  return (
    <main
      data-tag="sidebar-inset"
      className={sidebarInsetVariants({ sidebarVariant, isSidebarOpen, desktopSidebarDirection, className })}
      {...props}
    />
  )
}
const sidebarInsetVariants = tv({
  base: "tw:relative tw:flex tw:flex-1 tw:flex-col",
  variants: {
    sidebarVariant: {
      flat: "tw:bg-background",
      floating: "tw:md:bg-sidebar",
      inset: "tw:bg-background tw:md:m-2 tw:md:shadow-sm tw:md:rounded-xl"
    },
    isSidebarOpen: { true: '', false: '' },
    desktopSidebarDirection: { left: '', right: '' }
  },
  compoundVariants: [
    {
      sidebarVariant: "inset",
      isSidebarOpen: true,
      desktopSidebarDirection: "left",
      class: "tw:ml-0"
    },
    {
      sidebarVariant: "inset",
      isSidebarOpen: true,
      desktopSidebarDirection: "right",
      class: "tw:mr-0"
    },
    {
      sidebarVariant: "inset",
      isSidebarOpen: false,
      desktopSidebarDirection: "left",
      class: "tw:ml-2"
    },
    {
      sidebarVariant: "inset",
      isSidebarOpen: false,
      desktopSidebarDirection: "right",
      class: "tw:mr-2"
    }
  ]
})

SidebarLayout.displayName = "SidebarLayout"
Sidebar.displayName = "Sidebar"
SidebarInset.displayName = "SidebarInset"

export {
  sidebarLayoutVariants,
  sidebarVariants,
  sidebarInsetVariants,
  Sidebar,
  SidebarInset,
  SidebarLayout,
  useSidebar,
  type TSidebarContext,
  type SidebarLayoutProps,
  type SidebarProps,
  type SidebarInsetProps
}
