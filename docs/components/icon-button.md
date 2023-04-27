# Icon Button

[component-header:bui-icon-button]

For a full list of icons that come bundled with BuckeyeUI, refer to the [icon component](/components/icon).

```html preview
<bui-icon-button name="gear" label="Settings"></bui-icon-button>
```

```jsx react
import { IconButton } from 'buckeye-ui/dist/react';

const App = () => <IconButton name="gear" label="Settings" />;
```

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html preview
<bui-icon-button name="pencil" label="Edit" style="font-size: 1.5rem;"></bui-icon-button>
<bui-icon-button name="pencil" label="Edit" style="font-size: 2rem;"></bui-icon-button>
<bui-icon-button name="pencil" label="Edit" style="font-size: 2.5rem;"></bui-icon-button>
```

```jsx react
import { IconButton } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <IconButton name="pencil" label="Edit" style={{ fontSize: '1.5rem' }} />
    <IconButton name="pencil" label="Edit" style={{ fontSize: '2rem' }} />
    <IconButton name="pencil" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html preview
<div class="icon-button-color">
  <bui-icon-button name="type-bold" label="Bold"></bui-icon-button>
  <bui-icon-button name="type-italic" label="Italic"></bui-icon-button>
  <bui-icon-button name="type-underline" label="Underline"></bui-icon-button>
</div>

<style>
  .icon-button-color bui-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color bui-icon-button::part(base):hover,
  .icon-button-color bui-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color bui-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

```jsx react
import { IconButton } from 'buckeye-ui/dist/react';

const css = `
  .icon-button-color bui-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color bui-icon-button::part(base):hover,
  .icon-button-color bui-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color bui-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <IconButton name="type-bold" label="Bold" />
      <IconButton name="type-italic" label="Italic" />
      <IconButton name="type-underline" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html preview
<bui-icon-button name="gear" label="Settings" href="https://example.com" target="_blank"></bui-icon-button>
```

```jsx react
import { IconButton } from 'buckeye-ui/dist/react';

const App = () => <IconButton name="gear" label="Settings" href="https://example.com" target="_blank" />;
```

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html preview
<bui-tooltip content="Settings">
  <bui-icon-button name="gear" label="Settings"></bui-icon-button>
</bui-tooltip>
```

```jsx react
import { IconButton, Tooltip } from 'buckeye-ui/dist/react';

const App = () => (
  <Tooltip content="Settings">
    <IconButton name="gear" label="Settings" />
  </Tooltip>
);
```

### Disabled

Use the `disabled` attribute to disable the icon button.

```html preview
<bui-icon-button name="gear" label="Settings" disabled></bui-icon-button>
```

```jsx react
import { IconButton } from 'buckeye-ui/dist/react';

const App = () => <IconButton name="gear" label="Settings" disabled />;
```

[component-metadata:bui-icon-button]
