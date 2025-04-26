import { type ComponentProps } from "react"
import {
  Root as DropdownMenu,
  Trigger,
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
  ItemIndicator,
  type DropdownMenuProps,
  type DropdownMenuTriggerProps,
  type DropdownMenuPortalProps,
  type DropdownMenuSubProps,
  type DropdownMenuGroupProps,
  type DropdownMenuSubTriggerProps,
  type DropdownMenuSubContentProps,
  type DropdownMenuContentProps,
  type DropdownMenuItemProps,
  type DropdownMenuCheckboxItemProps,
  type DropdownMenuRadioItemProps,
  type DropdownMenuLabelProps,
  type DropdownMenuSeparatorProps,
  type DropdownMenuRadioGroupProps,
} from "@uitimate/lib-dropdown-menu"
import { tv } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import { casing } from "#/helpers/utils.ts"

const dropdownMenuVariants = tv({
  slots: {
    subTrigger: [
      "tw:flex tw:cursor-default tw:gap-2 tw:select-none tw:justify-between tw:items-center tw:rounded-sm tw:px-2 tw:py-1.5 tw:text-sm tw:outline-hidden",
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


const DropdownMenuSubTrigger = ({ className, children, ...props }: DropdownMenuSubTriggerProps) => (
  <SubTrigger
    data-tag={casing.kebabCase(DropdownMenuSubTrigger.displayName)}
    className={subTrigger({ className })}
    {...props}
  >
    {children}
    <Icon icon="lucide:chevron-right" className="tw:ml-auto" />
  </SubTrigger>
)

const DropdownMenuSubContent = ({
  className,
  ...props
}: DropdownMenuSubContentProps) => (
  <SubContent
    data-tag={casing.kebabCase(DropdownMenuSubContent.displayName)}
    className={subContent({ className })}
    {...props}
  />
)

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: DropdownMenuContentProps) => (
  <DropdownMenuPortal>
    <Content
      data-tag={casing.kebabCase(DropdownMenuContent.displayName)}
      sideOffset={sideOffset}
      className={content({ className })}
      {...props}
    />
  </DropdownMenuPortal>
)

const DropdownMenuItem = ({
  className,
  ...props
}: DropdownMenuItemProps) => (
  <Item
    data-tag={casing.kebabCase(DropdownMenuItem.displayName)}
    className={item({ className })}
    {...props}
  />
)

const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemProps) => (
  <CheckboxItem
    data-tag={casing.kebabCase(DropdownMenuCheckboxItem.displayName)}
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

const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: DropdownMenuRadioItemProps) => (
  <RadioItem
    data-tag={casing.kebabCase(DropdownMenuRadioItem.displayName)}
    className={radioItem({ className })}
    {...props}
  >
    <span className="tw:absolute tw:left-2 tw:flex tw:h-3.5 tw:w-3.5 tw:items-center tw:justify-center">
      <ItemIndicator><Icon icon="lucide:circle" className="tw:h-2 tw:w-2 tw:fill-current" /></ItemIndicator>
    </span>
    {children}
  </RadioItem>
)

const DropdownMenuLabel = ({
  className,
  ...props
}: DropdownMenuLabelProps) => (
  <Label
    data-tag={casing.kebabCase(DropdownMenuLabel.displayName)}
    className={label({ className })}
    {...props}
  />
)

const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuSeparatorProps) => (
  <Separator
    data-tag={casing.kebabCase(DropdownMenuSeparator.displayName)}
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
    data-tag={casing.kebabCase(DropdownMenuShortcut.displayName)}
    className={shortcut({ className })}
    {...props}
  />
)

const DropdownMenuTrigger = ({
  className,
  ...props
}: DropdownMenuTriggerProps) => (
  <Trigger
    data-tag={casing.kebabCase(DropdownMenuTrigger.displayName)}
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
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"

namespace Type {
  export type DropdownMenu = DropdownMenuProps
  export type DropdownMenuTrigger = DropdownMenuTriggerProps
  export type DropdownMenuContent = DropdownMenuContentProps
  export type DropdownMenuItem = DropdownMenuItemProps
  export type DropdownMenuCheckboxItem = DropdownMenuCheckboxItemProps
  export type DropdownMenuLabel = DropdownMenuLabelProps
  export type DropdownMenuSeparator = DropdownMenuSeparatorProps
  export type DropdownMenuShortcut = DropdownMenuShortcutProps
  export type DropdownMenuGroup = DropdownMenuGroupProps
  export type DropdownMenuPortal = DropdownMenuPortalProps
  export type DropdownMenuSub = DropdownMenuSubProps
  export type DropdownMenuSubContent = DropdownMenuSubContentProps
  export type DropdownMenuSubTrigger = DropdownMenuSubTriggerProps
  export type DropdownMenuRadioGroup = DropdownMenuRadioGroupProps
  export type DropdownMenuRadioItem = DropdownMenuRadioItemProps
}

export * from "@uitimate/lib-dropdown-menu";
export {
  dropdownMenuVariants,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  type Type
}