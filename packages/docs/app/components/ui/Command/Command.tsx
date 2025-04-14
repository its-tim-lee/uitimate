import { type ComponentProps } from "react"
import { Command as CommandPrimitive, CommandInput as CommandInputPrimitive, CommandList as CommandListPrimitive, CommandEmpty as CommandEmptyPrimitive, CommandGroup as CommandGroupPrimitive, CommandSeparator as CommandSeparatorPrimitive, CommandItem as CommandItemPrimitive } from "cmdk"
import { tv } from "tailwind-variants"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
import { kebabCase } from "lodash-es"

const commandVariants = tv({
  slots: {
    root: [
      "tw:flex tw:h-full tw:w-full tw:flex-col tw:overflow-hidden tw:rounded-md tw:bg-popover tw:text-popover-foreground"
    ],
    input: [
      "tw:flex tw:h-10 tw:w-full tw:rounded-md tw:bg-transparent tw:py-3 tw:text-sm tw:outline-hidden",
      "tw:placeholder:text-muted-foreground tw:disabled:cursor-not-allowed tw:disabled:opacity-50"
    ],
    list: "tw:max-h-[300px] tw:overflow-y-auto tw:overflow-x-hidden",
    empty: "tw:py-6 tw:text-center tw:text-sm",
    group: [
      "tw:overflow-hidden tw:p-1 tw:text-foreground",
      "tw:[&_[cmdk-group-heading]]:px-2 tw:[&_[cmdk-group-heading]]:py-1.5",
      "tw:[&_[cmdk-group-heading]]:text-xs tw:[&_[cmdk-group-heading]]:font-medium",
      "tw:[&_[cmdk-group-heading]]:text-muted-foreground"
    ],
    separator: "tw:-mx-1 tw:h-px tw:bg-border",
    item: [
      "tw:relative tw:flex tw:cursor-default tw:gap-2 tw:select-none tw:items-center tw:rounded-sm tw:px-2 tw:py-1.5 tw:text-sm tw:outline-hidden",
      "tw:data-[disabled=true]:pointer-events-none tw:data-[selected=true]:bg-accent tw:data-[selected=true]:text-accent-foreground tw:data-[disabled=true]:opacity-50",
      "tw:[&_svg]:pointer-events-none tw:[&_svg]:size-4 tw:[&_svg]:shrink-0"
    ],
    shortcut: "tw:ml-auto tw:text-xs tw:tracking-widest tw:text-muted-foreground"
  }
})

const { root, input, list, empty, group, separator, item, shortcut } = commandVariants()

type CommandProps = ComponentProps<typeof CommandPrimitive>
const Command = ({ className, ...props }: CommandProps) => (
  <CommandPrimitive
    data-tag={kebabCase(Command.displayName)}
    className={root({ className })}
    {...props}
  />
)

type CommandInputProps = ComponentProps<typeof CommandInputPrimitive>
const CommandInput = ({
  className,
  ...props
}: CommandInputProps) => (
  <div className="tw:flex tw:items-center tw:border-b tw:px-3" cmdk-input-wrapper="">
    <Icon icon='lucide:search' className="tw:mr-2 tw:h-4 tw:w-4 tw:shrink-0 tw:opacity-50" />
    <CommandInputPrimitive
      data-tag={kebabCase(CommandInput.displayName)}
      className={input({ className })}
      {...props}
    />
  </div>
)

type CommandListProps = ComponentProps<typeof CommandListPrimitive>
const CommandList = ({
  className,
  ...props
}: CommandListProps) => (
  <CommandListPrimitive
    data-tag={kebabCase(CommandList.displayName)}
    className={list({ className })}
    {...props}
  />
)

type CommandEmptyProps = ComponentProps<typeof CommandEmptyPrimitive>
const CommandEmpty = ({
  ...props
}: CommandEmptyProps) => (
  <CommandEmptyPrimitive
    data-tag={kebabCase(CommandEmpty.displayName)}
    className={empty()}
    {...props}
  />
)

type CommandGroupProps = ComponentProps<typeof CommandGroupPrimitive>
const CommandGroup = ({
  className,
  ...props
}: CommandGroupProps) => (
  <CommandGroupPrimitive
    data-tag={kebabCase(CommandGroup.displayName)}
    className={group({ className })}
    {...props}
  />
)

type CommandSeparatorProps = ComponentProps<typeof CommandSeparatorPrimitive>
const CommandSeparator = ({
  className,
  ...props
}: CommandSeparatorProps) => (
  <CommandSeparatorPrimitive
    data-tag={kebabCase(CommandSeparator.displayName)}
    className={separator({ className })}
    {...props}
  />
)

type CommandItemProps = ComponentProps<typeof CommandItemPrimitive>
const CommandItem = ({
  className,
  ...props
}: CommandItemProps) => (
  <CommandItemPrimitive
    data-tag={kebabCase(CommandItem.displayName)}
    className={item({ className })}
    {...props}
  />
)

type CommandShortcutProps = ComponentProps<'span'>
const CommandShortcut = ({
  className,
  ...props
}: CommandShortcutProps) => (
  <span
    data-tag={kebabCase(CommandShortcut.displayName)}
    className={shortcut({ className })}
    {...props}
  />
)

Command.displayName = 'Command'
CommandInput.displayName = 'CommandInput'
CommandList.displayName = 'CommandList'
CommandEmpty.displayName = 'CommandEmpty'
CommandGroup.displayName = 'CommandGroup'
CommandItem.displayName = 'CommandItem'
CommandShortcut.displayName = "CommandShortcut"
CommandSeparator.displayName = 'CommandSeparator'

namespace Type {
  export type Command = typeof Command
  export type CommandInput = typeof CommandInput
  export type CommandList = typeof CommandList
  export type CommandEmpty = typeof CommandEmpty
  export type CommandGroup = typeof CommandGroup
  export type CommandItem = typeof CommandItem
  export type CommandShortcut = typeof CommandShortcut
  export type CommandSeparator = typeof CommandSeparator
}

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
  type Type
}
