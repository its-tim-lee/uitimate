import React, { Children, createContext, useContext, type ComponentProps } from 'react'
import { Dialog as DialogRoot, DialogPanel as DialogContent, DialogTitle as Title, Description as DialogDescription, DialogBackdrop as DialogOverlay, CloseButton as DialogClose } from '@headlessui/react'
import { tv, type VariantProps } from "tailwind-variants"
import { Icon } from '@/components/ui/Icon/Icon'
import { headingSubtitleVariants, headingTitleVariants, headingVariants, HeadingSubtitle, HeadingTitle, TextHeaderCtx } from '@/components/ui/Heading/Heading'
/**
 * TODO: doing nice transition just like Shadcn's Dialog
 */
export const variants = tv({
  slots: {
    root: 'tw:relative tw:z-10 tw:focus:outline-none',
    overlay: "tw:fixed tw:inset-0 tw:bg-black/80",
    content: [
      "tw:min-w-[320px] tw:w-screen tw:h-screen tw:md:h-auto tw:md:max-w-lg tw:space-y-4 tw:p-6",
      "tw:md:rounded-lg tw:bg-background tw:relative tw:md:border",
      "tw:flex tw:flex-col"
    ],
    closeButton: [
      "tw:absolute tw:right-0 tw:top-0 tw:rounded-sm tw:opacity-70 tw:ring-offset-background tw:transition-opacity",
      "tw:hover:opacity-100",
      "tw:focus:outline-hidden tw:focus:ring-2 tw:focus:ring-ring tw:focus:ring-offset-2",
      "tw:disabled:pointer-events-none",
    ],
    action: [
      "tw:mt-auto",
      "tw:flex tw:flex-col-reverse tw:sm:flex-row tw:sm:justify-end",
      "tw:space-y-reverse tw:space-y-2 tw:sm:space-x-2 tw:sm:space-y-0"
    ],
  }
})
const { root, overlay, content, action, closeButton } = variants()

/**
 * TBD: doc: where the `className` and props will be applied
 */
type DialogProps = Omit<React.ComponentProps<typeof DialogRoot>, 'children' | 'onClose'> & {
  children: React.ReactNode;
  modal?: boolean;
  onClose?: () => void;
};
const Dialog = ({ className, children, modal, onClose, ...props }: DialogProps) => {
  return (
    <DialogRoot
      {...props}
      className={root()}
      role={modal ? 'alertdialog' : 'dialog'}
      onClose={modal ? () => { } : onClose ?? (() => { })}
    >
      <DialogOverlay className={overlay()} />
      <div className="tw:fixed tw:inset-0 tw:flex tw:items-center tw:justify-center">
        <DialogContent className={content({ className })}>
          <DialogCtx.Provider value={{ modal }}>
            {children}
          </DialogCtx.Provider>
        </DialogContent>
      </div>
    </DialogRoot>
  )
}

const DialogCtx = createContext<{ modal?: boolean }>({ modal: false })

/**
 * TBD: doc: This is meant to be used with some CTAs such as buttons due to this is a common pattern when using a dialog
 */
type DialogActionProps = React.ComponentProps<'div'>
const DialogAction = ({
  className,
  ...props
}: DialogActionProps) => (
  <div
    className={action({ className })}
    {...props}
  />
)

/**
 * TBD: doc:
 * - describe why not just allow user to use Heading directly:
 *   cuz that way we can't easy to use the native <Title> and <Description> in the source code
 * - ARIA expectation: to keep accessibility friendly and keep the code clean,
 *   the balance is we'll only apply `aria-describedby` in `DialogSubtitle` and it'd be in certain style.
 */
type DialogHeadingProps = ComponentProps<'div'> & VariantProps<typeof headingVariants>
const DialogHeading = ({ size = 'h4', children, className, ...props }: DialogHeadingProps) => {

  let content = children
  if (Children.count(children) === 1) {
    if (
      typeof children === 'string' || // when passing literall a string
      typeof (children as any)?.type === 'string' // a native element (eg., span)
    ) {
      content = <DialogTitle>{children}</DialogTitle> // Normalization
    }
    // Possible cases (should all be extreme rare):
    // 1. <DialogSubtitle>
    // 2. <DialogTitle> or <DialogSubtitle> in another element
    else { throw new Error('You just use this component in a wrong way, check the source code.') }
  }
  return (
    <TextHeaderCtx.Provider value={{ size }}>
      <div
        {...props}
        className={headingVariants({ size, className })}
      >
        {content}
      </div>
    </TextHeaderCtx.Provider>
  )
}

type DialogTitleProps = React.ComponentProps<typeof Title>
const DialogTitle = ({ className, children, ...props }: DialogTitleProps) => {
  const { size } = useContext(TextHeaderCtx);
  const { modal } = useContext(DialogCtx);
  return (
    <>
      <Title className={headingTitleVariants({ size, className })} {...props}>{children}</Title>
      {!modal && (
        <DialogClose className={closeButton()}>
          <Icon icon="lucide:x" className="tw:h-4 tw:w-4" />
          <span className="tw:sr-only">Close</span>
        </DialogClose>
      )}
    </>
  )
}

type DialogSubtitleProps = React.ComponentProps<typeof HeadingSubtitle>
const DialogSubtitle = ({ className, children, ...props }: DialogSubtitleProps) => {
  const { size } = useContext(TextHeaderCtx);
  return (
    <DialogDescription
      className={headingSubtitleVariants({ size, className })}
      {...props}>
      {children}
    </DialogDescription>
  )
}

export {
  Dialog,
  DialogContent,
  DialogClose,
  DialogAction,
  DialogHeading,
  DialogTitle,
  DialogSubtitle,
  DialogDescription, // This is not suppose to be used directly; in most of time, just use `DialogSubtitle`
  DialogOverlay, // This is not suppose to be used necessary, cuz it has been included by default in `Dialog`
  type DialogProps,
  type DialogTitleProps,
  type DialogActionProps,
  type DialogHeadingProps,
  type DialogSubtitleProps
}

Dialog.displayName = 'Dialog'
DialogContent.displayName = 'DialogContent'
DialogAction.displayName = 'DialogAction'
DialogClose.displayName = 'DialogClose'
DialogOverlay.displayName = 'DialogOverlay'