import { Children, useContext, type ComponentProps } from "react"
import { Drawer as Primitive } from "@uitimate/lib-drawer"
import { tv, type VariantProps } from "tailwind-variants"
import { headingVariants, HeadingContext } from '#/components/ui/Heading/Heading.tsx'
import { casing } from "#/helpers/utils.ts"

const drawerVariants = tv({
  slots: {
    overlay: [
      "tw:fixed tw:inset-0 tw:z-50 tw:bg-black/80",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
      "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0"
    ],
    content: [
      "tw:group/drawer-content tw:bg-background tw:fixed tw:flex tw:h-auto tw:flex-col",
      "tw:z-100", // make sure it's above the overlay, see #2504151
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

const DrawerTrigger = Primitive.Trigger
const DrawerClose = Primitive.Close
const DrawerHandle = Primitive.Handle
const DrawerPortal = Primitive.Portal

type DrawerOverlayProps = ComponentProps<typeof Primitive.Overlay>
const DrawerOverlay = ({
  className,
  ...props
}: DrawerOverlayProps) => (
  <Primitive.Overlay
    data-tag={casing.kebabCase(DrawerOverlay.displayName)}
    className={overlay({ className })}
    {...props}
  />
)

type DrawerContentProps = ComponentProps<typeof DrawerContent>
const DrawerContent = Primitive.Content

type DrawerProps = ComponentProps<typeof Primitive.Root> & { className?: string, asChild?: boolean }
const Drawer = ({
  className,
  children,
  asChild = false,
  ...props
}: DrawerProps) => {
  // Only pass the relevant props to DrawerContent
  const contentProps = Object.entries(props).reduce((acc, [key, value]) => {
    // Pass any data-* attributes and non-event handler props that are safe
    if (key.startsWith('data-') ||
      (typeof value !== 'function' && !key.startsWith('on'))) {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, any>);

  return (
    <Primitive.Root {...props}>
      <DrawerPortal>
        <DrawerContent
          data-tag={casing.kebabCase(DrawerContent.displayName!)}
          className={content({ className })}
          asChild={asChild}
          /**
           * Unfortunately, `{...props as any}` can't be used here for simplicity,
           * although it will not have any kind of physical issue, but it can throw an error due to
           * receive an appropriate prop
           */
          {...contentProps}
        >
          <div data-tag='handle' className={handle()} />
          {children}
        </DrawerContent>
        {/*
        #2504151
        the only reason to make this as the Content's next sibling is just allowing
        the consumer to hide the overlay via Tailwind, so that we don't need to create another prop just for this matter.
      */}
        <DrawerOverlay data-tag={casing.kebabCase(DrawerOverlay.displayName)} />
      </DrawerPortal>
    </Primitive.Root>
  );
}

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
    // 1. only <DrawerTitle> or <DrawerSubtitle> is specified
    // 2. <DrawerTitle> or <DrawerSubtitle> in another element
    else { throw new Error('You just use this component in a wrong way, check the source code.') }
  }
  return (
    <HeadingContext.Provider value={{ size }}>
      <div
        {...props}
        data-tag={casing.kebabCase(DrawerHeading.displayName)}
        className={headingRoot({ size, className })}
      >
        {content}
      </div>
    </HeadingContext.Provider>
  )
}

type DrawerTitleProps = ComponentProps<typeof Primitive.Title>
const DrawerTitle = ({
  className,
  ...props
}: DrawerTitleProps) => {
  const { size } = useContext(HeadingContext);
  return <Primitive.Title
    data-tag={casing.kebabCase(DrawerTitle.displayName)}
    className={title({ size, className })}
    {...props}
  />
}

type DrawerSubtitleProps = ComponentProps<typeof Primitive.Description>
const DrawerSubtitle = ({
  className,
  ...props
}: DrawerSubtitleProps) => {
  const { size } = useContext(HeadingContext);
  return <Primitive.Description
    data-tag={casing.kebabCase(DrawerSubtitle.displayName)}
    className={subtitle({ size, className })}
    {...props}
  />
}
DrawerTrigger.displayName = "DrawerTrigger"
DrawerContent.displayName = "DrawerContent"
DrawerHeading.displayName = "DrawerHeading"
DrawerTitle.displayName = "DrawerTitle"
DrawerSubtitle.displayName = "DrawerSubtitle"
DrawerClose.displayName = "DrawerClose"
DrawerOverlay.displayName = "DrawerOverlay"
DrawerHandle.displayName = "DrawerHandle"

namespace Type {
  export type Drawer = DrawerProps;
  export type DrawerContent = DrawerContentProps;
  export type DrawerHeading = DrawerHeadingProps;
  export type DrawerTitle = DrawerTitleProps;
  export type DrawerSubtitle = DrawerSubtitleProps;
  export type DrawerOverlay = DrawerOverlayProps;
}

export * from "@uitimate/lib-drawer";
export {
  type Type,
  drawerVariants,
  Drawer,
  DrawerHeading,
  DrawerTitle,
  DrawerSubtitle,
  /**
   * These should be rare to be used, but exported anyway in case there're some edge cases.
  */
  DrawerTrigger, // Not recommended to be used; instead, always control the open state manually
  DrawerClose, // Not recommended to be used; instead, always control the open state manually
  DrawerOverlay,
  DrawerHandle,
  DrawerPortal,
  DrawerContent,
}