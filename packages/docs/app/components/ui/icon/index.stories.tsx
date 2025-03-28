import { Icon } from "./index.tsx";

// import IconDemo from "../../demo/icon-demo.tsx";
// import IconSize from "../../demo/icon-size.tsx";
import IconSize from "@/demos/icon-size.tsx";
import { default as githubSVG } from '@iconify/icons-lucide/github';
const { body: github } = githubSVG as any;// @ts-ignore

export default {
  title: 'Example/Icon',
  parameters: {
    layout: 'centered',
    // docs: {
    //   source: {
    //     type: 'dynamic',
    //   }
    // }
  },
  component: Icon,
  displayName: 'Icon',
  // tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'lg', 'icon'] },
    variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] },
    asChild: { control: 'boolean' },
  },

}

export const DEMO = {
  name: 'DEMO',
  render: () => {
    return (
      <div>
        Hello <Icon icon='lucide:github' />
      </div>
    )
  }
}

// export const DEMO = {
//   name: 'DEMO',
//   render: () => IconDemo()
// }

export const SIZE = {
  name: 'API / Size',
  render: () => IconSize()
}


// export const SSR = {
//   name: 'Edge Case / SSR',
//   render: () =>
//     <div className="tw:flex tw:flex-col tw:gap-2">

//       <svg
//         data-icon
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink"
//         aria-hidden="true"
//         role="img"
//         width="1em"
//         height="1em"
//         viewBox="0 0 24 24"
//         dangerouslySetInnerHTML={{ __html: github }}
//       />

//     </div>
// };

