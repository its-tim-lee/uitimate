import { Root, Item } from "@radix-ui/react-toggle-group"
import React, { type ComponentProps } from "react"
import { type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/primitive/Toggle/Toggle.tsx"

const Context = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
})

const ToggleGroup = (
  { className, variant, size, children, ...props }: ComponentProps<typeof Root> & VariantProps<typeof toggleVariants>,
) => (
  <Root
    className={cn("tw-flex tw-items-center tw-justify-center tw-gap-1", className)}
    {...props}
  >
    <Context.Provider value={{ variant, size }}>
      {children}
    </Context.Provider>
  </Root>
)

const ToggleGroupItem = (
  { className, children, variant, size, ...props }: ComponentProps<typeof Item> & VariantProps<typeof toggleVariants>,
) => {
  const ctx = React.useContext(Context)

  return (
    <Item
      className={cn(
        toggleVariants({
          variant: ctx.variant || variant,
          size: ctx.size || size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </Item>
  )
}

ToggleGroup.displayName = Root.displayName
ToggleGroupItem.displayName = Item.displayName

export { ToggleGroup, ToggleGroupItem }
