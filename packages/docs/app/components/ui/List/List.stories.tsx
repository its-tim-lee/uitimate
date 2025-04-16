
import CollapsibleV1Demo from '#/components/demo/list-optional-indent-v1.tsx';
import CollapsibleV2Demo from '#/components/demo/list-optional-indent-v2.tsx';
import CollapsibleV3Demo from '#/components/demo/list-optional-indent-v3.tsx';
import ListOptionalIndentV4Demo from '#/components/demo/list-optional-indent-v4.tsx';
import VscGitDemo from '#/components/demo/list-vsc-git.tsx';
import NotionSidebarListDemo from '#/components/demo/list-notion-sidebar.tsx';
import ListIndentBasicDemo from '#/components/demo/list-indent-border.tsx';
import FirebaseSettingList1Demo from '#/components/demo/list-firebase-setting-list-1.tsx';
import InsetListDemo from '#/components/demo/list-inset.tsx'
import FirebaseSidebarListDemo from '#/components/demo/list-firebase-sidebar-list.tsx';
import ListDemo from '#/components/demo/list-demo.tsx';
import type { Meta } from '@storybook/react';

export default {
  title: 'Example/List',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta


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

export const CollapsibleV3 = {
  name: 'Scenario / Collapsible v3',
  render: () => <CollapsibleV3Demo />
}

export const CollapsibleV2 = {
  name: 'Scenario / Collapsible v2',
  render: () => <CollapsibleV2Demo />
}

export const CollapsibleV1 = {
  name: 'Scenario / Collapsible v1',
  render: () => <CollapsibleV1Demo />
}

export const CollapsibleV4 = {
  name: 'Scenario / Collapsible v4',
  render: () => <ListOptionalIndentV4Demo />
}

export const VscGit = {
  name: 'Showcase / VSC Git',
  render: () => <VscGitDemo />
};

export const FirebaseSidebarList = {
  name: 'Showcase / Firebase Sidebar List',
  render: () => <FirebaseSidebarListDemo />
};

export const NotionSidebarList = {
  name: 'Showcase / Notion Sidebar List',
  render: () => <NotionSidebarListDemo />
}