import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./NavigationMenu.tsx"

export default {
  title: 'Components/NavigationMenu',
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
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="tw-grid tw-gap-3 tw-p-4 md:tw-w-[400px] lg:tw-w-[500px] lg:tw-grid-cols-[.75fr_1fr]">
              <li className="tw-row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="tw-flex tw-h-full tw-w-full tw-select-none tw-flex-col tw-justify-end tw-rounded-md tw-bg-gradient-to-b tw-from-muted/50 tw-to-muted tw-p-6 tw-no-underline tw-outline-none focus:tw-shadow-md"
                    href="/"
                  >
                    <div className="tw-mb-2 tw-mt-4 tw-text-lg tw-font-medium">
                      shadcn/ui
                    </div>
                    <p className="tw-text-sm tw-leading-tight tw-text-muted-foreground">
                      Beautifully designed components built with Radix UI and
                      Tailwind CSS.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="https://github.com/radix-ui" target="_blank">Documentation</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    )
  },
};