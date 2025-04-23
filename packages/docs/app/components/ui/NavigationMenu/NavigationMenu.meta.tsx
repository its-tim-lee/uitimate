import type { ComponentMeta } from "#/types/index.ts";

export default {
  description: 'Use to provide links for website navigation.',
  anatomy: `
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger/>
        <NavigationMenuContent/>
      </NavigationMenuItem>
      {/* More <NavigationMenuItem>... */}
    </NavigationMenu>
  `,
} as ComponentMeta;