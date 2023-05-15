# Input

[component-header:bui-input]

```html preview
<bui-input></bui-input>
```

```jsx react
import { Input } from 'buckeye-ui/dist/react';

const App = () => <Input />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the input an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<bui-input label="What is your name?"></bui-input>
```

```jsx react
import { Icon, Input } from 'buckeye-ui/dist/react';

const App = () => <Input label="What is your name?" />;
```

### Datalists

Use the `list` attribute to associate the input with datalist options.

```html preview
<bui-input list="ice-cream-flavors" label="What is your favorite ice cream?"></bui-input>
<datalist id="ice-cream-flavors">
  <bui-option value="Chocolate"></bui-option>
  <bui-option value="Coconut"></bui-option>
  <bui-option value="Mint"></bui-option>
  <bui-option value="Strawberry"></bui-option>
  <bui-option value="Vanilla"></bui-option>
</datalist>
```

```jsx react
import { Icon, Input } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Input list="ice-cream-flavors" label="What is your favorite ice cream?" />
    <datalist id="ice-cream-flavors">
      <Option value="Chocolate" />
      <Option value="Coconut" />
      <Option value="Mint" />
      <Option value="Strawberry" />
      <Option value="Vanilla" />
    </datalist>
  </>
);
```

### Help Text

Add descriptive help text to an input with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<bui-input label="Nickname" help-text="What would you like people to call you?"></bui-input>
```

```jsx react
import { Icon, Input } from 'buckeye-ui/dist/react';

const App = () => <Input label="Nickname" help-text="What would you like people to call you?" />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<bui-input placeholder="Type something"></bui-input>
```

```jsx react
import { Input } from 'buckeye-ui/dist/react';

const App = () => <Input placeholder="Type something" />;
```

### Clearable

Add the `clearable` attribute to add a clear button when the input has content.

```html preview
<bui-input placeholder="Clearable" clearable></bui-input>
```

```jsx react
import { Input } from 'buckeye-ui/dist/react';

const App = () => <Input placeholder="Clearable" clearable />;
```

### Toggle Password

Add the `password-toggle` attribute to add a toggle button that will show the password when activated.

```html preview
<bui-input type="password" placeholder="Password Toggle" password-toggle></bui-input>
```

```jsx react
import { Input } from 'buckeye-ui/dist/react';

const App = () => <Input type="password" placeholder="Password Toggle" size="medium" password-toggle />;
```

### Filled Inputs

Add the `filled` attribute to draw a filled input.

```html preview
<bui-input placeholder="Type something" filled></bui-input>
```

```jsx react
import { Input } from 'buckeye-ui/dist/react';

const App = () => <Input placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable an input.

```html preview
<bui-input placeholder="Disabled" disabled></bui-input>
```

```jsx react
import { Input } from 'buckeye-ui/dist/react';

const App = () => <Input placeholder="Disabled" disabled />;
```

### Sizes

Use the `size` attribute to change an input's size.

```html preview
<bui-input placeholder="Small" size="small"></bui-input>
<br />
<bui-input placeholder="Medium" size="medium"></bui-input>
<br />
<bui-input placeholder="Large" size="large"></bui-input>
```

```jsx react
import { Input } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Input placeholder="Small" size="small" />
    <br />
    <Input placeholder="Medium" size="medium" />
    <br />
    <Input placeholder="Large" size="large" />
  </>
);
```

### Pill

Use the `pill` attribute to give inputs rounded edges.

```html preview
<bui-input placeholder="Small" size="small" pill></bui-input>
<br />
<bui-input placeholder="Medium" size="medium" pill></bui-input>
<br />
<bui-input placeholder="Large" size="large" pill></bui-input>
```

```jsx react
import { Input } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Input placeholder="Small" size="small" pill />
    <br />
    <Input placeholder="Medium" size="medium" pill />
    <br />
    <Input placeholder="Large" size="large" pill />
  </>
);
```

### Input Types

The `type` attribute controls the type of input the browser renders.

```html preview
<bui-input type="email" placeholder="Email"></bui-input>
<br />
<bui-input type="number" placeholder="Number"></bui-input>
<br />
<bui-input type="date" placeholder="Date"></bui-input>
```

```jsx react
import { Input } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Input type="email" placeholder="Email" />
    <br />
    <Input type="number" placeholder="Number" />
    <br />
    <Input type="date" placeholder="Date" />
  </>
);
```

### Prefix & Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<bui-input placeholder="Small" size="small">
  <bui-icon name="house" slot="prefix"></bui-icon>
  <bui-icon name="chat" slot="suffix"></bui-icon>
</bui-input>
<br />
<bui-input placeholder="Medium" size="medium">
  <bui-icon name="house" slot="prefix"></bui-icon>
  <bui-icon name="chat" slot="suffix"></bui-icon>
</bui-input>
<br />
<bui-input placeholder="Large" size="large">
  <bui-icon name="house" slot="prefix"></bui-icon>
  <bui-icon name="chat" slot="suffix"></bui-icon>
</bui-input>
```

```jsx react
import { Icon, Input } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Input placeholder="Small" size="small">
      <Icon name="house" slot="prefix"></Icon>
      <Icon name="chat" slot="suffix"></Icon>
    </Input>
    <br />
    <Input placeholder="Medium" size="medium">
      <Icon name="house" slot="prefix"></Icon>
      <Icon name="chat" slot="suffix"></Icon>
    </Input>
    <br />
    <Input placeholder="Large" size="large">
      <Icon name="house" slot="prefix"></Icon>
      <Icon name="chat" slot="suffix"></Icon>
    </Input>
  </>
);
```

### Customizing Label Position

Use [CSS parts](#css-parts) to customize the way form controls are drawn. This example uses CSS grid to position the label to the left of the control, but the possible orientations are nearly endless. The same technique works for inputs, textareas, radio groups, and similar form controls.

```html preview
<bui-input class="label-on-left" label="Name" help-text="Enter your name""></bui-input>
<bui-input class="label-on-left" label="Email" type="email" help-text="Enter your email"></bui-input>
<bui-textarea class="label-on-left" label="Bio" help-text="Tell us something about yourself"></bui-textarea>

<style>
  .label-on-left {
    --label-width: 3.75rem;
    --gap-width: 1rem;
  }

  .label-on-left + .label-on-left {
    margin-top: var(--bui-spacing-medium);
  }

  .label-on-left::part(form-control) {
    display: grid;
    grid: auto / var(--label-width) 1fr;
    gap: var(--bui-spacing-3x-small) var(--gap-width);
    align-items: center;
  }

  .label-on-left::part(form-control-label) {
    text-align: right;
  }

  .label-on-left::part(form-control-help-text) {
    grid-column-start: 2;
  }
</style>
```

[component-metadata:bui-input]
