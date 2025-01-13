Project Specific Instruction

- Validate against the HTML Living Standard
  - eg., you can't make a mistake like having &lt;button&gt; in another &lt;button&gt;
- Importing a type must use this form: `import { type TypeName } from '...'`
- Any mapped component from using [Builder.io](http://Builder.io) will only in the path \`@/components/&lt;primitive | composite&gt;/&lt;component-name&gt;/index.tsx\`
  - Note that \`component-name\` is kebab case
  - Currently, these components are in "primitive" folder: accordion, avatar, label, progress, separator, tabs
  - Currently, these components are in "composite" folder: alert, badge, breadcrumb, button, checkbox, input, table, text-header
  - You can only import and use these components in your implementation; you DO NOT create these components from scratch
- Every import path must include file extension
- Put the major things in an entry file index.tsx
- When using classes, only use Tailwind's and every class must prefix with "tw-"
- If using "Icon" component, it must come from \`import { Icon } from "@iconify/react";\`
- If components come from the same path, you can only import all of them in one line
  - eg., \`import { AccordionContent, AccordionTrigger, AccordionItem, Accordion } from "@/components/primitive/accordion";\`
- Always generate a story file named index.stories.tsx with the following structure:

```
import {
    ComponentOne,
    ComponentTwo,
    //...
    } from "./index.tsx"

    export default {
    title: 'Example/TheComponentTopicYouCreated',
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
        // constrcture the component(s) at here
        )
    },
    };
```