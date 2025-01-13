/**
 * `Label` is not imported, cuz it should be extreme rare to use.
 * `Arrow` is not imported, cuz it's almost redundant in terms of UX.
 * `Group` is not imported, cuz I can't see its value, and it seems redundant to use it.
 */
import { ItemIndicator, Root, Trigger, SubTrigger, SubContent, Content, Item, CheckboxItem, RadioItem, Separator, Menu as MenubarMenu, Portal as MenubarPortal, Sub as MenubarSub, RadioGroup as MenubarRadioGroup } from "@radix-ui/react-menubar"
import { Icon } from "@/components/compound/icon/Icon.tsx"
import { type ComponentProps } from "react"

import { cn } from "@/lib/utils"

const Menubar = ({ className, ...props }: ComponentProps<typeof Root>) => (
  <Root
    className={cn(
      "tw-flex tw-h-9 tw-items-center tw-space-x-1 tw-rounded-md tw-border tw-bg-background tw-p-1 tw-shadow-sm",
      className
    )}
    {...props}
  />
);

const MenubarTrigger = ({ className, ...props }: ComponentProps<typeof Trigger>) => (
  <Trigger
    className={cn(
      "tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-3 tw-py-1 tw-text-sm tw-font-medium tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[state=open]:tw-bg-accent data-[state=open]:tw-text-accent-foreground",
      className
    )}
    {...props}
  />
);

const MenubarSubTrigger = ({ className, inset, children, ...props }: ComponentProps<typeof SubTrigger> & { inset?: boolean }) => (
  <SubTrigger
    className={cn(
      "tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[state=open]:tw-bg-accent data-[state=open]:tw-text-accent-foreground",
      inset && "tw-pl-8",
      className
    )}
    {...props}
  >
    {children}
    <Icon icon="lucide:chevron-right" className="tw-ml-auto tw-h-4 tw-w-4" />
  </SubTrigger>
);

const MenubarSubContent = ({ className, ...props }: ComponentProps<typeof SubContent>) => (
  <SubContent
    className={cn(
      "tw-z-50 tw-min-w-[8rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-lg data-[state=open]:tw-animate-in data-[state=closed]:tw-animate-out data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
);

const MenubarContent = ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }: ComponentProps<typeof Content>) => (
  <MenubarPortal>
    <Content
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "tw-z-50 tw-min-w-[12rem] tw-overflow-hidden tw-rounded-md tw-border tw-bg-popover tw-p-1 tw-text-popover-foreground tw-shadow-md data-[state=open]:tw-animate-in data-[state=closed]:tw-fade-out-0 data-[state=open]:tw-fade-in-0 data-[state=closed]:tw-zoom-out-95 data-[state=open]:tw-zoom-in-95 data-[side=bottom]:tw-slide-in-from-top-2 data-[side=left]:tw-slide-in-from-right-2 data-[side=right]:tw-slide-in-from-left-2 data-[side=top]:tw-slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </MenubarPortal>
);

const MenubarItem = ({ className, inset, ...props }: ComponentProps<typeof Item> & { inset?: boolean }) => (
  <Item
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      inset && "tw-pl-8",
      className
    )}
    {...props}
  />
);

const MenubarCheckboxItem = ({ className, children, checked, ...props }: ComponentProps<typeof CheckboxItem>) => (
  <CheckboxItem
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <ItemIndicator>
        <Icon icon="lucide:check" className="tw-h-4 tw-w-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
);

const MenubarRadioItem = ({ className, children, ...props }: ComponentProps<typeof RadioItem>) => (
  <RadioItem
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-select-none tw-items-center tw-rounded-sm tw-py-1.5 tw-pl-8 tw-pr-2 tw-text-sm tw-outline-none focus:tw-bg-accent focus:tw-text-accent-foreground data-[disabled]:tw-pointer-events-none data-[disabled]:tw-opacity-50",
      className
    )}
    {...props}
  >
    <span className="tw-absolute tw-left-2 tw-flex tw-h-3.5 tw-w-3.5 tw-items-center tw-justify-center">
      <ItemIndicator>
        <Icon icon="lucide:circle" className="tw-h-4 tw-w-4 tw-fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
);


const MenubarSeparator = ({ className, ...props }: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("tw--mx-1 tw-my-1 tw-h-px tw-bg-muted", className)}
    {...props}
  />
);

const MenubarShortcut = ({ className, ...props }: ComponentProps<"span">) => {
  return (
    <span
      className={cn(
        "tw-ml-auto tw-text-xs tw-tracking-widest tw-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};

Menubar.displayName = Root.displayName;
MenubarTrigger.displayName = Trigger.displayName;
MenubarSubTrigger.displayName = SubTrigger.displayName;
MenubarSubContent.displayName = SubContent.displayName;
MenubarContent.displayName = Content.displayName;
MenubarItem.displayName = Item.displayName;
MenubarCheckboxItem.displayName = CheckboxItem.displayName;
MenubarRadioItem.displayName = RadioItem.displayName;
MenubarSeparator.displayName = Separator.displayName;
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarSub,
  MenubarShortcut,
}
