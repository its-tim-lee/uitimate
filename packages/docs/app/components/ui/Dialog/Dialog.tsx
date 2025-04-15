import React, { Children, createContext, useContext, type ComponentProps } from 'react'
import { Dialog as DialogRoot, DialogPanel as DialogContent, DialogTitle as Title, Description as DialogDescription, DialogBackdrop as DialogOverlay, CloseButton as DialogClose } from '@headlessui/react'
import { tv, type VariantProps } from "tailwind-variants"
import { kebabCase } from 'lodash-es'
import { Icon } from '#/components/ui/Icon/Icon'
import { headingVariants, type HeadingSubtitle, HeadingContext } from '#/components/ui/Heading/Heading'

const dialogVariants = tv({
  slots: {
    root: 'tw:relative tw:z-10 tw:focus:outline-none',
    overlay: "tw:fixed tw:inset-0 tw:bg-black/80",
    content: [
      "tw:min-w-[320px] tw:w-screen tw:h-screen tw:md:h-auto tw:md:max-w-lg tw:space-y-4 tw:p-6",
      "tw:md:rounded-lg tw:bg-background tw:relative tw:dark:md:border",
      "tw:flex tw:flex-col",
      "tw:fixed tw:top-2/4 tw:left-2/4 tw:translate-x-[-50%] tw:translate-y-[-50%]"
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
const { root, overlay, content, action, closeButton } = dialogVariants()
const { root: headingRoot, title, subtitle } = headingVariants()

type DialogProps = Omit<ComponentProps<typeof DialogRoot>, 'children' | 'onClose'> & {
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
      data-tag={kebabCase(Dialog.displayName)}
    >
      <DialogOverlay className={overlay()} />
      <DialogContent className={content({ className })}>
        <DialogCtx.Provider value={{ modal }}>
          {children}
        </DialogCtx.Provider>
      </DialogContent>
    </DialogRoot>
  )
}

const DialogCtx = createContext<{ modal?: boolean }>({ modal: false })

type DialogActionProps = ComponentProps<'div'>
const DialogAction = ({
  className,
  ...props
}: DialogActionProps) => (
  <div
    className={action({ className })}
    data-tag={kebabCase(DialogAction.displayName)}
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
      typeof children === 'string' || // this is when passing a literal string
      typeof (children as any)?.type === 'string' // this is when passing a native element (eg., span)
    ) {
      content = <DialogTitle>{children}</DialogTitle> // Normalization
    } else {
      // Possible cases (should all be extreme rare):
      // 1. <DialogSubtitle>
      // 2. <DialogTitle> or <DialogSubtitle> in another element
      throw new Error('Invalid children provided to DialogHeading')
    }
  }
  return (
    <HeadingContext.Provider value={{ size }}>
      <div
        {...props}
        className={headingRoot({ size, className })}
        data-tag={kebabCase(DialogHeading.displayName)}
      >
        {content}
      </div>
    </HeadingContext.Provider>
  )
}

type DialogTitleProps = ComponentProps<typeof Title>
const DialogTitle = ({ className, children, ...props }: DialogTitleProps) => {
  const { size } = useContext(HeadingContext);
  const { modal } = useContext(DialogCtx);
  return (
    <Title
      className={title({ size, className })}
      data-tag={kebabCase(DialogTitle.displayName)}
      {...props}
    >
      {typeof children === 'function' ? children : (
        <>
          {children}
          {!modal && (
            <DialogClose
              data-tag={kebabCase(DialogClose.displayName)}
              className={closeButton()}
            >
              <Icon icon="lucide:x" className="tw:h-4 tw:w-4" />
              <span className="tw:sr-only">Close</span>
            </DialogClose>
          )}
        </>
      )}
    </Title>
  )
}

type DialogSubtitleProps = ComponentProps<typeof HeadingSubtitle>
const DialogSubtitle = ({ className, children, ...props }: DialogSubtitleProps) => {
  const { size } = useContext(HeadingContext);
  return (
    <DialogDescription
      className={subtitle({ size, className })}
      data-tag={kebabCase(DialogSubtitle.displayName)}
      {...props}
    >
      {children}
    </DialogDescription>
  )
}

Dialog.displayName = 'Dialog'
DialogAction.displayName = 'DialogAction'
DialogHeading.displayName = 'DialogHeading'
DialogTitle.displayName = 'DialogTitle'
DialogSubtitle.displayName = 'DialogSubtitle'
DialogClose.displayName = 'DialogClose'
DialogContent.displayName = 'DialogContent'
DialogOverlay.displayName = 'DialogOverlay'

namespace Type {
  export type Dialog = DialogProps;
  export type DialogAction = DialogActionProps;
  export type DialogHeading = DialogHeadingProps;
  export type DialogTitle = DialogTitleProps;
  export type DialogSubtitle = DialogSubtitleProps;
}

export {
  type Type,
  dialogVariants,
  Dialog,
  DialogAction,
  DialogHeading,
  DialogTitle,
  DialogSubtitle,
  DialogClose,
  /**
   * These should be rare to be used, but exported anyway in case there're some edge cases.
   */
  DialogContent,
  DialogOverlay, // This is not suppose to be used directly, cuz it has been included by default in `Dialog`
  DialogDescription, // This is not suppose to be used directly; in most of time, just use `DialogSubtitle`
}

