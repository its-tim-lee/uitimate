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
} from "@radix-ui/react-context-menu"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

const ContextMenuSubTrigger = ({ className, inset, children, ...props }: ComponentProps<typeof SubTrigger> & { inset?: boolean }) => (
  <SubTrigger
    className={cn(
      "tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[state=open]:tw-bg-accent data-[state=open]:tw-text-accent-foreground",
      inset && "tw-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <Icon icon='lucide:chevron-right' className="tw-ml-auto tw-h-4 tw-w-4" />
  </SubTrigger>
)

const ContextMenuSubContent = ({ className, ...props }: ComponentProps<typeof SubContent>) => (
  <SubContent
    className={cn(
      "tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-lg data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
)

const ContextMenuContent = ({ className, ...props }: ComponentProps<typeof Content>) => (
  <ContextMenuPortal>
    <Content
      className={cn(
        "tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </ContextMenuPortal>
)

const ContextMenuItem = ({ className, inset, ...props }: ComponentProps<typeof Item> & { inset?: boolean }) => (
  <Item
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      inset && "tw-pl-8",
      className
    )}
    {...props}
  />
)

const ContextMenuCheckboxItem = ({ className, children, checked, ...props }: ComponentProps<typeof CheckboxItem>) => (
  <CheckboxItem
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <ItemIndicator><Icon icon='lucide:check' className="tw-h-4 tw-w-4" /></ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
)

const ContextMenuRadioItem = ({ className, children, ...props }: ComponentProps<typeof RadioItem>) => (
  <RadioItem
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      className
    )}
    {...props}
  >
    <span className="tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <ItemIndicator><Icon icon='lucide:dot' className="tw-h-4 tw-w-4 tw-fill-current" /></ItemIndicator>
    </span>
    {children}
  </RadioItem>
)

const ContextMenuLabel = ({ className, inset, ...props }: ComponentProps<typeof Label> & { inset?: boolean }) => (
  <Label
    className={cn(
      "tw-px-2 tw-py-1.5 tw-text-sm tw-font-semibold tw-text-foreground",
      inset && "tw-pl-8",
      className
    )}
    {...props}
  />
)

const ContextMenuSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("tw--mx-1 tw-my-1 tw-h-px tw-bg-border", className)}
    {...props}
  />
)

const ContextMenuShortcut = ({ className, ...props }: ComponentProps<'span'>) => {
  return (
    <span
      className={cn(
        "tw-ml-auto tw-text-xs tw-tracking-widest tw-text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

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

export {
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
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
