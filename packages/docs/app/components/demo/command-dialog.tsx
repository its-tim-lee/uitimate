import { useState, useEffect } from "react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/Command/Command"
import hotkeys from "hotkeys-js"
import { Icon } from "@/components/ui/Icon/Icon"
import { Dialog } from "@/components/ui/Dialog/Dialog"

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    hotkeys('command+j, ctrl+j', e => (e.preventDefault(), setIsOpen(t => !t)))
    return () => hotkeys.unbind()
  }, [])
  return (<>
    <h1>Press command+j or ctrl+j</h1>
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className='tw:p-0'>
      <Command>
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
    </Dialog>
  </>
  )
}