import type { ComponentMeta } from "#/types/index.ts";

const meta: ComponentMeta = {
  description: "A command palette providing a searchable interface for executing commands and navigating through options.",
  anatomy: `

{/*
  The basic structure is like below;
  things can be complex inside the <CommandList>,
  so refer to the relevant demos to see the usages.
*/}

<Command>
  <CommandInput/>
  </CommandList>
</Command>`,
}

export default meta