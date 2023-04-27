# Select

[component-header:bui-select]

```html preview
<bui-select>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
  <bui-option value="option-4">Option 4</bui-option>
  <bui-option value="option-5">Option 5</bui-option>
  <bui-option value="option-6">Option 6</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
    <Option value="option-4">Option 4</Option>
    <Option value="option-5">Option 5</Option>
    <Option value="option-6">Option 6</Option>
  </SlSelect>
);
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the select an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<bui-select label="Select one">
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect label="Select one">
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
  </SlSelect>
);
```

### Help Text

Add descriptive help text to a select with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<bui-select label="Experience" help-text="Please tell us your skill level.">
  <bui-option value="1">Novice</bui-option>
  <bui-option value="2">Intermediate</bui-option>
  <bui-option value="3">Advanced</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect label="Experience" help-text="Please tell us your skill level.">
    <Option value="1">Novice</Option>
    <Option value="2">Intermediate</Option>
    <Option value="3">Advanced</Option>
  </SlSelect>
);
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<bui-select placeholder="Select one">
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect placeholder="Select one">
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
  </SlSelect>
);
```

### Clearable

Use the `clearable` attribute to make the control clearable. The clear button only appears when an option is selected.

```html preview
<bui-select clearable value="option-1">
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect placeholder="Clearable" clearable>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
  </SlSelect>
);
```

### Filled Selects

Add the `filled` attribute to draw a filled select.

```html preview
<bui-select filled>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect filled>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
  </SlSelect>
);
```

### Pill

Use the `pill` attribute to give selects rounded edges.

```html preview
<bui-select pill>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect pill>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
  </SlSelect>
);
```

### Disabled

Use the `disabled` attribute to disable a select.

```html preview
<bui-select placeholder="Disabled" disabled>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect placeholder="Disabled" disabled>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
  </SlSelect>
);
```

### Multiple

To allow multiple options to be selected, use the `multiple` attribute. It's a good practice to use `clearable` when this option is enabled. To set multiple values at once, set `value` to a space-delimited list of values.

```html preview
<bui-select label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
  <bui-option value="option-4">Option 4</bui-option>
  <bui-option value="option-5">Option 5</bui-option>
  <bui-option value="option-6">Option 6</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect label="Select a Few" value="option-1 option-2 option-3" multiple clearable>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
    <Option value="option-4">Option 4</Option>
    <Option value="option-5">Option 5</Option>
    <Option value="option-6">Option 6</Option>
  </SlSelect>
);
```

?> Note that multi-select options may wrap, causing the control to expand vertically. You can use the `max-options-visible` attribute to control the maximum number of selected options to show at once.

### Setting Initial Values

Use the `value` attribute to set the initial selection. When using `multiple`, use space-delimited values to select more than one option.

```html preview
<bui-select value="option-1 option-2" multiple clearable>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
  <bui-option value="option-4">Option 4</bui-option>
</bui-select>
```

```jsx react
import { Divider, Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect value="option-1 option-2" multiple clearable>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
  </SlSelect>
);
```

### Grouping Options

Use `<bui-divider>` to group listbox items visually. You can also use `<small>` to provide labels, but they won't be announced by most assistive devices.

```html preview
<bui-select>
  <small>Section 1</small>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
  <bui-divider></bui-divider>
  <small>Section 2</small>
  <bui-option value="option-4">Option 4</bui-option>
  <bui-option value="option-5">Option 5</bui-option>
  <bui-option value="option-6">Option 6</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
    <Option value="option-4">Option 4</Option>
    <Option value="option-5">Option 5</Option>
    <Option value="option-6">Option 6</Option>
  </SlSelect>
);
```

### Sizes

Use the `size` attribute to change a select's size. Note that size does not apply to listbox options.

```html preview
<bui-select placeholder="Small" size="small">
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>

<br />

<bui-select placeholder="Medium" size="medium">
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>

<br />

<bui-select placeholder="Large" size="large">
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <SlSelect placeholder="Small" size="small">
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
      <Option value="option-3">Option 3</Option>
    </SlSelect>

    <br />

    <SlSelect placeholder="Medium" size="medium">
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
      <Option value="option-3">Option 3</Option>
    </SlSelect>

    <br />

    <SlSelect placeholder="Large" size="large">
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
      <Option value="option-3">Option 3</Option>
    </SlSelect>
  </>
);
```

### Placement

The preferred placement of the select's listbox can be set with the `placement` attribute. Note that the actual position may vary to ensure the panel remains in the viewport. Valid placements are `top` and `bottom`.

```html preview
<bui-select placement="top">
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import {
  Option,
  SlSelect
} from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect placement="top">
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
  </Dropdown>
);
```

### Prefix Icons

Use the `prefix` slot to prepend an icon to the control.

```html preview
<bui-select placeholder="Small" size="small" clearable>
  <bui-icon name="house" slot="prefix"></bui-icon>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
<br />
<bui-select placeholder="Medium" size="medium" clearable>
  <bui-icon name="house" slot="prefix"></bui-icon>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
<br />
<bui-select placeholder="Large" size="large" clearable>
  <bui-icon name="house" slot="prefix"></bui-icon>
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2">Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import { Icon, Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <SlSelect placeholder="Small" size="small">
      <Icon name="house" slot="prefix"></Icon>
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
      <Option value="option-3">Option 3</Option>
    </SlSelect>
    <br />
    <SlSelect placeholder="Medium" size="medium">
      <Icon name="house" slot="prefix"></Icon>
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
      <Option value="option-3">Option 3</Option>
    </SlSelect>
    <br />
    <SlSelect placeholder="Large" size="large">
      <Icon name="house" slot="prefix"></Icon>
      <Option value="option-1">Option 1</Option>
      <Option value="option-2">Option 2</Option>
      <Option value="option-3">Option 3</Option>
    </SlSelect>
  </>
);
```

[component-metadata:bui-select]
