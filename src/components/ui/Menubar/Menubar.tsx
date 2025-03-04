/**
 * TBD: doc:
 * `Label` is not imported, cuz it should be extreme rare to use.
 * `Arrow` is not imported, cuz it's almost redundant in terms of UX.
 * `Group` is not imported, cuz I can't see its value, and it seems redundant to use it.
 */
import { ItemIndicator, Root, Trigger, SubTrigger, SubContent, Content, Item, CheckboxItem, RadioItem, Separator, Menu as MenubarMenu, Portal as MenubarPortal, Sub as MenubarSub, RadioGroup as MenubarRadioGroup } from "@radix-ui/react-menubar"
import { Icon } from "@/components/ui/Icon/Icon.tsx"
import { type ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

export const menubarVariants = tv({
  slots: {
    root: "tw:flex tw:h-9 tw:items-center tw:space-x-1 tw:rounded-md tw:border tw:bg-background tw:p-1 tw:shadow-sm",
    trigger: "tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:px-3 tw:py-1 tw:text-sm tw:font-medium tw:outline-hidden tw:focus:bg-accent tw:focus:text-accent-foreground tw:data-[state=open]:bg-accent tw:data-[state=open]:text-accent-foreground",
    subTrigger: [
      "tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:px-2 tw:py-1.5 tw:text-sm tw:outline-hidden",
      "tw:focus:bg-accent tw:focus:text-accent-foreground",
      "tw:data-[state=open]:bg-accent tw:data-[state=open]:text-accent-foreground"
    ],
    subContent: [
      "tw:z-50 tw:min-w-[8rem] tw:overflow-hidden tw:rounded-md tw:border tw:bg-popover tw:p-1 tw:text-popover-foreground tw:shadow-lg",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:animate-out tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
      "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
      "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2 tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2"
    ],
    content: [
      "tw:z-50 tw:min-w-[12rem] tw:overflow-hidden tw:rounded-md tw:border tw:bg-popover tw:p-1 tw:text-popover-foreground tw:shadow-md",
      "tw:data-[state=open]:animate-in tw:data-[state=closed]:fade-out-0 tw:data-[state=open]:fade-in-0",
      "tw:data-[state=closed]:zoom-out-95 tw:data-[state=open]:zoom-in-95",
      "tw:data-[side=bottom]:slide-in-from-top-2 tw:data-[side=left]:slide-in-from-right-2 tw:data-[side=right]:slide-in-from-left-2 tw:data-[side=top]:slide-in-from-bottom-2"
    ],
    item: [
      "tw:relative tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:px-2 tw:py-1.5 tw:text-sm tw:outline-hidden",
      "tw:focus:bg-accent tw:focus:text-accent-foreground",
      "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50"
    ],
    checkboxItem: [
      "tw:relative tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:py-1.5 tw:pl-8 tw:pr-2 tw:text-sm tw:outline-hidden",
      "tw:focus:bg-accent tw:focus:text-accent-foreground",
      "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50"
    ],
    radioItem: [
      "tw:relative tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:py-1.5 tw:pl-8 tw:pr-2 tw:text-sm tw:outline-hidden",
      "tw:focus:bg-accent tw:focus:text-accent-foreground",
      "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50"
    ],
    itemIndicator: "tw:absolute tw:left-2 tw:flex tw:h-3.5 tw:w-3.5 tw:items-center tw:justify-center",
    separator: "tw:-mx-1 tw:my-1 tw:h-px tw:bg-muted",
    shortcut: "tw:ml-auto tw:text-xs tw:tracking-widest tw:text-muted-foreground"
  }
})

const {
  root,
  trigger,
  subTrigger,
  subContent,
  content,
  item,
  checkboxItem,
  radioItem,
  itemIndicator,
  separator,
  shortcut
} = menubarVariants()

export type MenubarProps = ComponentProps<typeof Root>;
export type MenubarTriggerProps = ComponentProps<typeof Trigger>;
export type MenubarSubTriggerProps = ComponentProps<typeof SubTrigger>;
export type MenubarSubContentProps = ComponentProps<typeof SubContent>;
export type MenubarContentProps = ComponentProps<typeof Content>;
export type MenubarItemProps = ComponentProps<typeof Item>;
export type MenubarCheckboxItemProps = ComponentProps<typeof CheckboxItem>;
export type MenubarRadioItemProps = ComponentProps<typeof RadioItem>;
export type MenubarSeparatorProps = ComponentProps<typeof Separator>;
export type MenubarShortcutProps = ComponentProps<"span">;

export const Menubar = ({ className, ...props }: MenubarProps) => (
  <Root
    className={root({ className })}
    {...props}
  />
);

export const MenubarTrigger = ({ className, ...props }: MenubarTriggerProps) => (
  <Trigger
    className={trigger({ className })}
    {...props}
  />
);

export const MenubarSubTrigger = ({ className, children, ...props }: MenubarSubTriggerProps) => (
  <SubTrigger
    className={subTrigger({ className })}
    {...props}
  >
    {children}
    <Icon icon="lucide:chevron-right" className="tw:ml-auto tw:h-4 tw:w-4" />
  </SubTrigger>
);

export const MenubarSubContent = ({ className, ...props }: MenubarSubContentProps) => (
  <SubContent
    className={subContent({ className })}
    {...props}
  />
);

export const MenubarContent = ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }: MenubarContentProps) => (
  <MenubarPortal>
    <Content
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={content({ className })}
      {...props}
    />
  </MenubarPortal>
);

export const MenubarItem = ({ className, ...props }: MenubarItemProps) => (
  <Item
    className={item({ className })}
    {...props}
  />
);

export const MenubarCheckboxItem = ({ className, children, checked, ...props }: MenubarCheckboxItemProps) => (
  <CheckboxItem
    className={checkboxItem({ className })}
    checked={checked}
    {...props}
  >
    <span className={itemIndicator()}>
      <ItemIndicator>
        <Icon icon="lucide:check" className="tw:h-4 tw:w-4" />
      </ItemIndicator>
    </span>
    {children}
  </CheckboxItem>
);

export const MenubarRadioItem = ({ className, children, ...props }: MenubarRadioItemProps) => (
  <RadioItem
    className={radioItem({ className })}
    {...props}
  >
    <span className={itemIndicator()}>
      <ItemIndicator>
        <Icon icon="lucide:circle" className="tw:h-4 tw:w-4 tw:fill-current" />
      </ItemIndicator>
    </span>
    {children}
  </RadioItem>
);

export const MenubarSeparator = ({ className, ...props }: MenubarSeparatorProps) => (
  <Separator
    className={separator({ className })}
    {...props}
  />
);

export const MenubarShortcut = ({ className, ...props }: MenubarShortcutProps) => (
  <span
    className={shortcut({ className })}
    {...props}
  />
);

Menubar.displayName = 'Menubar';
MenubarMenu.displayName = 'MenubarMenu';
MenubarPortal.displayName = 'MenubarPortal';
MenubarSub.displayName = 'MenubarSub';
MenubarRadioGroup.displayName = 'MenubarRadioGroup';
MenubarTrigger.displayName = 'MenubarTrigger';
MenubarSubTrigger.displayName = 'MenubarSubTrigger';
MenubarSubContent.displayName = 'MenubarSubContent';
MenubarContent.displayName = 'MenubarContent';
MenubarItem.displayName = 'MenubarItem';
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem';
MenubarRadioItem.displayName = 'MenubarRadioItem';
MenubarSeparator.displayName = 'MenubarSeparator';
MenubarShortcut.displayName = "MenubarShortcut";

export {
  MenubarMenu,
  MenubarPortal,
  MenubarSub,
  MenubarRadioGroup
}
