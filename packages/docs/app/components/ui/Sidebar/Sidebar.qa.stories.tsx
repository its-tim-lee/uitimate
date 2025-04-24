import SidebarInWindowSidebar from "#/components/demo/sidebar-in-dialog"
import SidebarTwo from "#/components/demo/sidebar-two"
import { within, userEvent } from '@storybook/testing-library';
import type { StoryContext, StoryObj, Meta } from '@storybook/react';

export default {
  title: 'QA/Sidebar',
  parameters: {
    layout: 'centered',
    viewport: {
      // #20250424
      // This is important to add if we decide to test `RWDMinimum` due to the incompetent of Story Book.
      // Without this, when `RWDMinimum` is setting to certain viewport (eg., `pixel`),
      // and even though other story doesn't set to different viewport,
      // The ones entering `RWDMinimum` in storybook UI, then the viewport will be fixed,
      // and visiting other stories in the same file will not be able to reset the viewport automatically.
      defaultViewport: 'responsive',
    },
  },
  tags: ['qa', 'fullpage'],
} satisfies Meta;

/**
 * FIXME: #20250424
 * This one probably hit the limitation of Argos,
 * such that doing below thing just like what we did in the command story
 * will not be able to capture the drawer, and `sleep` hack will not work as well.
 *
 * Plus, during Argos screenshots,  since we reset the default viewport on this story,
 * it seems like it will affect other stories in the same file,
 * for example, `Scenario2Sidebars` will be in 'pixel' viewport as well,
 * and setting parameters.viewport.defaultViewport = 'responsive' on `Scenario2Sidebars` will not work.
 */
// export const RWDMinimum: StoryObj = {
//   render: () => <SidebarRwdMinimumDemo />,
//   parameters: {
//     viewport: {
//       defaultViewport: 'pixel'
//     },
//   },
//   play: async ({ canvasElement }) => {
//     const event = new KeyboardEvent('keydown', {
//       keyCode: 66,
//       altKey: true,
//     });
//     document.dispatchEvent(event);
//     await sleep(2000);
//   }
// };

export const Scenario2Sidebars: StoryObj = {
  render: () => <SidebarTwo />
};

export const InWindowSidebar: StoryObj = {
  render: () => <SidebarInWindowSidebar />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByText(/open/i);
    await userEvent.click(openButton);
  },
};