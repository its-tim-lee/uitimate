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
      "tw:fixed tw:inset-0 tw:z-50 tw:bg-black/80 tw- tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
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
        "tw:fixed tw:left-[50%] tw:top-[50%] tw:z-50 tw:grid tw:w-full tw:max-w-lg tw:translate-x-[-50%] tw:translate-y-[-50%] tw:gap-4 tw:border tw:bg-background tw:p-6 tw:shadow-lg tw:duration-200 tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0 tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95 tw:data-[state=closed]:slide-out-to-left-1/2 tw:data-[state=closed]:slide-out-to-top-[48%] tw:data-[state=open]:slide-in-from-left-1/2 tw:data-[state=open]:slide-in-from-top-[48%] tw:rounded-lg",
        "tw:min-w-[320px]",
        className
      )}
      {...props}
    >
      {children}
      <DialogClose className="tw:absolute tw:right-4 tw:top-4 tw:rounded-sm tw:opacity-70 tw:ring-offset-background tw:transition-opacity tw:hover:opacity-100 tw:focus:outline-hidden tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2 tw:disabled:pointer-events-none tw:data-[state=open]:bg-accent tw:data-[state=open]:text-muted-foreground">
        <Icon icon="lucide:x" className="tw:h-4 tw:w-4" />
        <span className="tw:sr-only">Close</span>
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
      "tw:flex tw:flex-col-reverse tw:sm:flex-row tw:sm:justify-end",
      "tw:space-y-reverse tw:space-y-2 tw:sm:space-x-2 tw:sm:space-y-0",
      className
    )}
    {...props}
  />
)

const DialogTitle = ({ className, ...props }: React.ComponentProps<typeof Title>) => (
  <Title
    className={cn(
      "tw:text-lg tw:font-semibold tw:leading-none tw:tracking-tight",
      className
    )}
    {...props}
  />
)

const DialogDescription = ({ className, ...props }: React.ComponentProps<typeof Description>) => (
  <Description
    className={cn("tw:text-sm tw:text-muted-foreground", className)}
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
