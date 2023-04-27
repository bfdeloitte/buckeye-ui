# Switch

[component-header:bui-switch]

```html preview
<bui-switch>Switch</bui-switch>
```

```jsx react
import { SlSwitch } from 'buckeye-ui/dist/react';

const App = () => <SlSwitch>Switch</SlSwitch>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html preview
<bui-switch checked>Checked</bui-switch>
```

```jsx react
import { SlSwitch } from 'buckeye-ui/dist/react';

const App = () => <SlSwitch checked>Checked</SlSwitch>;
```

### Disabled

Use the `disabled` attribute to disable the switch.

```html preview
<bui-switch disabled>Disabled</bui-switch>
```

```jsx react
import { SlSwitch } from 'buckeye-ui/dist/react';

const App = () => <SlSwitch disabled>Disabled</SlSwitch>;
```

## Sizes

Use the `size` attribute to change a switch's size.

```html preview
<bui-switch size="small">Small</bui-switch>
<br />
<bui-switch size="medium">Medium</bui-switch>
<br />
<bui-switch size="large">Large</bui-switch>
```

```jsx react
import { SlSwitch } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <SlSwitch size="small">Small</SlSwitch>
    <br />
    <SlSwitch size="medium">Medium</SlSwitch>
    <br />
    <SlSwitch size="large">Large</SlSwitch>
  </>
);
```

### Custom Styles

Use the available custom properties to change how the switch is styled.

```html preview
<bui-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</bui-switch>
```

```jsx react
import { SlSwitch } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```

[component-metadata:bui-switch]
