import type { ComponentMeta } from "#/types/index.ts";
export default {
  description: 'A horizontal menu bar with dropdown menus for managing a consistent set of commands via a hierarchical structure.',
  anatomy: `
    <Menubar>

      {/*
        The basic structure is like below;
        things can be complex inside the <MenubarContent>,
        so refer to the relevant demos to see the usages.
      */}

      <MenubarMenu>
        <MenubarTrigger/>
        <MenubarContent/>
      </MenubarMenu>

      {/* More <MenubarMenus>... */}

    </Menubar>
  `,
} as ComponentMeta;