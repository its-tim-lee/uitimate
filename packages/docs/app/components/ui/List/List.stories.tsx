import VscGitDemo from '#/components/demo/list-vsc-git.tsx';
import NotionSidebarListDemo from '#/components/demo/list-notion-sidebar.tsx';
import ListIndentBasicDemo from '#/components/demo/list-indent-basic.tsx';
import ListNoIndentDemo from '#/components/demo/list-no-indent.tsx';
import ListOptionalIndentDemo from '#/components/demo/list-optional-indent.tsx';
import FirebaseSettingList1Demo from '#/components/demo/list-firebase-setting-list-1.tsx';
import InsetListDemo from '#/components/demo/list-inset.tsx'
import FirebaseSidebarListDemo from '#/components/demo/list-firebase-sidebar-list.tsx';
import ListDemo from '../../demo/list-demo.tsx';

export default {
  title: 'Example/List',
  includeStories: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}




export const DEMO = {
  name: 'DEMO',
  render: () => <ListDemo />
}

export const ListIndentBasic = {
  name: 'Scenario / List Indent Basic',
  render: () => <ListIndentBasicDemo />
}


export const InsetList = {
  name: 'Scenario / Inset List',
  render: () => <InsetListDemo />
}

export const FirebaseSettingList1 = {
  name: 'Showcase / Firebase Setting List 1',
  render: () => FirebaseSettingList1Demo()
}

export const ListNoIndent = {
  name: 'Scenario / List No Indent',
  render: () => <ListNoIndentDemo />
}

export const ListOptionalIndent = {
  name: 'Scenario / List Optional Indent',
  render: () => <ListOptionalIndentDemo />
}

// TBD: since building List can be very complicated (eg., Notion Style List), we still need to provide common scenarios of that situations for people to copy-paste.

export const VscGit = {
  name: 'Showcase / VSC Git',
  render: () => <VscGitDemo />
};


/**
 * This reveals the fact that it'd make no sense to build a collapse-to-icon feat into any relevant infra component,
 * cuz this kind of things can be very complicated in the real case, and to support such complexity while provide flexibiltiy
 * will only make the source code of the infra component extreme unnecessarily complex:
 * when implement a tricky design, it might need the consumer either do many configurations,
 * or composite tons of sub-components in certain way, both are still hard from the consumer side, frankly speaking.
 *
 * The right way is to implement such feat is on the consumer side,
 * and the recommended approach to do that is shown below.
 */
export const FirebaseSidebarList = {
  name: 'Showcase / Firebase Sidebar List',
  render: () => <FirebaseSidebarListDemo />
};

export const NotionSidebarList = {
  name: 'Showcase / Notion Sidebar List',
  render: () => <NotionSidebarListDemo />
}