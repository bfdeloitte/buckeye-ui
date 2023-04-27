# Menu

[component-header:bui-menu]

You can use [menu items](/components/menu-item), [menu labels](/components/menu-label), and [dividers](/components/divider) to compose a menu. Menus support keyboard interactions, including type-to-select an option.

```html preview
<bui-menu style="max-width: 200px;">
  <bui-menu-item value="undo">Undo</bui-menu-item>
  <bui-menu-item value="redo">Redo</bui-menu-item>
  <bui-divider></bui-divider>
  <bui-menu-item value="cut">Cut</bui-menu-item>
  <bui-menu-item value="copy">Copy</bui-menu-item>
  <bui-menu-item value="paste">Paste</bui-menu-item>
  <bui-menu-item value="delete">Delete</bui-menu-item>
</bui-menu>
```

```jsx react
import { Divider, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Menu style={{ maxWidth: '200px' }}>
    <MenuItem value="undo">Undo</MenuItem>
    <MenuItem value="redo">Redo</MenuItem>
    <Divider />
    <MenuItem value="cut">Cut</MenuItem>
    <MenuItem value="copy">Copy</MenuItem>
    <MenuItem value="paste">Paste</MenuItem>
    <MenuItem value="delete">Delete</MenuItem>
  </Menu>
);
```

?> Menus are intended for system menus (dropdown menus, select menus, context menus, etc.). They should not be mistaken for navigation menus which serve a different purpose and have a different semantic meaning. If you're building navigation, use `<nav>` and `<a>` elements instead.

[component-metadata:bui-menu]
