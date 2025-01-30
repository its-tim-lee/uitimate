import * as React from "react"
import { Root, Trigger, Portal, Close, Overlay, Content, Title, Description } from "@radix-ui/react-dialog"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { cn } from "@/lib/utils"

const Dialog = Root

const DialogTrigger = Trigger

const DialogPortal = Portal

const DialogClose = Close

const DialogOverlay = ({ className, ...props }: React.ComponentProps<typeof Overlay>) => (
  <Overlay
    className={cn(
      "tw-fixed tw-inset-0 tw-z-50 tw-bg-black/80 tw- data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0",
      className
    )}
    {...props}
  />
)

const DialogContent = ({ className, children, ...props }: React.ComponentProps<typeof Content>) => (
  <DialogPortal>
    <DialogOverlay />
    <Content
      className={cn(
        "tw-fixed tw-left-[50%] tw-top-[50%] tw-z-50 tw-grid tw-w-full tw-max-w-lg tw-translate-x-[-50%] tw-translate-y-[-50%] tw-gap-4 tw-border tw-bg-background tw-p-6 tw-shadow-lg tw-duration-200 data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[state=closed]:tw-slide-out-to-left-1/2 data-[state=closed]:tw-slide-out-to-top-[48%] data-[state=open]:tw-slide-in-from-left-1/2 data-[state=open]:tw-slide-in-from-top-[48%] tw-rounded-lg",
        "tw-min-w-[320px]",
        className
      )}
      {...props}
    >
      {children}
      <DialogClose className="tw-absolute tw-right-4 tw-top-4 tw-rounded-sm tw-opacity-70 tw-ring-offset-background tw-transition-opacity hover:tw-opacity-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-ring focus:tw-ring-offset-2 disabled:tw-pointer-events-none data-[state=open]:tw-bg-accent data-[state=open]:tw-text-muted-foreground">
        <Icon icon="lucide:x" className="tw-h-4 tw-w-4" />
        <span className="tw-sr-only">Close</span>
      </DialogClose>
    </Content>
  </DialogPortal>
)

/**
 * This's currently meant to be used with some buttons
 */
const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tw-flex tw-flex-col-reverse sm:tw-flex-row sm:tw-justify-end",
      "tw-space-y-reverse tw-space-y-2 sm:tw-space-x-2 sm:tw-space-y-0",
      className
    )}
    {...props}
  />
)

const DialogTitle = ({ className, ...props }: React.ComponentProps<typeof Title>) => (
  <Title
    className={cn(
      "tw-text-lg tw-font-semibold tw-leading-none tw-tracking-tight",
      className
    )}
    {...props}
  />
)

const DialogDescription = ({ className, ...props }: React.ComponentProps<typeof Description>) => (
  <Description
    className={cn("tw-text-sm tw-text-muted-foreground", className)}
    {...props}
  />
)

DialogOverlay.displayName = Overlay.displayName
DialogFooter.displayName = "DialogFooter"
DialogContent.displayName = Content.displayName
DialogTitle.displayName = Title.displayName
DialogDescription.displayName = Description.displayName

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
