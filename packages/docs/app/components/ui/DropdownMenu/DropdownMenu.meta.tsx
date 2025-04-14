export default {
  description: 'A vertically stacked menu that appears when a user interacts with the trigger.',
  anatomy: `
{/*
  The basic structure is like below;
  things can be complex inside the <DropdownMenuContent>,
  so refer to the relevant demos to see the usages.
*/}

<DropdownMenu>
  <DropdownMenuTrigger />
  <DropdownMenuContent/>
</DropdownMenu>
  `,
}