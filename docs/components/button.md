# Button

[component-header:bui-button]

```html preview
<bui-button>Button</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => <Button>Button</Button>;
```

## Examples

### Variants

Use the `variant` attribute to set the button's variant.

```html preview
<bui-button variant="default">Default</bui-button>
<bui-button variant="primary">Primary</bui-button>
<bui-button variant="success">Success</bui-button>
<bui-button variant="neutral">Neutral</bui-button>
<bui-button variant="warning">Warning</bui-button>
<bui-button variant="danger">Danger</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button variant="default">Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="success">Success</Button>
    <Button variant="neutral">Neutral</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="danger">Danger</Button>
  </>
);
```

### Sizes

Use the `size` attribute to change a button's size.

```html preview
<bui-button size="small">Small</bui-button>
<bui-button size="medium">Medium</bui-button>
<bui-button size="large">Large</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
  </>
);
```

### Outline Buttons

Use the `outline` attribute to draw outlined buttons with transparent backgrounds.

```html preview
<bui-button variant="default" outline>Default</bui-button>
<bui-button variant="primary" outline>Primary</bui-button>
<bui-button variant="success" outline>Success</bui-button>
<bui-button variant="neutral" outline>Neutral</bui-button>
<bui-button variant="warning" outline>Warning</bui-button>
<bui-button variant="danger" outline>Danger</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button variant="default" outline>
      Default
    </Button>
    <Button variant="primary" outline>
      Primary
    </Button>
    <Button variant="success" outline>
      Success
    </Button>
    <Button variant="neutral" outline>
      Neutral
    </Button>
    <Button variant="warning" outline>
      Warning
    </Button>
    <Button variant="danger" outline>
      Danger
    </Button>
  </>
);
```

### Pill Buttons

Use the `pill` attribute to give buttons rounded edges.

```html preview
<bui-button size="small" pill>Small</bui-button>
<bui-button size="medium" pill>Medium</bui-button>
<bui-button size="large" pill>Large</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button size="small" pill>
      Small
    </Button>
    <Button size="medium" pill>
      Medium
    </Button>
    <Button size="large" pill>
      Large
    </Button>
  </>
);
```

### Circle Buttons

Use the `circle` attribute to create circular icon buttons. When this attribute is set, the button expects a single `<bui-icon>` in the default slot.

```html preview
<bui-button variant="default" size="small" circle>
  <bui-icon name="gear" label="Settings"></bui-icon>
</bui-button>

<bui-button variant="default" size="medium" circle>
  <bui-icon name="gear" label="Settings"></bui-icon>
</bui-button>

<bui-button variant="default" size="large" circle>
  <bui-icon name="gear" label="Settings"></bui-icon>
</bui-button>
```

```jsx react
import { Button, Icon } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button variant="default" size="small" circle>
      <Icon name="gear" />
    </Button>
    <Button variant="default" size="medium" circle>
      <Icon name="gear" />
    </Button>
    <Button variant="default" size="large" circle>
      <Icon name="gear" />
    </Button>
  </>
);
```

### Text Buttons

Use the `text` variant to create text buttons that share the same size as regular buttons but don't have backgrounds or borders.

```html preview
<bui-button variant="text" size="small">Text</bui-button>
<bui-button variant="text" size="medium">Text</bui-button>
<bui-button variant="text" size="large">Text</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button variant="text" size="small">
      Text
    </Button>
    <Button variant="text" size="medium">
      Text
    </Button>
    <Button variant="text" size="large">
      Text
    </Button>
  </>
);
```

### Link Buttons

It's often helpful to have a button that works like a link. This is possible by setting the `href` attribute, which will make the component render an `<a>` under the hood. This gives you all the default link behavior the browser provides (e.g. <kbd>CMD/CTRL/SHIFT + CLICK</kbd>) and exposes the `target` and `download` attributes.

```html preview
<bui-button href="https://example.com/">Link</bui-button>
<bui-button href="https://example.com/" target="_blank">New Window</bui-button>
<bui-button href="/assets/images/buckeyeui.png" download="buckeyeui.png">Download</bui-button>
<bui-button href="https://example.com/" disabled>Disabled</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button href="https://example.com/">Link</Button>
    <Button href="https://example.com/" target="_blank">
      New Window
    </Button>
    <Button href="/assets/images/buckeyeui.png" download="buckeyeui.png">
      Download
    </Button>
    <Button href="https://example.com/" disabled>
      Disabled
    </Button>
  </>
);
```

?> When a `target` is set, the link will receive `rel="noreferrer noopener"` for [security reasons](https://mathiasbynens.github.io/rel-noopener/).

### Setting a Custom Width

As expected, buttons can be given a custom width by setting the `width` attribute. This is useful for making buttons span the full width of their container on smaller screens.

```html preview
<bui-button variant="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</bui-button>
<bui-button variant="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</bui-button>
<bui-button variant="default" size="large" style="width: 100%;">Large</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button variant="default" size="small" style={{ width: '100%', marginBottom: '1rem' }}>
      Small
    </Button>
    <Button variant="default" size="medium" style={{ width: '100%', marginBottom: '1rem' }}>
      Medium
    </Button>
    <Button variant="default" size="large" style={{ width: '100%' }}>
      Large
    </Button>
  </>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<bui-button variant="default" size="small">
  <bui-icon slot="prefix" name="gear"></bui-icon>
  Settings
</bui-button>

<bui-button variant="default" size="small">
  <bui-icon slot="suffix" name="arrow-counterclockwise"></bui-icon>
  Refresh
</bui-button>

<bui-button variant="default" size="small">
  <bui-icon slot="prefix" name="link-45deg"></bui-icon>
  <bui-icon slot="suffix" name="box-arrow-up-right"></bui-icon>
  Open
</bui-button>

<br /><br />

<bui-button variant="default">
  <bui-icon slot="prefix" name="gear"></bui-icon>
  Settings
</bui-button>

<bui-button variant="default">
  <bui-icon slot="suffix" name="arrow-counterclockwise"></bui-icon>
  Refresh
</bui-button>

<bui-button variant="default">
  <bui-icon slot="prefix" name="link-45deg"></bui-icon>
  <bui-icon slot="suffix" name="box-arrow-up-right"></bui-icon>
  Open
</bui-button>

<br /><br />

<bui-button variant="default" size="large">
  <bui-icon slot="prefix" name="gear"></bui-icon>
  Settings
</bui-button>

<bui-button variant="default" size="large">
  <bui-icon slot="suffix" name="arrow-counterclockwise"></bui-icon>
  Refresh
</bui-button>

<bui-button variant="default" size="large">
  <bui-icon slot="prefix" name="link-45deg"></bui-icon>
  <bui-icon slot="suffix" name="box-arrow-up-right"></bui-icon>
  Open
</bui-button>
```

```jsx react
import { Button, Icon } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button variant="default" size="small">
      <Icon slot="prefix" name="gear"></Icon>
      Settings
    </Button>

    <Button variant="default" size="small">
      <Icon slot="suffix" name="arrow-counterclockwise"></Icon>
      Refresh
    </Button>

    <Button variant="default" size="small">
      <Icon slot="prefix" name="link-45deg"></Icon>
      <Icon slot="suffix" name="box-arrow-up-right"></Icon>
      Open
    </Button>

    <br />
    <br />

    <Button variant="default">
      <Icon slot="prefix" name="gear"></Icon>
      Settings
    </Button>

    <Button variant="default">
      <Icon slot="suffix" name="arrow-counterclockwise"></Icon>
      Refresh
    </Button>

    <Button variant="default">
      <Icon slot="prefix" name="link-45deg"></Icon>
      <Icon slot="suffix" name="box-arrow-up-right"></Icon>
      Open
    </Button>

    <br />
    <br />

    <Button variant="default" size="large">
      <Icon slot="prefix" name="gear"></Icon>
      Settings
    </Button>

    <Button variant="default" size="large">
      <Icon slot="suffix" name="arrow-counterclockwise"></Icon>
      Refresh
    </Button>

    <Button variant="default" size="large">
      <Icon slot="prefix" name="link-45deg"></Icon>
      <Icon slot="suffix" name="box-arrow-up-right"></Icon>
      Open
    </Button>
  </>
);
```

### Caret

Use the `caret` attribute to add a dropdown indicator when a button will trigger a dropdown, menu, or popover.

```html preview
<bui-button size="small" caret>Small</bui-button>
<bui-button size="medium" caret>Medium</bui-button>
<bui-button size="large" caret>Large</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button size="small" caret>
      Small
    </Button>
    <Button size="medium" caret>
      Medium
    </Button>
    <Button size="large" caret>
      Large
    </Button>
  </>
);
```

### Loading

Use the `loading` attribute to make a button busy. The width will remain the same as before, preventing adjacent elements from moving around. Clicks will be suppressed until the loading state is removed.

```html preview
<bui-button variant="default" loading>Default</bui-button>
<bui-button variant="primary" loading>Primary</bui-button>
<bui-button variant="success" loading>Success</bui-button>
<bui-button variant="neutral" loading>Neutral</bui-button>
<bui-button variant="warning" loading>Warning</bui-button>
<bui-button variant="danger" loading>Danger</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button variant="default" loading>
      Default
    </Button>
    <Button variant="primary" loading>
      Primary
    </Button>
    <Button variant="success" loading>
      Success
    </Button>
    <Button variant="neutral" loading>
      Neutral
    </Button>
    <Button variant="warning" loading>
      Warning
    </Button>
    <Button variant="danger" loading>
      Danger
    </Button>
  </>
);
```

### Disabled

Use the `disabled` attribute to disable a button. Clicks will be suppressed until the disabled state is removed.

```html preview
<bui-button variant="default" disabled>Default</bui-button>
<bui-button variant="primary" disabled>Primary</bui-button>
<bui-button variant="success" disabled>Success</bui-button>
<bui-button variant="neutral" disabled>Neutral</bui-button>
<bui-button variant="warning" disabled>Warning</bui-button>
<bui-button variant="danger" disabled>Danger</bui-button>
```

```jsx react
import { Button } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Button variant="default" disabled>
      Default
    </Button>

    <Button variant="primary" disabled>
      Primary
    </Button>

    <Button variant="success" disabled>
      Success
    </Button>

    <Button variant="neutral" disabled>
      Neutral
    </Button>

    <Button variant="warning" disabled>
      Warning
    </Button>

    <Button variant="danger" disabled>
      Danger
    </Button>
  </>
);
```

### Styling Buttons

This example demonstrates how to style buttons using a custom class. This is the recommended approach if you need to add additional variations. To customize an existing variation, modify the selector to target the button's `variant` attribute instead of a class (e.g. `bui-button[variant="primary"]`).

```html preview
<bui-button class="pink">Pink Button</bui-button>

<style>
  bui-button.pink::part(base) {
    /* Set design tokens for height and border width */
    --bui-input-height-medium: 48px;
    --bui-input-border-width: 4px;

    border-radius: 0;
    background-color: #ff1493;
    border-top-color: #ff7ac1;
    border-left-color: #ff7ac1;
    border-bottom-color: #ad005c;
    border-right-color: #ad005c;
    color: white;
    font-size: 1.125rem;
    box-shadow: 0 2px 10px #0002;
    transition: var(--bui-transition-medium) transform ease, var(--bui-transition-medium) border ease;
  }

  bui-button.pink::part(base):hover {
    transform: scale(1.05) rotate(-1deg);
  }

  bui-button.pink::part(base):active {
    border-top-color: #ad005c;
    border-right-color: #ff7ac1;
    border-bottom-color: #ff7ac1;
    border-left-color: #ad005c;
    transform: scale(1.05) rotate(-1deg) translateY(2px);
  }

  bui-button.pink::part(base):focus-visible {
    outline: dashed 2px deeppink;
    outline-offset: 4px;
  }
</style>
```

[component-metadata:bui-button]
