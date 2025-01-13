Below are coding guidelines when coding:

- The rules of specific UI components development

  > You may be asked to develop some UI components. Currently, they're: Popover, Dialog. All of them have been registered as Custom Component in Builder Console. And all of them are wrappers of the corresponding Radix UI's components, so props for each one still obey  Below are the development rule for each one:

  - Popover
  It has the components as shown below:
  ```
  import { type ComponentProps } from "react"
  import * as PopoverPrimitive from "@radix-ui/react-popover"
  import { cn } from "@/lib/utils"

  export const Popover = PopoverPrimitive.Root
  export const PopoverTrigger = PopoverPrimitive.Trigger
  export const PopoverAnchor = PopoverPrimitive.Anchor

  /**
  * - By default, the popover content will be rendered into <body> (ie., due to <Portal>)
  * -
  */
  export const PopoverContent = ({ className, align = "center", sideOffset = 4, ...props }: ComponentProps<typeof PopoverPrimitive.Content>) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "tw-z-50 tw-w-72 tw-rounded-md tw-border tw-bg-popover tw-p-4 tw-text-popover-foreground tw-shadow-md tw-outline-none data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
  PopoverContent.displayName = PopoverPrimitive.Content.displayName
  ```
  Since it's based on Radix, so when you construct a Popover, you should follow the same rules as Radix's


