# Badge

[component-header:bui-badge]

```html preview
<bui-badge>Badge</bui-badge>
```

```jsx react
import { Badge } from 'buckeye-ui/dist/react';

const App = () => <Badge>Badge</Badge>;
```

## Examples

### Variants

Set the `variant` attribute to change the badge's variant.

```html preview
<bui-badge variant="primary">Primary</bui-badge>
<bui-badge variant="success">Success</bui-badge>
<bui-badge variant="neutral">Neutral</bui-badge>
<bui-badge variant="warning">Warning</bui-badge>
<bui-badge variant="danger">Danger</bui-badge>
```

```jsx react
import { Badge } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Badge variant="primary">Primary</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="neutral">Neutral</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="danger">Danger</Badge>
  </>
);
```

### Pill Badges

Use the `pill` attribute to give badges rounded edges.

```html preview
<bui-badge variant="primary" pill>Primary</bui-badge>
<bui-badge variant="success" pill>Success</bui-badge>
<bui-badge variant="neutral" pill>Neutral</bui-badge>
<bui-badge variant="warning" pill>Warning</bui-badge>
<bui-badge variant="danger" pill>Danger</bui-badge>
```

```jsx react
import { Badge } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Badge variant="primary" pill>
      Primary
    </Badge>
    <Badge variant="success" pill>
      Success
    </Badge>
    <Badge variant="neutral" pill>
      Neutral
    </Badge>
    <Badge variant="warning" pill>
      Warning
    </Badge>
    <Badge variant="danger" pill>
      Danger
    </Badge>
  </>
);
```

### Pulsating Badges

Use the `pulse` attribute to draw attention to the badge with a subtle animation.

```html preview
<div class="badge-pulse">
  <bui-badge variant="primary" pill pulse>1</bui-badge>
  <bui-badge variant="success" pill pulse>1</bui-badge>
  <bui-badge variant="neutral" pill pulse>1</bui-badge>
  <bui-badge variant="warning" pill pulse>1</bui-badge>
  <bui-badge variant="danger" pill pulse>1</bui-badge>
</div>

<style>
  .badge-pulse bui-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
</style>
```

```jsx react
import { Badge } from 'buckeye-ui/dist/react';

const css = `
  .badge-pulse bui-badge:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const App = () => (
  <>
    <div className="badge-pulse">
      <Badge variant="primary" pill pulse>
        1
      </Badge>
      <Badge variant="success" pill pulse>
        1
      </Badge>
      <Badge variant="neutral" pill pulse>
        1
      </Badge>
      <Badge variant="warning" pill pulse>
        1
      </Badge>
      <Badge variant="danger" pill pulse>
        1
      </Badge>
    </div>

    <style>{css}</style>
  </>
);
```

### With Buttons

One of the most common use cases for badges is attaching them to buttons. To make this easier, badges will be automatically positioned at the top-right when they're a child of a button.

```html preview
<bui-button>
  Requests
  <bui-badge pill>30</bui-badge>
</bui-button>

<bui-button style="margin-inline-start: 1rem;">
  Warnings
  <bui-badge variant="warning" pill>8</bui-badge>
</bui-button>

<bui-button style="margin-inline-start: 1rem;">
  Errors
  <bui-badge variant="danger" pill>6</bui-badge>
</bui-button>
```

```jsx react
import { Badge, Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button>
      Requests
      <Badge pill>30</Badge>
    </Button>

    <Button style={{ marginInlineStart: '1rem' }}>
      Warnings
      <Badge variant="warning" pill>
        8
      </Badge>
    </Button>

    <Button style={{ marginInlineStart: '1rem' }}>
      Errors
      <Badge variant="danger" pill>
        6
      </Badge>
    </Button>
  </>
);
```

### With Menu Items

When including badges in menu items, use the `suffix` slot to make sure they're aligned correctly.

```html preview
<bui-menu style="max-width: 240px;">
  <bui-menu-label>Messages</bui-menu-label>
  <bui-menu-item>Comments <bui-badge slot="suffix" variant="neutral" pill>4</bui-badge></bui-menu-item>
  <bui-menu-item>Replies <bui-badge slot="suffix" variant="neutral" pill>12</bui-badge></bui-menu-item>
</bui-menu>
```

```jsx react
import { Badge, Button, Menu, MenuItem, MenuLabel } from 'buckeye-ui/dist/react';

const App = () => (
  <Menu
    style={{
      maxWidth: '240px',
      border: 'solid 1px var(--bui-panel-border-color)',
      borderRadius: 'var(--bui-border-radius-medium)'
    }}
  >
    <MenuLabel>Messages</MenuLabel>
    <MenuItem>
      Comments
      <Badge slot="suffix" variant="neutral" pill>
        4
      </Badge>
    </MenuItem>
    <MenuItem>
      Replies
      <Badge slot="suffix" variant="neutral" pill>
        12
      </Badge>
    </MenuItem>
  </Menu>
);
```

[component-metadata:bui-badge]
