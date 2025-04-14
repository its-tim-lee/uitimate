import type { ReactNode, ComponentProps, HTMLAttributes } from "react";
import { Root as AlertDialog, Trigger as AlertDialogTrigger, Portal as AlertDialogPortal, Overlay, Content, Title, Description, Action, Cancel } from "@radix-ui/react-alert-dialog"
import { cn } from "#/helpers"
import { buttonVariants } from "~/app/components/improper/Button/Button"

const AlertDialogOverlay = ({ className, ...props }: ComponentProps<typeof Overlay>) => (
  <Overlay
    className={cn(
      "tw:fixed tw:inset-0 tw:z-50 tw:bg-black/80 tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
)

const AlertDialogContent = ({ className, children, ...props }: ComponentProps<typeof Content>) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <Content
      className={cn(
        "tw:fixed tw:left-[50%] tw:top-[50%] tw:z-50 tw:grid tw:w-full tw:max-w-lg tw:translate-x-[-50%] tw:translate-y-[-50%] tw:gap-4 tw:border tw:bg-background tw:p-6 tw:shadow-lg tw:duration-200 tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0 tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95 tw:data-[state=closed]:slide-out-to-left-1/2 tw:data-[state=closed]:slide-out-to-top-[48%] tw:data-[state=open]:slide-in-from-left-1/2 tw:data-[state=open]:slide-in-from-top-[48%] tw:rounded-lg",
        "tw:min-w-[320px]",
        className
      )}
      {...props}
    >
      {children}
    </Content>
  </AlertDialogPortal>
)

const AlertDialogTitle = ({ className, ...props }: ComponentProps<typeof Title>) => (
  <Title
    className={cn(
      "tw:text-lg tw:font-semibold tw:leading-none tw:tracking-tight",
      className
    )}
    {...props}
  />
)

const AlertDialogDescription = ({ className, ...props }: ComponentProps<typeof Description>) => (
  <Description
    className={cn("tw:text-sm tw:text-muted-foreground", className)}
    {...props}
  />
)

const AlertDialogAction = ({ className, ...props }: ComponentProps<typeof Action>) => (
  <Action
    className={cn(buttonVariants(), className)}
    {...props}
  />
)

const AlertDialogCancel = ({ className, ...props }: ComponentProps<typeof Cancel>) => (
  <Cancel
    className={cn(
      buttonVariants({ variant: "outline" }),
      "tw:mt-2 tw:sm:mt-0",
      className
    )}
    {...props}
  />
)

/**
 * This's currently meant to be used with some buttons
 */
const AlertDialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "tw:flex tw:flex-col-reverse tw:sm:flex-row tw:sm:justify-end",
      "tw:space-y-reverse tw:space-y-2 tw:sm:space-x-2 tw:sm:space-y-0",
      className
    )}
    {...props}
  />
)

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

AlertDialogOverlay.displayName = Overlay.displayName
AlertDialogContent.displayName = Content.displayName
AlertDialogTitle.displayName = Title.displayName
AlertDialogDescription.displayName = Description.displayName
AlertDialogAction.displayName = Action.displayName
AlertDialogCancel.displayName = Cancel.displayName
AlertDialogFooter.displayName = "AlertDialogFooter"
