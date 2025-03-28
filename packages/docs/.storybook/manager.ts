// import { addons } from '@storybook/addons';
// import { create } from '@storybook/theming';
import { addons } from '@storybook/manager-api';
// or in older docs you might see '@storybook/addons', but in v8+ use '@storybook/manager-api'

addons.setConfig({
  // showToolbar: false,
  // other config here
});
// addons.setConfig({
//   showToolbar: false,   // <-- Hide the top toolbar
//   theme: create({
//     // ...your theme customizations...
//   }),
// });
import { sidebarTogglable } from './lib/toggling-sidebar';
sidebarTogglable()