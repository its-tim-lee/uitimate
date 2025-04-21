import SidebarInWindowSidebar from "#/components/demo/sidebar-in-dialog"
import SidebarChatGPT from "#/components/demo/sidebar-chatgpt"
import SidebarYoutube from "#/components/demo/sidebar-youtube"
import SidebarToggleControl from "#/components/demo/sidebar-toggle-control"
import SidebarRwdMinimumDemo from "#/components/demo/sidebar-rwd-minimum-demo"
import SidebarTwo from "#/components/demo/sidebar-two"

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "#",
          icon: 'lucide:home'
        },
        {
          title: "Project Structure",
          url: "#",
          icon: 'lucide:calendar',
          subs: [
            {
              title: 'Routing',
              url: '#',
            },
            {
              title: 'Rendering',
              url: '#',
            }
          ]
        },
      ],
    },
    {
      title: "Community",
      url: "#",
      items: [
        {
          title: "Contribution Guide",
          url: "#",
          icon: 'lucide:settings'
        },
      ],
    },
  ],
}

export default {
  title: 'Example/Sidebar',
  decorators: [
    /**
     * Storybook has a default style on the root element, which creates style issues on this very component.
     * So below is a workaround to prevent the styling issues.
     */
    (Story: any) => {
      const rootElement = document.getElementById('storybook-root');
      if (rootElement) {
        rootElement.style.width = '100%';
        rootElement.style.padding = 'unset';
        rootElement.style.height = '100dvh';
        rootElement.style.display = 'flex';
        rootElement.style.justifyContent = 'center';
        rootElement.style.alignItems = 'center';
      }
      return <Story />;
    },
  ],
  // includeStories: [],
  parameters: {
    layout: 'centered',
  },
}
// - TBD: doc
//  - Main content scrollable
//  - default shortcut
//  - mobile and desktop sidebar
//    - how they work smoothly in changing the breakpoint
//    - must provide DrawerHeading
//    - can provide different style to different breakpoints, just make sure to use Tailwind
//      - cuz Tailwind's default breakpoint matches to our `useIsMobile`
// #20250324
export const RWDMinimum = {
  name: 'RWD Minimum Demo',
  render: () => <SidebarRwdMinimumDemo />
}
// - TBD: doc
//  - Scrollable,
//  - Different shortcuts
//  - 2 variants
//  - watch out how we express right and left sidebar using composition
export const Scenario2Sidebars = {
  name: '2 Sidebars',
  render: () => <SidebarTwo />
}
// - TBD: doc
//  - key classes to make this work: overflow-hidden, max-h-[500px]
export const InWindowSidebar = {
  name: 'Sidebar in Dialog',
  render: () => <SidebarInWindowSidebar />
}

// - TBD: doc
//  - Toggle Control
//  - enableMobileSidebar
//    - You may provide ur fully customized mobile sidebar with our optional `useIsMobile` hook
//  - shortcut
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