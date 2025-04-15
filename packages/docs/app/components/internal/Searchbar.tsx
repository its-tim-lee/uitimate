import { Dialog } from "#/components/ui/Dialog/Dialog"
import * as React from "react"
import { type Type } from "#/components/ui/Dialog/Dialog";
import { cn } from "#/helpers/css"
import { Cta } from "#/components/ui/Cta/Cta"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "#/components/ui/Command/Command";
import { Icon } from "../ui/Icon/Icon";
import type { ComponentProps } from "react";
import siteData, { type DocTreeItem } from "#/data/site";


export default ({ ...props }: Type.Dialog & ComponentProps<typeof Cta>) => {
  const [isOpen, setIsOpen] = React.useState(false)

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
        setIsOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => unknown) => {
    setIsOpen(false)
    command()
  }

  // Extract all pages from siteData docsTree recursively
  const allPages = React.useMemo(() => {
    const result: DocTreeItem[] = [];

    const extractLinks = (items: DocTreeItem[]) => {
      items.forEach(item => {
        if (item.type === 'link' && item.href) {
          result.push(item);
        } else if (item.type === 'group' && item.items) {
          extractLinks(item.items);
        }
      });
    };

    extractLinks(siteData.docsTree);
    return result;
  }, []);

  return (
    <>
      <Cta
        variant='outline'
        size='sm'
        onClick={() => {
          console.log("clicked")
          setIsOpen(true)
        }}
        {...props}
        className={cn(
          'tw:rounded-2xl tw:bg-muted/50 tw:font-normal tw:text-muted-foreground tw:shadow-none',
          'tw:flex tw:justify-start'
        )}
      >
        <Icon icon='lucide:search' />
        <kbd className={cn(
          'tw:pointer-events-none tw:select-none tw:gap-1 tw:rounded tw:border tw:bg-muted tw:px-1.5 tw:font-mono tw:text-[12px] tw:font-medium',
          'tw:sm:flex tw:items-center'
        )}>
          <span className="tw:text-[16px]">⌘</span>K
        </kbd>
      </Cta>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Command className='tw:p-0'>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>



            <CommandGroup heading="Pages">
              {allPages.map((page) => (
                <CommandItem
                  key={page.href}
                >
                  <Icon icon={page.href?.includes('/components/') ? 'lucide:component' : 'lucide:file'} className="tw:mr-2" />
                  <a href={page.href} rel="noopener noreferrer">
                    {page.title}
                  </a>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </Dialog>
    </>
  )
}
