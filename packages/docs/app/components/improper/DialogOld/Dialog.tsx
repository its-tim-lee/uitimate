/**
 * #2025-01-12
 *
 * Below are the differneces between Dialog and AlertDialog:
 * - AlertDialog is meant to be used in "modal" situation
 * - AlertDialog has 2 more components: AlertDialogCancel and AlertDialogAction
 * - AlertDialog doesn't have DialogClose
 */

import * as React from "react"
import { Root, Trigger, Portal, Close, Overlay, Content, Title, Description } from "@radix-ui/react-dialog"
import { tv } from "tailwind-variants"
import { Icon } from "../../ui/Icon/Icon"

export { type DialogProps } from "@radix-ui/react-dialog"

export const Dialog = Root

export const DialogTrigger = Trigger

export const DialogPortal = Portal

export const DialogClose = Close

export const dialogVariants = tv({
  slots: {
    overlay: [
      "tw:fixed tw:inset-0 tw:z-50 tw:bg-black/80",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
      "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0"
    ],
    content: [
      "tw:fixed tw:left-[50%] tw:top-[50%] tw:z-50 tw:grid tw:w-full tw:max-w-lg tw:translate-x-[-50%] tw:translate-y-[-50%] tw:gap-4 tw:border tw:bg-background tw:p-6 tw:shadow-lg tw:duration-200 tw:rounded-lg tw:min-w-[320px]",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
      "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
      "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
      "tw:data-[state=closed]:slide-out-to-left-1/2 tw:data-[state=closed]:slide-out-to-top-[48%]",
      "tw:data-[state=open]:slide-in-from-left-1/2 tw:data-[state=open]:slide-in-from-top-[48%]"
    ],
    closeButton: [
      "tw:absolute tw:right-4 tw:top-4 tw:rounded-sm tw:opacity-70 tw:ring-offset-background tw:transition-opacity",
      "tw:hover:opacity-100",
      "tw:focus:outline-hidden tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2",
      "tw:disabled:pointer-events-none",
      "tw:data-[state=open]:bg-accent tw:data-[state=open]:text-muted-foreground"
    ],
    footer: [
      "tw:flex tw:flex-col-reverse tw:sm:flex-row tw:sm:justify-end",
      "tw:space-y-reverse tw:space-y-2 tw:sm:space-x-2 tw:sm:space-y-0"
    ],
    title: [
      "tw:text-lg tw:font-semibold tw:leading-none tw:tracking-tight"
    ],
    description: [
      "tw:text-sm tw:text-muted-foreground"
    ]
  }
})

export type DialogOverlayProps = React.ComponentProps<typeof Overlay>;
export type DialogContentProps = React.ComponentProps<typeof Content>;
export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;
export type DialogTitleProps = React.ComponentProps<typeof Title>;
export type DialogDescriptionProps = React.ComponentProps<typeof Description>;

const { overlay, content, closeButton, footer, title, description } = dialogVariants();

export const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => (
  <Overlay
    className={overlay({ className })}
    {...props}
  />
)

export const DialogContent = ({ className, children, ...props }: DialogContentProps) => (
  <DialogPortal>
    <DialogOverlay />
    <Content
      className={content({ className })}
      {...props}
    >
      {children}
      <DialogClose className={closeButton()}>
        <Icon icon="lucide:x" className="tw:h-4 tw:w-4" />
        <span className="tw:sr-only">Close</span>
      </DialogClose>
    </Content>
  </DialogPortal>
)

/**
 * This's currently meant to be used with some buttons
 */
export const DialogFooter = ({
  className,
  ...props
}: DialogFooterProps) => (
  <div
    className={footer({ className })}
    {...props}
  />
)

/**
 * TBD: doc: we can't just use our <Heading/> to replace the duplication components like DialogTitle and DialogDescription,
 * simply because the code design of Dialog from Radix.
 */
export const DialogTitle = ({ className, ...props }: DialogTitleProps) => (
  <Title
    className={title({ className })}
    {...props}
  />
)

export const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => (
  <Description
    className={description({ className })}
    {...props}
  />
)

DialogOverlay.displayName = Overlay.displayName
DialogFooter.displayName = "DialogFooter"
DialogContent.displayName = Content.displayName
DialogTitle.displayName = Title.displayName
DialogDescription.displayName = Description.displayName
