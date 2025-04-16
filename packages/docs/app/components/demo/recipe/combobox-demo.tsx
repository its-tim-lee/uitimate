import * as React from "react"

import { cn } from "#/helpers/css"
import { Cta } from "#/components/ui/Cta/Cta.tsx"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "#/components/ui/Command/Command.tsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "#/components/ui/Popover/Popover.tsx"
import { Icon } from "#/components/ui/Icon/Icon.tsx"
const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export default () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Cta
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="tw:w-[300px] tw:justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <Icon icon="lucide:chevron-down" className="tw:opacity-50" />
        </Cta>
      </PopoverTrigger>
      <PopoverContent className="tw:w-[300px] tw:p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="tw:h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Icon icon="lucide:check" className={cn(
                    "tw:ml-auto",
                    value === framework.value ? "tw:opacity-100" : "tw:opacity-0"
                  )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

