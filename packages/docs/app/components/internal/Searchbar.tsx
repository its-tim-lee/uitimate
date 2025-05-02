import { Dialog } from "#/components/ui/Dialog/Dialog"
import * as React from "react"
import { type Type } from "#/components/ui/Dialog/Dialog";
import { cn } from "#/helpers/utils"
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
import hotkeys from "hotkeys-js"
import { track } from "#/helpers/analytics/ga/index.ts";

// Define a type for the structured search results
type SearchablePage = {
  href: string;
  title: string; // Original title for display
  fullTitle: string; // Title including context for searching
  context: string; // Parent context string
  icon: string;
};

export default ({ ...props }: ComponentProps<typeof Cta>) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    hotkeys('alt+k', (e) => {
      e.preventDefault();
      setIsOpen((open) => !open);
      track('open_searchbar_by_hotkey')
    });
    return () => hotkeys.unbind('alt+k');
  }, []);

  React.useEffect(() => {
    // Ensure CommandList scrolls to top when dialog opens or search changes
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [isOpen, search]);

  const autoFocusOnInputWhenOpen = () => {
    if (isOpen) {
      setSearch('')
      const timer = setTimeout(() => { // Delay focus slightly to ensure the input is rendered and visible
        inputRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }
  React.useEffect(autoFocusOnInputWhenOpen, [isOpen]);

  const runCommand = (command: () => unknown) => {
    setIsOpen(false)
    command()
  }

  // Extract all pages from siteData docsTree recursively, building context
  const allPages = React.useMemo(() => {
    const result: SearchablePage[] = [];

    const extractLinksRecursive = (items: DocTreeItem[], contextParts: string[]) => {
      items.forEach(item => {
        const currentContextParts = [...contextParts];

        // Add collapsible/subheader title to context if it's not a direct link
        if (item.type === 'collapsible' || item.type === 'subheader') {
          if (item.title) {
            currentContextParts.push(item.title);
          }
        }

        if (item.type === 'link' && item.href) {
          const fullTitle = [...currentContextParts, item.title].join(' > ');
          const context = currentContextParts.join(' > ');
          result.push({
            href: item.href,
            title: item.title,
            fullTitle: fullTitle,
            context: context,
            icon: item.href?.includes('/components/') ? 'lucide:component' : 'lucide:file',
          });
        }

        // Recurse if items exist (covers collapsible and subheader)
        if (item.items && item.items.length > 0) {
          extractLinksRecursive(item.items, currentContextParts);
        }
      });
    };

    extractLinksRecursive(siteData.docsTree, []);
    return result;
  }, []);

  return (
    <>
      <Cta
        variant='outline'
        size='sm'
        onClick={() => {
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
          <span className="tw:text-[16px]">⌥</span>K
        </kbd>
      </Cta>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Command className='tw:p-0 not-prose'>
          <CommandInput
            ref={inputRef}
            placeholder="Type a command or search..."
            value={search}
            onValueChange={setSearch}
          />
          <CommandList ref={listRef}>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup heading="Pages">
              {allPages.map((page) => (
                <CommandItem
                  key={page.href}
                  value={page.fullTitle}
                  onSelect={() => setIsOpen(false)}
                >
                  <a
                    href={page.href}
                    aria-label={page.title}
                    tabIndex={-1}
                    className="tw:flex tw:items-center tw:w-full tw:h-full focus:tw-outline-none"
                    onClick={e => e.stopPropagation()} // Prevent CommandItem from firing onClick again
                  >
                    <Icon icon={page.icon} className="tw:mr-4" />
                    <div className="tw:flex tw:flex-col tw:truncate">
                      <span className="tw:truncate">{page.title}</span>
                      {page.context && (
                        <span className="tw:text-xs tw:text-muted-foreground tw:truncate">
                          {page.context}
                        </span>
                      )}
                    </div>
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
