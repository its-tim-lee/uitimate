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

import { cn } from "@/lib/utils"
import { Icon } from "../Icon/Icon.tsx"

const DropdownMenuSubTrigger = ({ className, inset, children, ...props }: React.ComponentProps<typeof SubTrigger> & { inset?: boolean }) => (
  <SubTrigger
    className={cn(
      "tw-flex tw-cursor-default tw-gap-2 tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none focus:tw-bg-accent data-[state=open]:tw-bg-accent [&_svg]:tw-pointer-events-none [&_svg]:tw-size-4 [&_svg]:tw-shrink-0",
      inset && "tw-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <Icon icon="lucide:chevron-right" className="tw-ml-auto" />
  </SubTrigger>
)

const DropdownMenuSubContent = ({ className, ...props }: React.ComponentProps<typeof SubContent>) => (
  <SubContent
    className={cn(
      "tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-lg data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
)

const DropdownMenuContent = ({ className, sideOffset = 4, ...props }: React.ComponentProps<typeof Content>) => (
  <DropdownMenuPortal>
    <Content
      sideOffset={sideOffset}
      className={cn(
        "tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-md",
        "data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </DropdownMenuPortal>
)

const DropdownMenuItem = ({ className, inset, ...props }: React.ComponentProps<typeof Item> & { inset?: boolean }) => (
  <Item
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-gap-2 tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50 [&>svg]:tw-size-4 [&>svg]:tw-shrink-0",
      inset && "tw-pl-8",
      className
    )}
    {...props}
  />
)

const DropdownMenuCheckboxItem = ({ className, children, checked, ...props }: React.ComponentProps<typeof CheckboxItem>) => (
  <CheckboxItem
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <ItemIndicator><Icon icon="lucide:check" className="tw-h-4 tw-w-4" /></ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
)

const DropdownMenuRadioItem = ({ className, children, ...props }: React.ComponentProps<typeof RadioItem>) => (
  <RadioItem
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none tw-transition-colors focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      className
    )}
    {...props}
  >
    <span className="tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <ItemIndicator><Icon icon="lucide:circle" className="tw-h-2 tw-w-2 tw-fill-current" /></ItemIndicator>
    </span>
    {children}
  </RadioItem>
)

const DropdownMenuLabel = ({ className, inset, ...props }: React.ComponentProps<typeof Label> & { inset?: boolean }) => (
  <Label
    className={cn(
      "tw-px-2 tw-py-1.5 tw-text-sm tw-font-semibold",
      inset && "tw-pl-8",
      className
    )}
    {...props}
  />
)

const DropdownMenuSeparator = ({ className, ...props }: React.ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted", className)}
    {...props}
  />
)

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={cn("tw-ml-auto tw-text-xs tw-tracking-widest tw-opacity-60", className)}
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
}
