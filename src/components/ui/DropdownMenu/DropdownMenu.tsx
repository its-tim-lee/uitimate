import { type ComponentProps } from "react"
import {
  Root as DropdownMenu,
  Trigger as DropdownMenuTrigger,
  Group as DropdownMenuGroup,
  Portal as DropdownMenuPortal,
  Sub as DropdownMenuSub,
  RadioGroup as DropdownMenuRadioGroup,
  SubTrigger,
  SubContent,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  ItemIndicator
} from "@radix-ui/react-dropdown-menu"
import { tv } from "tailwind-variants"
import { Icon } from "@/components/ui/Icon/Icon.tsx"

const dropdownMenuVariants = tv({
  slots: {
    subTrigger: [
      "tw:flex tw:cursor-default tw:gap-2 tw:select-none tw:items-center tw:rounded-sm tw:px-2 tw:py-1.5 tw:text-sm tw:outline-hidden",
      "tw:focus:bg-accent tw:data-[state=open]:bg-accent",
      "tw:[&_svg]:pointer-events-none tw:[&_svg]:size-4 tw:[&_svg]:shrink-0"
    ],
    subContent: [
      "tw:z-50 tw:min-w-[8rem] tw:overflow-hidden tw:rounded-md tw:border tw:bg-popover tw:p-1 tw:text-popover-foreground tw:shadow-lg",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
      "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
      "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
      "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2",
      "tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2"
    ],
    content: [
      "tw:z-50 tw:min-w-[8rem] tw:overflow-hidden tw:rounded-md tw:border tw:bg-popover tw:p-1 tw:text-popover-foreground tw:shadow-md",
      "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
      "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
      "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2",
      "tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2"
    ],
    item: [
      "tw:relative tw:flex tw:cursor-default tw:select-none tw:items-center tw:gap-2 tw:rounded-sm tw:px-2 tw:py-1.5 tw:text-sm tw:outline-hidden tw:transition-colors",
      "tw:focus:bg-accent tw:focus:text-accent-foreground",
      "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50",
      "tw:[&>svg]:size-4 tw:[&>svg]:shrink-0"
    ],
    checkboxItem: [
      "tw:relative tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:py-1.5 tw:pl-8 tw:pr-2 tw:text-sm tw:outline-hidden tw:transition-colors",
      "tw:focus:bg-accent tw:focus:text-accent-foreground",
      "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50"
    ],
    radioItem: [
      "tw:relative tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:py-1.5 tw:pl-8 tw:pr-2 tw:text-sm tw:outline-hidden tw:transition-colors",
      "tw:focus:bg-accent tw:focus:text-accent-foreground",
      "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50"
    ],
    label: "tw:px-2 tw:py-1.5 tw:text-sm tw:font-semibold",
    separator: "tw:-mx-1 tw:my-1 tw:h-px tw:bg-muted",
    shortcut: "tw:ml-auto tw:text-xs tw:tracking-widest tw:opacity-60"
  }
})
const {
  subTrigger,
  subContent,
  content,
  item,
  checkboxItem,
  radioItem,
  label,
  separator,
  shortcut
} = dropdownMenuVariants()


type DropdownMenuSubTriggerProps = ComponentProps<typeof SubTrigger>
const DropdownMenuSubTrigger = ({ className, children, ...props }: DropdownMenuSubTriggerProps) => (
  <SubTrigger
    className={subTrigger({ className })}
    {...props}
  >
    {children}
    <Icon icon="lucide:chevron-right" className="tw:ml-auto" />
  </SubTrigger>
)

type DropdownMenuSubContentProps = ComponentProps<typeof SubContent>
const DropdownMenuSubContent = ({
  className,
  ...props
}: DropdownMenuSubContentProps) => (
  <SubContent
    className={subContent({ className })}
    {...props}
  />
)

type DropdownMenuContentProps = ComponentProps<typeof Content>
const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) => (
  <DropdownMenuPortal>
    <Content
      sideOffset={sideOffset}
      className={content({ className })}
      {...props}
    />
  </DropdownMenuPortal>
)

type DropdownMenuItemProps = ComponentProps<typeof Item>
const DropdownMenuItem = ({
  className,
  ...props
}: DropdownMenuItemProps) => (
  <Item
    className={item({ className })}
    {...props}
  />
)

type DropdownMenuCheckboxItemProps = ComponentProps<typeof CheckboxItem>
const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) => (
  <CheckboxItem
    className={checkboxItem({ className })}
    checked={checked}
    {...props}
  >
    <span className="tw:absolute tw:left-2 tw:flex tw:h-3.5 tw:w-3.5 tw:items-center tw:justify-center">
      <ItemIndicator><Icon icon="lucide:check" className="tw:h-4 tw:w-4" /></ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
)

type DropdownMenuRadioItemProps = ComponentProps<typeof RadioItem>
const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) => (
  <RadioItem
    className={radioItem({ className })}
    {...props}
  >
    <span className="tw:absolute tw:left-2 tw:flex tw:h-3.5 tw:w-3.5 tw:items-center tw:justify-center">
      <ItemIndicator><Icon icon="lucide:circle" className="tw:h-2 tw:w-2 tw:fill-current" /></ItemIndicator>
    </span>
    {children}
  </RadioItem>
)

type DropdownMenuLabelProps = ComponentProps<typeof Label>
const DropdownMenuLabel = ({
  className,
  ...props
}: DropdownMenuLabelProps) => (
  <Label
    className={label({ className })}
    {...props}
  />
)

type DropdownMenuSeparatorProps = ComponentProps<typeof Separator>
const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuSeparatorProps) => (
  <Separator
    className={separator({ className })}
    {...props}
  />
)

type DropdownMenuShortcutProps = ComponentProps<'span'>
const DropdownMenuShortcut = ({
  className,
  ...props
}: DropdownMenuShortcutProps) => (
  <span
    className={shortcut({ className })}
    {...props}
  />
)

DropdownMenu.displayName = "DropdownMenu"
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"
DropdownMenuContent.displayName = "DropdownMenuContent"
DropdownMenuItem.displayName = "DropdownMenuItem"
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"
DropdownMenuLabel.displayName = "DropdownMenuLabel"
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"
DropdownMenuGroup.displayName = "DropdownMenuGroup"
DropdownMenuPortal.displayName = "DropdownMenuPortal"
DropdownMenuSub.displayName = "DropdownMenuSub"
DropdownMenuSubContent.displayName = "DropdownMenuSubContent"
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger"
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup"

export {
  dropdownMenuVariants,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  type DropdownMenuSubTriggerProps,
  type DropdownMenuSubContentProps,
  type DropdownMenuContentProps,
  type DropdownMenuItemProps,
  type DropdownMenuCheckboxItemProps,
  type DropdownMenuRadioItemProps,
  type DropdownMenuLabelProps,
  type DropdownMenuSeparatorProps,
  type DropdownMenuShortcutProps
}