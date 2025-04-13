import { Label, Arrow, Group, ItemIndicator, Root, Trigger, SubTrigger, SubContent, Content, Item, CheckboxItem, RadioItem, Separator, Menu as MenubarMenu, Portal as MenubarPortal, Sub as MenubarSub, RadioGroup as MenubarRadioGroup } from "@radix-ui/react-menubar"
import { type ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon"
import { kebabCase } from "lodash-es"

const itemBaseStyle = [
  "tw:relative tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:text-sm tw:outline-hidden",
  "tw:focus:bg-accent tw:focus:text-accent-foreground",
  "tw:data-disabled:pointer-events-none tw:data-disabled:opacity-50"
]
const menubarVariants = tv({
  slots: {
    root: "tw:flex tw:h-9 tw:items-center tw:space-x-1 tw:rounded-md tw:border tw:bg-background tw:p-1 tw:shadow-sm",
    trigger: "tw:flex tw:cursor-default tw:select-none tw:items-center tw:rounded-sm tw:px-3 tw:py-1 tw:text-sm tw:font-medium tw:outline-hidden tw:focus:bg-accent tw:focus:text-accent-foreground tw:data-[state=open]:bg-accent tw:data-[state=open]:text-accent-foreground",
    subTrigger: [
      "tw:flex tw:cursor-default tw:select-none tw:items-center tw:justify-between tw:rounded-sm tw:px-2 tw:py-1.5 tw:text-sm tw:outline-hidden",
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
    item: ["tw:px-2 tw:py-1.5", ...itemBaseStyle],
    formItem: ["tw:py-1.5 tw:pl-8 tw:pr-2", ...itemBaseStyle],
    itemIndicator: "tw:absolute tw:left-2 tw:flex tw:h-3.5 tw:w-3.5 tw:items-center tw:justify-center",
    separator: "tw:-mx-1 tw:my-1 tw:h-px tw:bg-muted",
    shortcut: "tw:ml-auto tw:text-xs tw:tracking-widest tw:text-muted-foreground",
    label: "",
    arrow: "",
    group: "",

  }
})

const {
  root,
  trigger,
  subTrigger,
  subContent,
  content,
  item,
  formItem,
  itemIndicator,
  separator,
  shortcut,
  label,
  arrow,
  group
} = menubarVariants()

type MenubarProps = ComponentProps<typeof Root>;
const Menubar = ({ className, ...props }: MenubarProps) => (
  <Root
    data-tag={kebabCase(Menubar.displayName)}
    className={root({ className })}
    {...props}
  />
);

type MenubarTriggerProps = ComponentProps<typeof Trigger>;
const MenubarTrigger = ({ className, ...props }: MenubarTriggerProps) => (
  <Trigger
    data-tag={kebabCase(MenubarTrigger.displayName)}
    className={trigger({ className })}
    {...props}
  />
);

type MenubarSubTriggerProps = ComponentProps<typeof SubTrigger>;
const MenubarSubTrigger = ({ className, children, ...props }: MenubarSubTriggerProps) => (
  <SubTrigger
    data-tag={kebabCase(MenubarSubTrigger.displayName)}
    className={subTrigger({ className })}
    {...props}
  >
    {children}
    <Icon icon="lucide:chevron-right" className="tw:ml-auto tw:h-4 tw:w-4" />
  </SubTrigger>
);

type MenubarSubContentProps = ComponentProps<typeof SubContent>;
const MenubarSubContent = ({ className, ...props }: MenubarSubContentProps) => (
  <SubContent
    data-tag={kebabCase(MenubarSubContent.displayName)}
    className={subContent({ className })}
    {...props}
  />
);

type MenubarContentProps = ComponentProps<typeof Content>;
const MenubarContent = ({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }: MenubarContentProps) => (
  <MenubarPortal>
    <Content
      data-tag={kebabCase(MenubarContent.displayName)}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={content({ className })}
      {...props}
    />
  </MenubarPortal>
);

type MenubarItemProps = ComponentProps<typeof Item>;
const MenubarItem = ({ className, ...props }: MenubarItemProps) => (
  <Item
    data-tag={kebabCase(MenubarItem.displayName)}
    className={item({ className })}
    {...props}
  />
);

type MenubarCheckboxItemProps = ComponentProps<typeof CheckboxItem>;
const MenubarCheckboxItem = ({ className, children, checked, ...props }: MenubarCheckboxItemProps) => (
  <CheckboxItem
    data-tag={kebabCase(MenubarCheckboxItem.displayName)}
    className={formItem({ className })}
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

type MenubarRadioItemProps = ComponentProps<typeof RadioItem>;
const MenubarRadioItem = ({ className, children, ...props }: MenubarRadioItemProps) => (
  <RadioItem
    data-tag={kebabCase(MenubarRadioItem.displayName)}
    className={formItem({ className })}
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

type MenubarSeparatorProps = ComponentProps<typeof Separator>;
const MenubarSeparator = ({ className, ...props }: MenubarSeparatorProps) => (
  <Separator
    data-tag={kebabCase(MenubarSeparator.displayName)}
    className={separator({ className })}
    {...props}
  />
);

type MenubarShortcutProps = ComponentProps<"span">;
const MenubarShortcut = ({ className, ...props }: MenubarShortcutProps) => (
  <span
    data-tag={kebabCase(MenubarShortcut.displayName)}
    className={shortcut({ className })}
    {...props}
  />
);

type MenubarLabelProps = ComponentProps<typeof Label>;
const MenubarLabel = ({ className, ...props }: MenubarLabelProps) => (
  <Label
    data-tag={kebabCase(MenubarLabel.displayName)}
    className={label({ className })}
    {...props}
  />
);

type MenubarArrowProps = ComponentProps<typeof Arrow>;
const MenubarArrow = ({ className, ...props }: MenubarArrowProps) => (
  <Arrow
    data-tag={kebabCase(MenubarArrow.displayName)}
    className={arrow({ className })}
    {...props}
  />
);

type MenubarGroupProps = ComponentProps<typeof Group>;
const MenubarGroup = ({ className, ...props }: MenubarGroupProps) => (
  <Group
    data-tag={kebabCase(MenubarGroup.displayName)}
    className={group({ className })}
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
MenubarLabel.displayName = "MenubarLabel";
MenubarArrow.displayName = "MenubarArrow";
MenubarGroup.displayName = "MenubarGroup";

namespace Type {
  export type Menubar = MenubarProps;
  export type MenubarTrigger = MenubarTriggerProps;
  export type MenubarSubTrigger = MenubarSubTriggerProps;
  export type MenubarSubContent = MenubarSubContentProps;
  export type MenubarContent = MenubarContentProps;
  export type MenubarItem = MenubarItemProps;
  export type MenubarCheckboxItem = MenubarCheckboxItemProps;
  export type MenubarRadioItem = MenubarRadioItemProps;
  export type MenubarSeparator = MenubarSeparatorProps;
  export type MenubarShortcut = MenubarShortcutProps;
  export type MenubarLabel = MenubarLabelProps;
  export type MenubarArrow = MenubarArrowProps;
  export type MenubarGroup = MenubarGroupProps;
}

export {
  type Type,
  menubarVariants,
  Menubar,
  MenubarMenu,
  MenubarPortal,
  MenubarSub,
  MenubarRadioGroup,
  MenubarTrigger,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  /**
   * These should be rare to be used, but exported anyway in case there're some edge cases.
   */
  MenubarLabel,
  MenubarArrow,
  MenubarGroup,
}
