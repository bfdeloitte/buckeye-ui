# Divider

[component-header:bui-divider]

```html preview
<bui-divider></bui-divider>
```

```jsx react
import { Divider } from 'buckeye-ui/dist/react';

const App = () => <Divider />;
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html preview
<bui-divider style="--width: 4px;"></bui-divider>
```

```jsx react
import { Divider } from 'buckeye-ui/dist/react';

const App = () => <Divider style={{ '--width': '4px' }} />;
```

### Color

Use the `--color` custom property to change the color of the divider.

```html preview
<bui-divider style="--color: tomato;"></bui-divider>
```

```jsx react
import { Divider } from 'buckeye-ui/dist/react';

const App = () => <Divider style={{ '--color': 'tomato' }} />;
```

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html preview
<div style="text-align: center;">
  Above
  <bui-divider style="--spacing: 2rem;"></bui-divider>
  Below
</div>
```

```jsx react
import { Divider } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    Above
    <Divider style={{ '--spacing': '2rem' }} />
    Below
  </>
);
```

### Vertical

Add the `vertical` attribute to draw the divider in a vertical orientation. The divider will span the full height of its container. Vertical dividers work especially well inside of a flex container.

```html preview
<div style="display: flex; align-items: center; height: 2rem;">
  First
  <bui-divider vertical></bui-divider>
  Middle
  <bui-divider vertical></bui-divider>
  Last
</div>
```

```jsx react
import { Divider } from 'buckeye-ui/dist/react';

const App = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      height: '2rem'
    }}
  >
    First
    <Divider vertical />
    Middle
    <Divider vertical />
    Last
  </div>
);
```

### Menu Dividers

Use dividers in [menus](/components/menu) to visually group menu items.

```html preview
<bui-menu style="max-width: 200px;">
  <bui-menu-item value="1">Option 1</bui-menu-item>
  <bui-menu-item value="2">Option 2</bui-menu-item>
  <bui-menu-item value="3">Option 3</bui-menu-item>
  <bui-divider></bui-divider>
  <bui-menu-item value="4">Option 4</bui-menu-item>
  <bui-menu-item value="5">Option 5</bui-menu-item>
  <bui-menu-item value="6">Option 6</bui-menu-item>
</bui-menu>
```

```jsx react
import { Divider, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Menu style={{ maxWidth: '200px' }}>
    <MenuItem value="1">Option 1</MenuItem>
    <MenuItem value="2">Option 2</MenuItem>
    <MenuItem value="3">Option 3</MenuItem>
    <bui-divider />
    <MenuItem value="4">Option 4</MenuItem>
    <MenuItem value="5">Option 5</MenuItem>
    <MenuItem value="6">Option 6</MenuItem>
  </Menu>
);
```

[component-metadata:bui-divider]
