import { type ComponentProps } from "react"
import {
  Root,
  Group as SelectGroup,
  Value as SelectValue,
  Trigger,
  ScrollUpButton,
  ScrollDownButton,
  Content,
  Portal,
  Viewport,
  Label,
  Item,
  ItemIndicator,
  ItemText,
  Separator
} from "@radix-ui/react-select"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { cn } from "@/lib/utils"
import { Label as GeneralLabel } from "~/src/components/ui/Label/Label.tsx"

const SelectTrigger = (
  { className, children, ...props }: ComponentProps<typeof Trigger>
) => (
  <Trigger
    className={cn(
      "tw-flex tw-h-9 tw-w-full tw-items-center tw-justify-between tw-whitespace-nowrap tw-rounded-md tw-border tw-border-input tw-bg-transparent tw-px-3 tw-py-2 tw-text-sm tw-shadow-sm tw-ring-offset-background placeholder:tw-text-muted-foreground focus:tw-outline-none focus:tw-ring-1 focus:tw-ring-ring disabled:tw-cursor-not-allowed disabled:tw-opacity-50 [&>span]:tw-line-clamp-1",
      className
    )}
    {...props}
  >
    {children}
    <Icon icon="lucide:chevron-down" className="tw-h-4 tw-w-4 tw-opacity-50" />
  </Trigger>
)

const SelectScrollUpButton = ({ className, ...props }: ComponentProps<typeof ScrollUpButton>) => (
  <ScrollUpButton
    className={cn(
      "tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",
      className
    )}
    {...props}
  >
    <Icon icon="lucide:chevron-up" className="tw-h-4 tw-w-4" />
  </ScrollUpButton>
)

const SelectScrollDownButton = ({ className, ...props }: ComponentProps<typeof ScrollDownButton>) => (
  <ScrollDownButton
    className={cn(
      "tw-flex tw-cursor-default tw-items-center tw-justify-center tw-py-1",
      className
    )}
    {...props}
  >
    <Icon icon="lucide:chevron-down" className="tw-h-4 tw-w-4" />
  </ScrollDownButton>
)

const SelectContent = (
  { className, children, position = "popper", ...props }: ComponentProps<typeof Content>
) => (
  <Portal>
    <Content
      className={cn(
        "tw-relative tw-z-50 tw-max-h-96 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-text-popover-foreground tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:tw-translate-y-1 data-[side=left]:tw--translate-x-1 data-[side=right]:tw-translate-x-1 data-[side=top]:tw--translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <Viewport
        className={cn(
          "tw-p-1",
          position === "popper" &&
            "tw-h-[var(--radix-select-trigger-height)] tw-w-full tw-min-w-[var(--radix-select-trigger-width)]"
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
    className={cn("tw-px-2 tw-py-1.5 tw-text-sm tw-font-semibold", className)}
    {...props}
  />
)

const SelectItem = (
  { className, children, ...props }: ComponentProps<typeof Item>
) => (
  <Item
    className={cn(
      "tw-relative tw-flex tw-w-full tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-2 tw-pr-8 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      className
    )}
    {...props}
  >
    <span className="tw-absolute tw-right-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <ItemIndicator>
        <Icon icon="lucide:check" className="tw-h-4 tw-w-4" />
      </ItemIndicator>
    </span>
    <ItemText>{children}</ItemText>
  </Item>
)

const SelectSeparator = (
  { className, ...props }: ComponentProps<typeof Separator>
) => (
  <Separator
    className={cn("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted", className)}
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

const Select = ({ className, label, description, ...props }: SelectProps) => {
  return (label || description) ? (
    <div className={cn("tw-flex tw-flex-col tw-space-y-2", className)}>
      {label && <GeneralLabel className="tw-text-sm tw-font-medium tw-leading-none">{label}</GeneralLabel>}
      <Root {...props}/>
      {description && <p className="tw-text-sm tw-text-muted-foreground">{description}</p>}
    </div>
  ) : <Root {...props}/>
}

type SelectProps = ComponentProps<typeof Root> & { label?: string, description?: string, className?: string }

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
