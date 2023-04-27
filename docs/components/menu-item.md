# Menu Item

[component-header:bui-menu-item]

```html preview
<bui-menu style="max-width: 200px;">
  <bui-menu-item>Option 1</bui-menu-item>
  <bui-menu-item>Option 2</bui-menu-item>
  <bui-menu-item>Option 3</bui-menu-item>
  <bui-divider></bui-divider>
  <bui-menu-item type="checkbox" checked>Checkbox</bui-menu-item>
  <bui-menu-item disabled>Disabled</bui-menu-item>
  <bui-divider></bui-divider>
  <bui-menu-item>
    Prefix Icon
    <bui-icon slot="prefix" name="gift"></bui-icon>
  </bui-menu-item>
  <bui-menu-item>
    Suffix Icon
    <bui-icon slot="suffix" name="heart"></bui-icon>
  </bui-menu-item>
</bui-menu>
```

```jsx react
import { Divider, Icon, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Menu style={{ maxWidth: '200px' }}>
    <MenuItem>Option 1</MenuItem>
    <MenuItem>Option 2</MenuItem>
    <MenuItem>Option 3</MenuItem>
    <Divider />
    <MenuItem type="checkbox" checked>
      Checkbox
    </MenuItem>
    <MenuItem disabled>Disabled</MenuItem>
    <Divider />
    <MenuItem>
      Prefix Icon
      <Icon slot="prefix" name="gift" />
    </MenuItem>
    <MenuItem>
      Suffix Icon
      <Icon slot="suffix" name="heart" />
    </MenuItem>
  </Menu>
);
```

## Examples

### Disabled

Add the `disabled` attribute to disable the menu item so it cannot be selected.

```html preview
<bui-menu style="max-width: 200px;">
  <bui-menu-item>Option 1</bui-menu-item>
  <bui-menu-item disabled>Option 2</bui-menu-item>
  <bui-menu-item>Option 3</bui-menu-item>
</bui-menu>
```

```jsx react
import { Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Menu style={{ maxWidth: '200px' }}>
    <MenuItem>Option 1</MenuItem>
    <MenuItem disabled>Option 2</MenuItem>
    <MenuItem>Option 3</MenuItem>
  </Menu>
);
```

### Prefix & Suffix

Add content to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<bui-menu style="max-width: 200px;">
  <bui-menu-item>
    <bui-icon slot="prefix" name="house"></bui-icon>
    Home
  </bui-menu-item>

  <bui-menu-item>
    <bui-icon slot="prefix" name="envelope"></bui-icon>
    Messages
    <bui-badge slot="suffix" variant="primary" pill>12</bui-badge>
  </bui-menu-item>

  <bui-divider></bui-divider>

  <bui-menu-item>
    <bui-icon slot="prefix" name="gear"></bui-icon>
    Settings
  </bui-menu-item>
</bui-menu>
```

```jsx react
import { Badge, Divider, Icon, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Menu style={{ maxWidth: '200px' }}>
    <MenuItem>
      <Icon slot="prefix" name="house" />
      Home
    </MenuItem>

    <MenuItem>
      <Icon slot="prefix" name="envelope" />
      Messages
      <Badge slot="suffix" variant="primary" pill>
        12
      </Badge>
    </MenuItem>

    <Divider />

    <MenuItem>
      <Icon slot="prefix" name="gear" />
      Settings
    </MenuItem>
  </Menu>
);
```

### Checkbox Menu Items

Set the `type` attribute to `checkbox` to create a menu item that will toggle on and off when selected. You can use the `checked` attribute to set the initial state.

Checkbox menu items are visually indistinguishable from regular menu items. Their ability to be toggled is primarily inferred from context, much like you'd find in the menu of a native app.

```html preview
<bui-menu style="max-width: 200px;">
  <bui-menu-item type="checkbox">Autosave</bui-menu-item>
  <bui-menu-item type="checkbox" checked>Check Spelling</bui-menu-item>
  <bui-menu-item type="checkbox">Word Wrap</bui-menu-item>
</bui-menu>
```

```jsx react
import { Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Menu style={{ maxWidth: '200px' }}>
    <MenuItem type="checkbox">Autosave</MenuItem>
    <MenuItem type="checkbox" checked>
      Check Spelling
    </MenuItem>
    <MenuItem type="checkbox">Word Wrap</MenuItem>
  </Menu>
);
```

### Value & Selection

The `value` attribute can be used to assign a hidden value, such as a unique identifier, to a menu item. When an item is selected, the `bui-select` event will be emitted and a reference to the item will be available at `event.detail.item`. You can use this reference to access the selected item's value, its checked state, and more.

```html preview
<bui-menu class="menu-value" style="max-width: 200px;">
  <bui-menu-item value="opt-1">Option 1</bui-menu-item>
  <bui-menu-item value="opt-2">Option 2</bui-menu-item>
  <bui-menu-item value="opt-3">Option 3</bui-menu-item>
  <bui-divider></bui-divider>
  <bui-menu-item type="checkbox" value="opt-4">Checkbox 4</bui-menu-item>
  <bui-menu-item type="checkbox" value="opt-5">Checkbox 5</bui-menu-item>
  <bui-menu-item type="checkbox" value="opt-6">Checkbox 6</bui-menu-item>
</bui-menu>

<script>
  const menu = document.querySelector('.menu-value');

  menu.addEventListener('bui-select', event => {
    const item = event.detail.item;

    // Log value
    if (item.type === 'checkbox') {
      console.log(`Selected value: ${item.value} (${item.checked ? 'checked' : 'unchecked'})`);
    } else {
      console.log(`Selected value: ${item.value}`);
    }
  });
</script>
```

```jsx react
import { Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => {
  function handleSelect(event) {
    const item = event.detail.item;

    // Toggle checked state
    item.checked = !item.checked;

    // Log value
    console.log(`Selected value: ${item.value}`);
  }

  return (
    <Menu style={{ maxWidth: '200px' }} onSlSelect={handleSelect}>
      <MenuItem value="opt-1">Option 1</MenuItem>
      <MenuItem value="opt-2">Option 2</MenuItem>
      <MenuItem value="opt-3">Option 3</MenuItem>
    </Menu>
  );
};
```

[component-metadata:bui-menu-item]
