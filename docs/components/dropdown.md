# Dropdown

[component-header:bui-dropdown]

Dropdowns consist of a trigger and a panel. By default, activating the trigger will expose the panel and interacting outside of the panel will close it.

Dropdowns are designed to work well with [menus](/components/menu) to provide a list of options the user can select from. However, dropdowns can also be used in lower-level applications (e.g. [color picker](/components/color-picker) and [select](/components/select)). The API gives you complete control over showing, hiding, and positioning the panel.

```html preview
<bui-dropdown>
  <bui-button slot="trigger" caret>Dropdown</bui-button>
  <bui-menu>
    <bui-menu-item>Dropdown Item 1</bui-menu-item>
    <bui-menu-item>Dropdown Item 2</bui-menu-item>
    <bui-menu-item>Dropdown Item 3</bui-menu-item>
    <bui-divider></bui-divider>
    <bui-menu-item type="checkbox" checked>Checkbox</bui-menu-item>
    <bui-menu-item disabled>Disabled</bui-menu-item>
    <bui-divider></bui-divider>
    <bui-menu-item>
      Prefix
      <bui-icon slot="prefix" name="gift"></bui-icon>
    </bui-menu-item>
    <bui-menu-item>
      Suffix Icon
      <bui-icon slot="suffix" name="heart"></bui-icon>
    </bui-menu-item>
  </bui-menu>
</bui-dropdown>
```

```jsx react
import { Button, Divider, Dropdown, Icon, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Dropdown>
    <Button slot="trigger" caret>
      Dropdown
    </Button>
    <Menu>
      <MenuItem>Dropdown Item 1</MenuItem>
      <MenuItem>Dropdown Item 2</MenuItem>
      <MenuItem>Dropdown Item 3</MenuItem>
      <Divider />
      <MenuItem type="checkbox" checked>
        Checkbox
      </MenuItem>
      <MenuItem disabled>Disabled</MenuItem>
      <Divider />
      <MenuItem>
        Prefix
        <Icon slot="prefix" name="gift" />
      </MenuItem>
      <MenuItem>
        Suffix Icon
        <Icon slot="suffix" name="heart" />
      </MenuItem>
    </Menu>
  </Dropdown>
);
```

## Examples

### Getting the Selected Item

When dropdowns are used with [menus](/components/menu), you can listen for the [`bui-select`](/components/menu#events) event to determine which menu item was selected. The menu item element will be exposed in `event.detail.item`. You can set `value` props to make it easier to identify commands.

```html preview
<div class="dropdown-selection">
  <bui-dropdown>
    <bui-button slot="trigger" caret>Edit</bui-button>
    <bui-menu>
      <bui-menu-item value="cut">Cut</bui-menu-item>
      <bui-menu-item value="copy">Copy</bui-menu-item>
      <bui-menu-item value="paste">Paste</bui-menu-item>
    </bui-menu>
  </bui-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection');
  const dropdown = container.querySelector('bui-dropdown');

  dropdown.addEventListener('bui-select', event => {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  });
</script>
```

```jsx react
import { Button, Dropdown, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => {
  function handleSelect(event) {
    const selectedItem = event.detail.item;
    console.log(selectedItem.value);
  }

  return (
    <Dropdown>
      <Button slot="trigger" caret>
        Edit
      </Button>
      <Menu onSlSelect={handleSelect}>
        <MenuItem value="cut">Cut</MenuItem>
        <MenuItem value="copy">Copy</MenuItem>
        <MenuItem value="paste">Paste</MenuItem>
      </Menu>
    </Dropdown>
  );
};
```

Alternatively, you can listen for the `click` event on individual menu items. Note that, using this approach, disabled menu items will still emit a `click` event.

```html preview
<div class="dropdown-selection-alt">
  <bui-dropdown>
    <bui-button slot="trigger" caret>Edit</bui-button>
    <bui-menu>
      <bui-menu-item value="cut">Cut</bui-menu-item>
      <bui-menu-item value="copy">Copy</bui-menu-item>
      <bui-menu-item value="paste">Paste</bui-menu-item>
    </bui-menu>
  </bui-dropdown>
</div>

<script>
  const container = document.querySelector('.dropdown-selection-alt');
  const cut = container.querySelector('bui-menu-item[value="cut"]');
  const copy = container.querySelector('bui-menu-item[value="copy"]');
  const paste = container.querySelector('bui-menu-item[value="paste"]');

  cut.addEventListener('click', () => console.log('cut'));
  copy.addEventListener('click', () => console.log('copy'));
  paste.addEventListener('click', () => console.log('paste'));
</script>
```

```jsx react
import { Button, Dropdown, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => {
  function handleCut() {
    console.log('cut');
  }

  function handleCopy() {
    console.log('copy');
  }

  function handlePaste() {
    console.log('paste');
  }

  return (
    <Dropdown>
      <Button slot="trigger" caret>
        Edit
      </Button>
      <Menu>
        <MenuItem onClick={handleCut}>Cut</MenuItem>
        <MenuItem onClick={handleCopy}>Copy</MenuItem>
        <MenuItem onClick={handlePaste}>Paste</MenuItem>
      </Menu>
    </Dropdown>
  );
};
```

### Placement

The preferred placement of the dropdown can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport.

```html preview
<bui-dropdown placement="top-start">
  <bui-button slot="trigger" caret>Edit</bui-button>
  <bui-menu>
    <bui-menu-item>Cut</bui-menu-item>
    <bui-menu-item>Copy</bui-menu-item>
    <bui-menu-item>Paste</bui-menu-item>
    <bui-divider></bui-divider>
    <bui-menu-item>Find</bui-menu-item>
    <bui-menu-item>Replace</bui-menu-item>
  </bui-menu>
</bui-dropdown>
```

```jsx react
import { Button, Divider, Dropdown, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Dropdown placement="top-start">
    <Button slot="trigger" caret>
      Edit
    </Button>
    <Menu>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <Divider />
      <MenuItem>Find</MenuItem>
      <MenuItem>Replace</MenuItem>
    </Menu>
  </Dropdown>
);
```

### Distance

The distance from the panel to the trigger can be customized using the `distance` attribute. This value is specified in pixels.

```html preview
<bui-dropdown distance="30">
  <bui-button slot="trigger" caret>Edit</bui-button>
  <bui-menu>
    <bui-menu-item>Cut</bui-menu-item>
    <bui-menu-item>Copy</bui-menu-item>
    <bui-menu-item>Paste</bui-menu-item>
    <bui-divider></bui-divider>
    <bui-menu-item>Find</bui-menu-item>
    <bui-menu-item>Replace</bui-menu-item>
  </bui-menu>
</bui-dropdown>
```

```jsx react
import { Button, Divider, Dropdown, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Dropdown distance={30}>
    <Button slot="trigger" caret>
      Edit
    </Button>
    <Menu>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <Divider />
      <MenuItem>Find</MenuItem>
      <MenuItem>Replace</MenuItem>
    </Menu>
  </Dropdown>
);
```

### Skidding

The offset of the panel along the trigger can be customized using the `skidding` attribute. This value is specified in pixels.

```html preview
<bui-dropdown skidding="30">
  <bui-button slot="trigger" caret>Edit</bui-button>
  <bui-menu>
    <bui-menu-item>Cut</bui-menu-item>
    <bui-menu-item>Copy</bui-menu-item>
    <bui-menu-item>Paste</bui-menu-item>
    <bui-divider></bui-divider>
    <bui-menu-item>Find</bui-menu-item>
    <bui-menu-item>Replace</bui-menu-item>
  </bui-menu>
</bui-dropdown>
```

```jsx react
import { Button, Divider, Dropdown, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Dropdown skidding={30}>
    <Button slot="trigger" caret>
      Edit
    </Button>
    <Menu>
      <MenuItem>Cut</MenuItem>
      <MenuItem>Copy</MenuItem>
      <MenuItem>Paste</MenuItem>
      <Divider />
      <MenuItem>Find</MenuItem>
      <MenuItem>Replace</MenuItem>
    </Menu>
  </Dropdown>
);
```

### Hoisting

Dropdown panels will be clipped if they're inside a container that has `overflow: auto|hidden`. The `hoist` attribute forces the panel to use a fixed positioning strategy, allowing it to break out of the container. In this case, the panel will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="dropdown-hoist">
  <bui-dropdown>
    <bui-button slot="trigger" caret>No Hoist</bui-button>
    <bui-menu>
      <bui-menu-item>Item 1</bui-menu-item>
      <bui-menu-item>Item 2</bui-menu-item>
      <bui-menu-item>Item 3</bui-menu-item>
    </bui-menu>
  </bui-dropdown>

  <bui-dropdown hoist>
    <bui-button slot="trigger" caret>Hoist</bui-button>
    <bui-menu>
      <bui-menu-item>Item 1</bui-menu-item>
      <bui-menu-item>Item 2</bui-menu-item>
      <bui-menu-item>Item 3</bui-menu-item>
    </bui-menu>
  </bui-dropdown>
</div>

<style>
  .dropdown-hoist {
    position: relative;
    border: solid 2px var(--bui-panel-border-color);
    padding: var(--bui-spacing-medium);
    overflow: hidden;
  }
</style>
```

```jsx react
import { Button, Divider, Dropdown, Icon, Menu, MenuItem } from 'buckeye-ui/dist/react';

const css = `
  .dropdown-hoist {
    border: solid 2px var(--bui-panel-border-color);
    padding: var(--bui-spacing-medium);
    overflow: hidden;
  }
`;

const App = () => (
  <>
    <div className="dropdown-hoist">
      <Dropdown>
        <Button slot="trigger" caret>
          No Hoist
        </Button>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </Dropdown>

      <Dropdown hoist>
        <Button slot="trigger" caret>
          Hoist
        </Button>
        <Menu>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </Dropdown>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:bui-dropdown]
