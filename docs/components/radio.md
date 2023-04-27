# Radio

[component-header:bui-radio]

Radios are designed to be used with [radio groups](/components/radio-group).

```html preview
<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio value="1">Option 1</bui-radio>
  <bui-radio value="2">Option 2</bui-radio>
  <bui-radio value="3">Option 3</bui-radio>
</bui-radio-group>
```

```jsx react
import { Radio, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="1">
    <Radio value="1">Option 1</Radio>
    <Radio value="2">Option 2</Radio>
    <Radio value="3">Option 3</Radio>
  </RadioGroup>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html preview
<bui-radio-group label="Select an option" name="a" value="3">
  <bui-radio value="1">Option 1</bui-radio>
  <bui-radio value="2">Option 2</bui-radio>
  <bui-radio value="3">Option 3</bui-radio>
</bui-radio-group>
```

```jsx react
import { Radio, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="3">
    <Radio value="1">Option 1</Radio>
    <Radio value="2">Option 2</Radio>
    <Radio value="3">Option 3</Radio>
  </RadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio.

```html preview
<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio value="1">Option 1</bui-radio>
  <bui-radio value="2" disabled>Option 2</bui-radio>
  <bui-radio value="3">Option 3</bui-radio>
</bui-radio-group>
```

```jsx react
import { Radio, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="1">
    <Radio value="1">Option 1</Radio>
    <Radio value="2" disabled>
      Option 2
    </Radio>
    <Radio value="3">Option 3</Radio>
  </RadioGroup>
);
```

## Sizes

Use the `size` attribute to change a radio's size.

```html preview
<bui-radio size="small">Small</bui-radio>
<bui-radio size="medium">Medium</bui-radio>
<bui-radio size="large">Large</bui-radio>
```

```jsx react
import { Radio } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Radio size="small">Small</Radio>
    <br />
    <Radio size="medium">Medium</Radio>
    <br />
    <Radio size="large">Large</Radio>
  </>
);
```

[component-metadata:bui-radio]
