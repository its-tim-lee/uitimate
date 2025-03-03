import * as React from "react"
import { type DialogProps } from "@/components/ui/Dialog/Dialog"
import { cn } from "@/lib/utils"
import { default as searchSVG } from "@iconify/icons-lucide/search";
import { Button } from "@/components/ui/Button/Button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command/Command";
import IconV2 from "../ui/Icon/IconV2";
import type { ComponentProps } from "react";

const { default: { body: search } } = searchSVG as any;

export default ({ ...props }: DialogProps & ComponentProps<typeof Button>) => {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => unknown) => {
    setOpen(false)
    // command()
  }

  return (
    <>
      <Button
        variant='outline'
        size='sm'
        onClick={() => setOpen(true)}
        {...props}
        className={cn(
          'tw:rounded-2xl tw:bg-muted/50 tw:font-normal tw:text-muted-foreground tw:shadow-none',
          'tw:flex tw:justify-start'
        )}
      >
        <IconV2 icon={search} ssr />
        <kbd className={cn(
          'tw:pointer-events-none tw:select-none tw:gap-1 tw:rounded tw:border tw:bg-muted tw:px-1.5 tw:font-mono tw:text-[12px] tw:font-medium',
          'tw:sm:flex tw:items-center'
        )}>
          <span className="tw:text-[16px]">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            <CommandItem onClick={() => runCommand(() => { })}>
              Documentation
            </CommandItem>
          </CommandGroup>

          _
        </CommandList>
      </CommandDialog>
    </>
  )
}
