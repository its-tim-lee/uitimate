import { type ComponentProps, type ElementRef, type HTMLAttributes } from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/lib/utils"

const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerClose = DrawerPrimitive.Close
const DrawerDescription = DrawerPrimitive.Description
const DrawerPortal = DrawerPrimitive.Portal

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)

const DrawerOverlay = ({ className, ...props }: ComponentProps<typeof DrawerPrimitive.Overlay>) => (
  <DrawerPrimitive.Overlay
    className={cn("tw-fixed tw-inset-0 tw-z-50 tw-bg-black/80", className)}
    {...props}
  />
)

const DrawerContent = ({ className, children, ...props }: ComponentProps<typeof DrawerPrimitive.Content>) => (
  <DrawerPortal>
    <DrawerPrimitive.Overlay />
    <DrawerPrimitive.Content
      className={cn(
        "tw-fixed tw-inset-x-0 tw-bottom-0 tw-z-50 tw-mt-24 tw-flex tw-h-auto tw-flex-col tw-rounded-t-[10px] tw-border tw-bg-background",
        className
      )}
      {...props}
    >
      <div className="tw-mx-auto tw-mt-4 tw-h-2 tw-w-[100px] tw-rounded-full tw-bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
)

const DrawerHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("tw-grid tw-gap-1.5 tw-p-4 tw-text-center sm:tw-text-left", className)}
    {...props}
  />
)

const DrawerFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("tw-mt-auto tw-flex tw-flex-col tw-gap-2 tw-p-4", className)}
    {...props}
  />
)

const DrawerTitle = ({ className, ...props }: ComponentProps<typeof DrawerPrimitive.Title>) => (
  <DrawerPrimitive.Title
    className={cn(
      "tw-text-lg tw-font-semibold tw-leading-none tw-tracking-tight",
      className
    )}
    {...props}
  />
)

Drawer.displayName = 'Drawer'
DrawerOverlay.displayName = 'DrawerOverlay'
DrawerContent.displayName = 'DrawerContent'
DrawerHeader.displayName = "DrawerHeader"
DrawerFooter.displayName = "DrawerFooter"
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

export {
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
