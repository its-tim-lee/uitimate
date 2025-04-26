import { type ComponentProps } from "react"
import { casing } from '#/helpers/utils.ts'
import {
  Root as ContextMenu,
  Trigger as ContextMenuTrigger,
  Group as ContextMenuGroup,
  Portal as ContextMenuPortal,
  Sub as ContextMenuSub,
  RadioGroup as ContextMenuRadioGroup,
  SubTrigger,
  SubContent,
  Content,
  Item,
  CheckboxItem,
  RadioItem,
  Label,
  Separator,
  ItemIndicator
} from "@uitimate/lib-context-menu"
import { tv } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon.tsx"

const baseContentStyle = [
  "tw:z-50 tw:min-w-[8rem] tw:overflow-hidden tw:rounded-md tw:border tw:bg-popover tw:p-1 tw:text-popover-foreground",
  "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out",
  "tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
  "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
  "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2",
  "tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2"
]
const itemBaseStyle = [
  "tw:relative",
  "tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:py-1.5 tw:text-sm tw:outline-hidden",
  "tw:focus:bg-accent tw:focus:text-accent-foreground",
  "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50"
]
const contextMenuVariants = tv({
  slots: {
    subTrigger: [
      " tw:px-2",
      "tw:flex tw:cursor-default tw:select-none tw:justify-between tw:items-center tw:rounded-sm tw:py-1.5 tw:text-sm tw:outline-hidden",
      "tw:focus:bg-accent tw:focus:text-accent-foreground",
      "tw:data-[state=open]:bg-accent tw:data-[state=open]:text-accent-foreground"
    ],
    subContent: ["tw:shadow-lg", ...baseContentStyle],
    content: ["tw:shadow-md", ...baseContentStyle],
    item: ["tw:px-2", ...itemBaseStyle],
    formItem: ["tw:pl-8 tw:pr-2", ...itemBaseStyle],
    label: "tw:px-2 tw:py-1.5 tw:text-sm tw:font-semibold tw:text-foreground",
    separator: "tw:-mx-1 tw:my-1 tw:h-px tw:bg-border",
    shortcut: "tw:ml-auto tw:text-xs tw:tracking-widest tw:text-muted-foreground"
  },
  variants: {
    inset: {
      true: {
        subTrigger: "tw:pl-8",
        item: "tw:pl-8",
        label: "tw:pl-8"
      }
    }
  }
})

type ContextMenuSubTriggerProps = ComponentProps<typeof SubTrigger> & { inset?: boolean }
const ContextMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ContextMenuSubTriggerProps) => (
  <SubTrigger
    className={contextMenuVariants({ inset }).subTrigger({ className })}
    data-tag={casing.kebabCase(ContextMenuSubTrigger.displayName)}
    {...props}
  >
    {children}
    <Icon icon='lucide:chevron-right' className="tw:ml-auto tw:h-4 tw:w-4" />
  </SubTrigger>
)

type ContextMenuSubContentProps = ComponentProps<typeof SubContent>
const ContextMenuSubContent = ({
  className,
  ...props
}: ContextMenuSubContentProps) => (
  <SubContent
    className={contextMenuVariants().subContent({ className })}
    data-tag={casing.kebabCase(ContextMenuSubContent.displayName)}
    {...props}
  />
)

type ContextMenuContentProps = ComponentProps<typeof Content>
const ContextMenuContent = ({
  className,
  ...props
}: ContextMenuContentProps) => (
  <ContextMenuPortal>
    <Content
      className={contextMenuVariants().content({ className })}
      data-tag={casing.kebabCase(ContextMenuContent.displayName)}
      {...props}
    />
  </ContextMenuPortal>
)

type ContextMenuItemProps = ComponentProps<typeof Item> & { inset?: boolean }
const ContextMenuItem = ({
  className,
  inset,
  ...props
}: ContextMenuItemProps) => (
  <Item
    className={contextMenuVariants({ inset }).item({ className })}
    data-tag={casing.kebabCase(ContextMenuItem.displayName)}
    {...props}
  />
)

type ContextMenuCheckboxItemProps = ComponentProps<typeof CheckboxItem>
const ContextMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: ContextMenuCheckboxItemProps) => (
  <CheckboxItem
    className={contextMenuVariants().formItem({ className })}
    data-tag={casing.kebabCase(ContextMenuCheckboxItem.displayName)}
    checked={checked}
    {...props}
  >
    <span className="tw:absolute tw:left-2 tw:flex tw:h-3.5 tw:w-3.5 tw:items-center tw:justify-center">
      <ItemIndicator>
        <Icon icon='lucide:check' className="tw:h-4 tw:w-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
)

type ContextMenuRadioItemProps = ComponentProps<typeof RadioItem>
const ContextMenuRadioItem = ({
  className,
  children,
  ...props
}: ContextMenuRadioItemProps) => (
  <RadioItem
    className={contextMenuVariants().formItem({ className })}
    data-tag={casing.kebabCase(ContextMenuRadioItem.displayName)}
    {...props}
  >
    <span className="tw:absolute tw:left-2 tw:flex tw:h-3.5 tw:w-3.5 tw:items-center tw:justify-center">
      <ItemIndicator>
        <Icon icon='lucide:dot' className="tw:h-4 tw:w-4 tw:fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
)

type ContextMenuLabelProps = ComponentProps<typeof Label> & { inset?: boolean }
const ContextMenuLabel = ({
  className,
  inset,
  ...props
}: ContextMenuLabelProps) => (
  <Label
    className={contextMenuVariants({ inset }).label({ className })}
    data-tag={casing.kebabCase(ContextMenuLabel.displayName)}
    {...props}
  />
)

type ContextMenuSeparatorProps = ComponentProps<typeof Separator>
const ContextMenuSeparator = ({
  className,
  ...props
}: ContextMenuSeparatorProps) => (
  <Separator
    className={contextMenuVariants().separator({ className })}
    data-tag={casing.kebabCase(ContextMenuSeparator.displayName)}
    {...props}
  />
)

type ContextMenuShortcutProps = ComponentProps<'span'>
const ContextMenuShortcut = ({
  className,
  ...props
}: ContextMenuShortcutProps) => (
  <span
    className={contextMenuVariants().shortcut({ className })}
    data-tag={casing.kebabCase(ContextMenuShortcut.displayName)}
    {...props}
  />
)

ContextMenu.displayName = "ContextMenu"
ContextMenuTrigger.displayName = "ContextMenuTrigger"
ContextMenuContent.displayName = "ContextMenuContent"
ContextMenuItem.displayName = "ContextMenuItem"
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem"
ContextMenuRadioItem.displayName = "ContextMenuRadioItem"
ContextMenuLabel.displayName = "ContextMenuLabel"
ContextMenuSeparator.displayName = "ContextMenuSeparator"
ContextMenuShortcut.displayName = "ContextMenuShortcut"
ContextMenuGroup.displayName = "ContextMenuGroup"
ContextMenuPortal.displayName = "ContextMenuPortal"
ContextMenuSub.displayName = "ContextMenuSub"
ContextMenuSubContent.displayName = "ContextMenuSubContent"
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger"
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup"

namespace Type {
  export type ContextMenu = typeof ContextMenu
  export type ContextMenuTrigger = typeof ContextMenuTrigger
  export type ContextMenuContent = typeof ContextMenuContent
  export type ContextMenuItem = typeof ContextMenuItem
  export type ContextMenuCheckboxItem = typeof ContextMenuCheckboxItem
  export type ContextMenuRadioItem = typeof ContextMenuRadioItem
  export type ContextMenuLabel = typeof ContextMenuLabel
  export type ContextMenuSeparator = typeof ContextMenuSeparator
  export type ContextMenuShortcut = typeof ContextMenuShortcut
}

export * from "@uitimate/lib-context-menu";
export {
  type Type,
  contextMenuVariants,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
  /**
   * These should be rare to be used, but exported anyway in case there're some edge cases.
   */
  ContextMenuPortal,
}
