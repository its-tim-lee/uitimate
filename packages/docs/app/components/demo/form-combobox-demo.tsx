import React, { useState, useEffect } from "react"
import { Cta } from "#/components/ui/Cta/Cta"
import { type ControllerRenderProps, Form, FormLabel, FormControl, FormItem, FormMessage, FormDescription } from "#/components/ui/Form/Form"
import { Popover, PopoverContent, PopoverTrigger } from "#/components/ui/Popover/Popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "#/components/ui/Command/Command"
import { Icon } from "#/components/ui/Icon/Icon"
import { cn } from "#/helpers/utils"
import { z } from "zod"

type ComboboxInputProps = {
  options: { value: string; label: string }[];
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
} & Partial<ControllerRenderProps>;

const Combobox = React.forwardRef<HTMLButtonElement, ComboboxInputProps>(
  ({ value, onChange, options, placeholder = "Select...", searchPlaceholder = "Search...", emptyMessage = "Nothing found.", ...props }, ref) => {
    const [internalValue, setInternalValue] = useState<string | undefined>(value as string | undefined);
    const [isOpen, setIsOpen] = useState(false);

    // Sync internal state when external value prop changes
    useEffect(() => {
      if (value !== internalValue && !(value === undefined && internalValue === undefined)) {
        setInternalValue(value as string | undefined);
      }
    }, [value, internalValue]);

    const onSelect = (currentValue: string) => {
      const newValue = currentValue === internalValue ? "" : currentValue;
      setInternalValue(newValue);
      onChange?.(newValue);
      setIsOpen(false);
    };

    const displayLabel = options.find(o => o.value === internalValue)?.label || placeholder;

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Cta
            ref={ref} // Forward the ref to the trigger button
            variant="outline"
            role="combobox"
            aria-expanded={isOpen}
            className="w-[200px] justify-between"
            {...props} // Pass other RHF props like onBlur, name if needed
          >
            {displayLabel}
            <Icon icon="lucide:chevrons-up-down" className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Cta>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder={searchPlaceholder} className="h-9" />
            <CommandList>
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={onSelect}
                  >
                    {option.label}
                    <Icon
                      icon="lucide:check"
                      className={cn(
                        "ml-auto h-4 w-4",
                        internalValue === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

export default () => {
  const options = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];
  const schema = z.object({
    framework: z.string({
      required_error: "Please select a framework.",
    }),
  });
  const submitOnValid = (data: z.infer<typeof schema>) => console.log(data)
  return (
    <Form onSubmit={submitOnValid} schema={schema} className="tw:w-[350px]">
      <FormItem name="framework">
        <FormLabel>Framework</FormLabel>
        <FormControl>
          <Combobox
            options={options}
            placeholder="Select framework..."
            searchPlaceholder="Search framework..."
            emptyMessage="No framework found."
          />
        </FormControl>
        <FormDescription>
          Select your favorite web framework.
        </FormDescription>
        <FormMessage />
      </FormItem>
      <br />
      <Cta type="submit">Submit</Cta>
    </Form>
  )
}