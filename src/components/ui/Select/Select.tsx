import { type ComponentProps } from "react"
import {
  Root as Select,
  Group as SelectGroup,
  Value as SelectValue,
  Trigger,
  ScrollUpButton,
  ScrollDownButton,
  Content,
  Icon as SelectIcon,
  Portal,
  Viewport,
  Label,
  Item,
  ItemIndicator,
  ItemText,
  Separator
} from "@radix-ui/react-select"
import { cn } from "@/lib/utils"
import { Icon } from "../Icon/Icon"

const SelectTrigger = (
  { className, children, ...props }: ComponentProps<typeof Trigger>
) => (
  <Trigger
    className={cn(
      "tw:flex tw:h-9 tw:w-full tw:items-center tw:justify-between tw:whitespace-nowrap tw:rounded-md tw:border tw:border-input tw:bg-transparent tw:px-3 tw:py-2 tw:text-sm tw:shadow-sm tw:ring-offset-background tw:placeholder:text-muted-foreground tw:focus:outline-hidden tw:focus:ring-1 tw:focus:ring-ring tw:disabled:cursor-not-allowed tw:disabled:opacity-50 tw:[&>span]:line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <Icon icon="lucide:chevron-down" className="tw:h-4 tw:w-4 tw:opacity-50" />
  </Trigger>
)

const SelectScrollUpButton = ({ className, ...props }: ComponentProps<typeof ScrollUpButton>) => (
  <ScrollUpButton
    className={cn(
      "tw:flex tw:cursor-default tw:items-center tw:justify-center tw:py-1",
      className
    )}
    {...props}
  >
    <Icon icon="lucide:chevron-up" className="tw:h-4 tw:w-4" />
  </ScrollUpButton>
)

const SelectScrollDownButton = ({ className, ...props }: ComponentProps<typeof ScrollDownButton>) => (
  <ScrollDownButton
    className={cn(
      "tw:flex tw:cursor-default tw:items-center tw:justify-center tw:py-1",
      className
    )}
    {...props}
  >
    <Icon icon="lucide:chevron-down" className="tw:h-4 tw:w-4" />
  </ScrollDownButton>
)

const SelectContent = (
  { className, children, position = "popper", ...props }: ComponentProps<typeof Content>
) => (
  <Portal>
    <Content
      className={cn(
        "tw:relative tw:z-50 tw:max-h-96 tw:min-w-[8rem] tw:overflow-hidden tw:rounded-md tw:border tw:bg-popover tw:text-popover-foreground tw:shadow-md tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0 tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95 tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2 tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
        "tw:data-[side=bottom]:translate-y-1 tw:data-[side=left]:-translate-x-1 tw:data-[side=right]:translate-x-1 tw:data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <Viewport
        className={cn(
          "tw:p-1",
          position === "popper" &&
          "tw:h-(--radix-select-trigger-height) tw:w-full tw:min-w-(--radix-select-trigger-width)"
        )}
      >
        {children}
      </Viewport>
      <SelectScrollDownButton />
    </Content>
  </Portal>
)

const SelectLabel = (
  { className, ...props }: ComponentProps<typeof Label>
) => (
  <Label
    className={cn("tw:px-2 tw:py-1.5 tw:text-sm tw:font-semibold", className)}
    {...props}
  />
)

const SelectItem = (
  { className, children, ...props }: ComponentProps<typeof Item>
) => (
  <Item
    className={cn(
      "tw:relative tw:flex tw:w-full tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:py-1.5 tw:pl-2 tw:pr-8 tw:text-sm tw:outline-hidden tw:focus:bg-accent tw:focus:text-accent-foreground tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50",
      className
    )}
    {...props}
  >
    <span className="tw:absolute tw:right-2 tw:flex tw:h-3.5 tw:w-3.5 tw:items-center tw:justify-center">
      <ItemIndicator>
        <Icon icon="lucide:check" className="tw:h-4 tw:w-4" />
      </ItemIndicator>
    </span>
    <ItemText>{children}</ItemText>
  </Item>
)

const SelectSeparator = (
  { className, ...props }: ComponentProps<typeof Separator>
) => (
  <Separator
    className={cn("tw:-mx-1 tw:my-1 tw:h-px tw:bg-muted", className)}
    {...props}
  />
)

SelectTrigger.displayName = Trigger.displayName
SelectScrollUpButton.displayName = ScrollUpButton.displayName
SelectScrollDownButton.displayName = ScrollDownButton.displayName
SelectContent.displayName = Content.displayName
SelectLabel.displayName = Label.displayName
SelectItem.displayName = Item.displayName
SelectSeparator.displayName = Separator.displayName

export {
  Select,
  SelectGroup,
  SelectIcon,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  // TBD: doc: in most of time, you don't need to worry these, cuz it has been included in the normal usage
  SelectScrollUpButton,
  SelectScrollDownButton,
}
