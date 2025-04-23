import type { ComponentMeta } from "#/types/index.ts";
export default {
  description: 'Arguably the most correct implementation of a list component on the web that is scalable in any aspect you can imagine 😎',
  anatomy: `
    {/* You can go whatever deep nesting you want: */}
    <List>
      <ListItem/>
      <ListItem>
        <List>
          <ListItem/>
          {/* more <ListItem/> ... */}
        </List>
      </ListItem>
      {/* more <ListItem/> ... */}
    </List>
  `,
} as ComponentMeta;