import { Icon } from "#/components/ui/Icon/Icon"
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut } from "../ui/Command/Command"
export default () => {
  return (
    <Command className="tw:rounded-lg tw:border tw:shadow-md tw:md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>

        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Recent">
          <CommandItem><Icon icon='lucide:history' /><span>GPTBot</span></CommandItem>
          <CommandItem disabled><Icon icon='lucide:history' /><span>JSON mode New</span></CommandItem>
          <CommandItem><Icon icon='lucide:history' /><span>Models</span></CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Shortcuts">
          <CommandItem><span>Toggle sidebar</span><CommandShortcut>⌘\</CommandShortcut></CommandItem>
          <CommandItem><span>Show Search Bar</span><CommandShortcut>⌘K</CommandShortcut></CommandItem>
        </CommandGroup>

      </CommandList>
    </Command>
  )
}