import { type ComponentProps } from "react"
import {
  Root,
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
import { tv } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon.tsx"

const selectVariants = tv({
  slots: {
    trigger: [
      // h-10, shadow-xs aligns with the design of the input when they put together
      "tw:flex tw:h-10 tw:w-full tw:items-center tw:justify-between tw:whitespace-nowrap",
      "tw:rounded-md tw:border tw:border-input tw:bg-transparent",
      "tw:px-3 tw:py-2 tw:text-sm tw:shadow-xs",
      "tw:ring-offset-background tw:placeholder:text-muted-foreground",
      "tw:focus:outline-hidden tw:focus:ring-1 tw:focus:ring-ring",
      "tw:disabled:cursor-not-allowed tw:disabled:opacity-50",
      "tw:[&>span]:line-clamp-1"
    ],
    scrollButton: "tw:flex tw:cursor-default tw:items-center tw:justify-center tw:py-1",
    content: [
      "tw:relative tw:z-50 tw:max-h-96 tw:min-w-[8rem]",
      "tw:overflow-hidden tw:rounded-md tw:border tw:bg-popover tw:text-popover-foreground tw:shadow-md",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
      "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
      "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
      "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2",
      "tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2"
    ],
    viewport: "tw:p-1",
    label: "tw:px-2 tw:py-1.5 tw:text-sm tw:font-semibold",
    item: [
      "tw:relative tw:flex tw:w-full tw:cursor-default tw:select-none tw:items-center",
      "tw:rounded-sm tw:py-1.5 tw:pl-2 tw:pr-8 tw:text-sm tw:outline-hidden",
      "tw:focus:bg-accent tw:focus:text-accent-foreground",
      "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50"
    ],
    itemIndicatorWrapper: "tw:absolute tw:right-2 tw:flex tw:h-3.5 tw:w-3.5 tw:items-center tw:justify-center",
    separator: "tw:-mx-1 tw:my-1 tw:h-px tw:bg-muted"
  },
  variants: {
    position: {
      popper: {
        content: [
          "tw:data-[side=bottom]:translate-y-1 tw:data-[side=left]:-translate-x-1",
          "tw:data-[side=right]:translate-x-1 tw:data-[side=top]:-translate-y-1"
        ],
        viewport: "tw:h-(--radix-select-trigger-height) tw:w-full tw:min-w-(--radix-select-trigger-width)"
      },
      "item-aligned": {}
    }
  },
  defaultVariants: {
    position: "popper"
  }
})

const { trigger, scrollButton, content, viewport, label, item, itemIndicatorWrapper, separator } = selectVariants()

type SelectProps = ComponentProps<typeof Root> & {
  onChange?: (value: string) => void
}

const Select = ({ onChange, onValueChange, ...props }: SelectProps) => {
  return (
    <Root
      onValueChange={v => { // see #20250318
        onChange?.(v)
        onValueChange?.(v)
      }}
      {...props}
    />
  )
}

type SelectTriggerProps = ComponentProps<typeof Trigger>
const SelectTrigger = ({
  className,
  children,
  ...props
}: SelectTriggerProps) => (
  <Trigger
    className={trigger({ className })}
    {...props}
  >
    {children}
    <Icon icon="lucide:chevron-down" className="tw:h-4 tw:w-4 tw:opacity-50" />
  </Trigger>
)

type SelectScrollUpButtonProps = ComponentProps<typeof ScrollUpButton>
const SelectScrollUpButton = ({
  className,
  ...props
}: SelectScrollUpButtonProps) => (
  <ScrollUpButton
    className={scrollButton({ className })}
    {...props}
  >
    <Icon icon="lucide:chevron-up" className="tw:h-4 tw:w-4" />
  </ScrollUpButton>
)

type SelectScrollDownButtonProps = ComponentProps<typeof ScrollDownButton>
const SelectScrollDownButton = ({
  className,
  ...props
}: SelectScrollDownButtonProps) => (
  <ScrollDownButton
    className={scrollButton({ className })}
    {...props}
  >
    <Icon icon="lucide:chevron-down" className="tw:h-4 tw:w-4" />
  </ScrollDownButton>
)

type SelectContentProps = ComponentProps<typeof Content>
const SelectContent = ({
  className,
  children,
  position = "popper",
  ...props
}: SelectContentProps) => (
  <Portal>
    <Content
      className={content({ position, className })}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <Viewport
        className={viewport({ position })}
      >
        {children}
      </Viewport>
      <SelectScrollDownButton />
    </Content>
  </Portal>
)

type SelectLabelProps = ComponentProps<typeof Label>
const SelectLabel = ({
  className,
  ...props
}: SelectLabelProps) => (
  <Label
    className={label({ className })}
    {...props}
  />
)

type SelectItemProps = ComponentProps<typeof Item>
const SelectItem = ({
  className,
  children,
  ...props
}: SelectItemProps) => (
  <Item
    className={item({ className })}
    {...props}
  >
    <span className={itemIndicatorWrapper()}>
      <ItemIndicator>
        <Icon icon="lucide:check" className="tw:h-4 tw:w-4" />
      </ItemIndicator>
    </span>
    <ItemText>{children}</ItemText>
  </Item>
)

type SelectSeparatorProps = ComponentProps<typeof Separator>
const SelectSeparator = ({
  className,
  ...props
}: SelectSeparatorProps) => (
  <Separator
    className={separator({ className })}
    {...props}
  />
)

Select.displayName = "Select"
SelectGroup.displayName = "SelectGroup"
SelectValue.displayName = "SelectValue"
SelectTrigger.displayName = "SelectTrigger"
SelectContent.displayName = "SelectContent"
SelectLabel.displayName = "SelectLabel"
SelectItem.displayName = "SelectItem"
SelectSeparator.displayName = "SelectSeparator"
SelectScrollUpButton.displayName = "SelectScrollUpButton"
SelectScrollDownButton.displayName = "SelectScrollDownButton"

export {
  selectVariants,
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  // TBD: doc: in most of time, you don't need to worry these, cuz it has been included in the normal usage
  SelectScrollUpButton,
  SelectScrollDownButton,
  type SelectTriggerProps,
  type SelectContentProps,
  type SelectLabelProps,
  type SelectItemProps,
  type SelectSeparatorProps,
  type SelectScrollUpButtonProps,
  type SelectScrollDownButtonProps
}
