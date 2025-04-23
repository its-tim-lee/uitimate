import type { ComponentMeta } from "#/types/index.ts";
const meta: ComponentMeta = {
  description: `A dropdown triggered by a button to display a list of options to pick from.`,
  anatomy: `
{/*
  The basic structure is like below;
  things can be complex inside the <SelectContent>,
  so refer to the relevant demos to see the usages.
*/}
<Select>
  <SelectTrigger/>
  <SelectContent/>
</Select>
`,
}

export default meta;