import { type ComponentProps, type HTMLAttributes } from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive, CommandInput as CommandInputPrimitive, CommandList as CommandListPrimitive, CommandEmpty as CommandEmptyPrimitive, CommandGroup as CommandGroupPrimitive, CommandSeparator as CommandSeparatorPrimitive, CommandItem as CommandItemPrimitive } from "cmdk"
import { Icon } from "@/components/ui/Icon/Icon.tsx"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/Dialog/Dialog.tsx"

const Command = ({ className, ...props }: ComponentProps<typeof CommandPrimitive> & { className?: string }) => (
  <CommandPrimitive className={cn("tw-flex tw-h-full tw-w-full tw-flex-col tw-overflow-hidden tw-rounded-md tw-bg-popover tw-text-popover-foreground", className)} {...props} />
)

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="tw-overflow-hidden tw-p-0">
        <Command className="[&_[cmdk-group-heading]]:tw-px-2 [&_[cmdk-group-heading]]:tw-font-medium [&_[cmdk-group-heading]]:tw-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:tw-pt-0 [&_[cmdk-group]]:tw-px-2 [&_[cmdk-input-wrapper]_svg]:tw-h-5 [&_[cmdk-input-wrapper]_svg]:tw-w-5 [&_[cmdk-input]]:tw-h-12 [&_[cmdk-item]]:tw-px-2 [&_[cmdk-item]]:tw-py-3 [&_[cmdk-item]_svg]:tw-h-5 [&_[cmdk-item]_svg]:tw-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = ({ className, ...props }: ComponentProps<typeof CommandInputPrimitive>) => (
  <div className="tw-flex tw-items-center tw-border-b tw-px-3" cmdk-input-wrapper="">
    <Icon icon='lucide:search' className="tw-mr-2 tw-h-4 tw-w-4 tw-shrink-0 tw-opacity-50" />
    <CommandInputPrimitive
      className={cn(
        "tw-flex tw-h-10 tw-w-full tw-rounded-md tw-bg-transparent tw-py-3 tw-text-sm tw-outline-none placeholder:tw-text-muted-foreground disabled:tw-cursor-not-allowed disabled:tw-opacity-50",
        className
      )}
      {...props}
    />
  </div>
)

const CommandList = ({ className, ...props }: ComponentProps<typeof CommandListPrimitive>) => (
  <CommandListPrimitive
    className={cn("tw-max-h-[300px] tw-overflow-y-auto tw-overflow-x-hidden", className)}
    {...props}
  />
)

const CommandEmpty = (props: ComponentProps<typeof CommandEmptyPrimitive>) => (
  <CommandEmptyPrimitive
    className="tw-py-6 tw-text-center tw-text-sm"
    {...props}
  />
)

const CommandGroup = ({ className, ...props }: ComponentProps<typeof CommandGroupPrimitive>) => (
  <CommandGroupPrimitive
    className={cn(
      "tw-overflow-hidden tw-p-1 tw-text-foreground [&_[cmdk-group-heading]]:tw-px-2 [&_[cmdk-group-heading]]:tw-py-1.5 [&_[cmdk-group-heading]]:tw-text-xs [&_[cmdk-group-heading]]:tw-font-medium [&_[cmdk-group-heading]]:tw-text-muted-foreground",
      className
    )}
    {...props}
  />
)

const CommandSeparator = ({ className, ...props }: ComponentProps<typeof CommandSeparatorPrimitive>) => (
  <CommandSeparatorPrimitive
    className={cn("tw--mx-1 tw-h-px tw-bg-border", className)}
    {...props}
  />
)

const CommandItem = ({ className, ...props }: ComponentProps<typeof CommandItemPrimitive>) => (
  <CommandItemPrimitive
    className={cn(
      "tw-relative tw-flex tw-cursor-default tw-gap-2 tw-select-none tw-items-center tw-rounded-sm tw-px-2 tw-py-1.5 tw-text-sm tw-outline-none data-[disabled=true]:tw-pointer-events-none data-[selected=true]:tw-bg-accent data-[selected=true]:tw-text-accent-foreground data-[disabled=true]:tw-opacity-50 [&_svg]:tw-pointer-events-none [&_svg]:tw-size-4 [&_svg]:tw-shrink-0",
      className
    )}
    {...props}
  />
)

const CommandShortcut = ({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) => {
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

Command.displayName = 'Command'
CommandDialog.displayName = 'CommandDialog'
CommandInput.displayName = 'CommandInput'
CommandList.displayName = 'CommandList'
CommandEmpty.displayName = 'CommandEmpty'
CommandGroup.displayName = 'CommandGroup'
CommandItem.displayName = 'CommandItem'
CommandShortcut.displayName = "CommandShortcut"
CommandSeparator.displayName = 'CommandSeparator'

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
