import { type ComponentProps } from "react"
import { Drawer as DrawerPrimitive } from "vaul"
import { tv, type VariantProps } from "tailwind-variants"
import { headingVariants, type HeadingSubtitleProps, HeadingContext } from '@/components/ui/Heading/Heading.tsx'
import { Children, useContext } from "react"

const drawerVariants = tv({
  slots: {
    overlay: [
      "tw:fixed tw:inset-0 tw:z-50 tw:bg-black/80",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
      "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0"
    ],
    content: [
      "tw:group/drawer-content tw:bg-background tw:fixed tw:z-50 tw:flex tw:h-auto tw:flex-col",

      "tw:data-[vaul-drawer-direction=top]:inset-x-0 tw:data-[vaul-drawer-direction=top]:top-0",
      "tw:data-[vaul-drawer-direction=top]:mb-24 tw:data-[vaul-drawer-direction=top]:max-h-[80vh]",
      "tw:data-[vaul-drawer-direction=top]:rounded-b-lg",

      "tw:data-[vaul-drawer-direction=bottom]:inset-x-0 tw:data-[vaul-drawer-direction=bottom]:bottom-0",
      "tw:data-[vaul-drawer-direction=bottom]:mt-24 tw:data-[vaul-drawer-direction=bottom]:max-h-[80vh]",
      "tw:data-[vaul-drawer-direction=bottom]:rounded-t-lg",

      "tw:data-[vaul-drawer-direction=right]:inset-y-0 tw:data-[vaul-drawer-direction=right]:right-0",
      "tw:data-[vaul-drawer-direction=right]:w-3/4 tw:data-[vaul-drawer-direction=right]:sm:max-w-sm",

      "tw:data-[vaul-drawer-direction=left]:inset-y-0 tw:data-[vaul-drawer-direction=left]:left-0",
      "tw:data-[vaul-drawer-direction=left]:w-3/4 tw:data-[vaul-drawer-direction=left]:sm:max-w-sm"
    ],
    handle: "tw:bg-muted tw:mx-auto tw:mt-4 tw:hidden tw:h-2 tw:w-[100px] tw:shrink-0 tw:rounded-full tw:group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
  }
})

const { overlay, content, handle } = drawerVariants()
const { root: headingRoot, title, subtitle } = headingVariants()

const Drawer = DrawerPrimitive.Root
const DrawerTrigger = DrawerPrimitive.Trigger
const DrawerClose = DrawerPrimitive.Close
const DrawerHandle = DrawerPrimitive.Handle
const DrawerPortal = DrawerPrimitive.Portal

type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>
const DrawerOverlay = ({
  className,
  ...props
}: DrawerOverlayProps) => (
  <DrawerPrimitive.Overlay
    className={overlay({ className })}
    {...props}
  />
)

type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>
const DrawerContent = ({
  className,
  children,
  ...props
}: DrawerContentProps) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      className={content({ className })}
      {...props}
    >
      <div data-tag='handle' className={handle()} />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
)

// TBD: doc: describe why not just allow user to use Heading directly
type DrawerHeadingProps = ComponentProps<'div'> & VariantProps<typeof headingVariants>
const DrawerHeading = ({ size = 'h4', children, className, ...props }: DrawerHeadingProps) => {
  let content = children
  if (Children.count(children) === 1) {
    if (
      typeof children === 'string' || // when passing literall a string
      typeof (children as any)?.type === 'string' // a native element (eg., span)
    ) {
      content = <DrawerTitle>{children}</DrawerTitle> // Normalization
    }
    // Possible cases (should all be extreme rare):
    // 1. <DrawerDescription>
    // 2. <DrawerTitle> or <DrawerDescription> in another element
    else { throw new Error('You just use this component in a wrong way, check the source code.') }
  }
  return (
    <HeadingContext.Provider value={{ size }}>
      <div
        {...props}
        className={headingRoot({ size, className })}
      >
        {content}
      </div>
    </HeadingContext.Provider>
  )
}

type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>
const DrawerTitle = ({
  className,
  ...props
}: DrawerTitleProps) => {
  const { size } = useContext(HeadingContext);
  return <DrawerPrimitive.Title className={title({ size, className })} {...props} />
}

type DrawerDescriptionProps = ComponentProps<typeof DrawerPrimitive.Description>
const DrawerDescription = ({
  className,
  ...props
}: DrawerDescriptionProps) => {
  const { size } = useContext(HeadingContext);
  return <DrawerPrimitive.Description className={subtitle({ size, className })} {...props} />
}

DrawerTrigger.displayName = "DrawerTrigger"
DrawerClose.displayName = "DrawerClose"
DrawerContent.displayName = "DrawerContent"
DrawerTitle.displayName = "DrawerTitle"
DrawerOverlay.displayName = "DrawerOverlay"
DrawerDescription.displayName = "DrawerDescription"
DrawerHandle.displayName = "DrawerHandle"
DrawerHeading.displayName = "DrawerHeading"

export {
  drawerVariants,
  Drawer,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerOverlay,
  DrawerDescription,
  DrawerHandle,
  DrawerPortal,
  DrawerHeading,
  type DrawerContentProps,
  type DrawerDescriptionProps,
  type DrawerHeadingProps,
  type DrawerOverlayProps,
  type DrawerTitleProps
}
