import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./Command.tsx"
import { Icon } from "../Icon/Icon.tsx";

export default {
  title: 'Example/Command',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Variant1 = {
  name: 'Default',
  render: () => {
    return (
      <Command className="tw-rounded-lg tw-border tw-shadow-md md:tw-min-w-[450px]">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem><Icon icon='lucide:smile' /><span>Search Emoji</span><CommandShortcut>⌘P</CommandShortcut></CommandItem>
            <CommandSeparator />
            <CommandItem disabled><span>Calculator</span></CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    )
  },
};