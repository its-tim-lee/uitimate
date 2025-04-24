import SidebarInWindowSidebar from "#/components/demo/sidebar-in-dialog"
import SidebarChatGPT from "#/components/demo/sidebar-chatgpt"
import SidebarYoutube from "#/components/demo/sidebar-youtube"
import SidebarToggleControl from "#/components/demo/sidebar-toggle-control"
import SidebarRwdMinimumDemo from "#/components/demo/sidebar-rwd-minimum-demo"
import SidebarTwo from "#/components/demo/sidebar-two"

export default {
  title: 'Example/Sidebar',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

/** #20250324
 * Points:
 * - Main content scrollable
 * - default shortcut
 * - mobile and desktop sidebar
 *   - how they work smoothly in changing the breakpoint
 *   - must provide DrawerHeading
 *   - can provide different style to different breakpoints, just make sure to use Tailwind
 *     - cuz Tailwind's default breakpoint matches to our `useIsMobile`
 */
export const RWDMinimum = {
  name: 'RWD Minimum Demo',
  render: () => <SidebarRwdMinimumDemo />
}

/**
 * Points:
 * - 2 variants
 * - Scrollable
 * - Different shortcuts
 * - 2 Sidebars
 */
export const Scenario2Sidebars = {
  name: '2 Sidebars',
  render: () => <SidebarTwo />
}

// Points:
// - key classes to make this work: overflow-hidden, max-h-[500px]
export const InWindowSidebar = {
  name: 'Sidebar in Dialog',
  render: () => <SidebarInWindowSidebar />
}

/**
 * Points:
 * - No mobile sidebar
 * - User can provide their fully customized mobile sidebar with our optional `useIsMobile` hook
 */
export const ToggleControl = {
  name: 'API / Toggle Control',
  render: () => <SidebarToggleControl />
}

export const YT = {
  name: 'Showcase / YT',
  render: () => <SidebarYoutube />
}

export const ChatGPT = {
  name: 'Showcase / GPT Sidebar',
  render: () => <SidebarChatGPT />
}