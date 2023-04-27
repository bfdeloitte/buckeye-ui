# Menu Label

[component-header:bui-menu-label]

```html preview
<bui-menu style="max-width: 200px;">
  <bui-menu-label>Fruits</bui-menu-label>
  <bui-menu-item value="apple">Apple</bui-menu-item>
  <bui-menu-item value="banana">Banana</bui-menu-item>
  <bui-menu-item value="orange">Orange</bui-menu-item>
  <bui-divider></bui-divider>
  <bui-menu-label>Vegetables</bui-menu-label>
  <bui-menu-item value="broccoli">Broccoli</bui-menu-item>
  <bui-menu-item value="carrot">Carrot</bui-menu-item>
  <bui-menu-item value="zucchini">Zucchini</bui-menu-item>
</bui-menu>
```

```jsx react
import { Divider, Menu, MenuLabel, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Menu style={{ maxWidth: '200px' }}>
    <MenuLabel>Fruits</MenuLabel>
    <MenuItem value="apple">Apple</MenuItem>
    <MenuItem value="banana">Banana</MenuItem>
    <MenuItem value="orange">Orange</MenuItem>
    <Divider />
    <MenuLabel>Vegetables</MenuLabel>
    <MenuItem value="broccoli">Broccoli</MenuItem>
    <MenuItem value="carrot">Carrot</MenuItem>
    <MenuItem value="zucchini">Zucchini</MenuItem>
  </Menu>
);
```

[component-metadata:bui-menu-label]
