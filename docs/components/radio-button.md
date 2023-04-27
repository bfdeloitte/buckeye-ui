# Radio Button

[component-header:bui-radio-button]

Radio buttons are designed to be used with [radio groups](/components/radio-group). When a radio button has focus, the arrow keys can be used to change the selected option just like standard radio controls.

```html preview
<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button value="1">Option 1</bui-radio-button>
  <bui-radio-button value="2">Option 2</bui-radio-button>
  <bui-radio-button value="3">Option 3</bui-radio-button>
</bui-radio-group>
```

```jsx react
import { RadioButton, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton value="1">Option 1</RadioButton>
    <RadioButton value="2">Option 2</RadioButton>
    <RadioButton value="3">Option 3</RadioButton>
  </RadioGroup>
);
```

## Examples

### Checked States

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html preview
<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button value="1">Option 1</bui-radio-button>
  <bui-radio-button value="2">Option 2</bui-radio-button>
  <bui-radio-button value="3">Option 3</bui-radio-button>
</bui-radio-group>
```

```jsx react
import { RadioButton, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton value="1">Option 1</RadioButton>
    <RadioButton value="2">Option 2</RadioButton>
    <RadioButton value="3">Option 3</RadioButton>
  </RadioGroup>
);
```

### Disabled

Use the `disabled` attribute to disable a radio button.

```html preview
<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button value="1">Option 1</bui-radio-button>
  <bui-radio-button value="2" disabled>Option 2</bui-radio-button>
  <bui-radio-button value="3">Option 3</bui-radio-button>
</bui-radio-group>
```

```jsx react
import { RadioButton, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton value="1">Option 1</RadioButton>
    <RadioButton value="2" disabled>
      Option 2
    </RadioButton>
    <RadioButton value="3">Option 3</RadioButton>
  </RadioGroup>
);
```

### Sizes

Use the `size` attribute to change a radio button's size.

```html preview
<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button size="small" value="1">Option 1</bui-radio-button>
  <bui-radio-button size="small" value="2">Option 2</bui-radio-button>
  <bui-radio-button size="small" value="3">Option 3</bui-radio-button>
</bui-radio-group>

<br />

<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button size="medium" value="1">Option 1</bui-radio-button>
  <bui-radio-button size="medium" value="2">Option 2</bui-radio-button>
  <bui-radio-button size="medium" value="3">Option 3</bui-radio-button>
</bui-radio-group>

<br />

<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button size="large" value="1">Option 1</bui-radio-button>
  <bui-radio-button size="large" value="2">Option 2</bui-radio-button>
  <bui-radio-button size="large" value="3">Option 3</bui-radio-button>
</bui-radio-group>
```

```jsx react
import { RadioButton, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton size="small" value="1">Option 1</RadioButton>
    <RadioButton size="small" value="2">Option 2</RadioButton>
    <RadioButton size="small" value="3">Option 3</RadioButton>
  </RadioGroup>

  <br />

  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton size="medium" value="1">Option 1</RadioButton>
    <RadioButton size="medium" value="2">Option 2</RadioButton>
    <RadioButton size="medium" value="3">Option 3</RadioButton>
  </RadioGroup>

  <br />

  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton size="large" value="1">Option 1</RadioButton>
    <RadioButton size="large" value="2">Option 2</RadioButton>
    <RadioButton size="large" value="3">Option 3</RadioButton>
  </RadioGroup>
);
```

### Pill Buttons

Use the `pill` attribute to give radio buttons rounded edges.

```html preview
<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button pill size="small" value="1">Option 1</bui-radio-button>
  <bui-radio-button pill size="small" value="2">Option 2</bui-radio-button>
  <bui-radio-button pill size="small" value="3">Option 3</bui-radio-button>
</bui-radio-group>

<br />

<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button pill size="medium" value="1">Option 1</bui-radio-button>
  <bui-radio-button pill size="medium" value="2">Option 2</bui-radio-button>
  <bui-radio-button pill size="medium" value="3">Option 3</bui-radio-button>
</bui-radio-group>

<br />

<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button pill size="large" value="1">Option 1</bui-radio-button>
  <bui-radio-button pill size="large" value="2">Option 2</bui-radio-button>
  <bui-radio-button pill size="large" value="3">Option 3</bui-radio-button>
</bui-radio-group>
```

```jsx react
import { RadioButton, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton pill size="small" value="1">Option 1</RadioButton>
    <RadioButton pill size="small" value="2">Option 2</RadioButton>
    <RadioButton pill size="small" value="3">Option 3</RadioButton>
  </RadioGroup>

  <br />

  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton pill size="medium" value="1">Option 1</RadioButton>
    <RadioButton pill size="medium" value="2">Option 2</RadioButton>
    <RadioButton pill size="medium" value="3">Option 3</RadioButton>
  </RadioGroup>

  <br />

  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton pill size="large" value="1">Option 1</RadioButton>
    <RadioButton pill size="large" value="2">Option 2</RadioButton>
    <RadioButton pill size="large" value="3">Option 3</RadioButton>
  </RadioGroup>
);
```

### Prefix and Suffix Icons

Use the `prefix` and `suffix` slots to add icons.

```html preview
<bui-radio-group label="Select an option" name="a" value="1">
  <bui-radio-button value="1">
    <bui-icon slot="prefix" name="archive"></bui-icon>
    Option 1
  </bui-radio-button>

  <bui-radio-button value="2">
    <bui-icon slot="suffix" name="bag"></bui-icon>
    Option 2
  </bui-radio-button>

  <bui-radio-button value="3">
    <bui-icon slot="prefix" name="gift"></bui-icon>
    <bui-icon slot="suffix" name="cart"></bui-icon>
    Option 3
  </bui-radio-button>
</bui-radio-group>
```

```jsx react
import { Icon, RadioButton, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="1">
    <RadioButton value="1">
      <Icon slot="prefix" name="archive" />
      Option 1
    </RadioButton>

    <RadioButton value="2">
      <Icon slot="suffix" name="bag" />
      Option 2
    </RadioButton>

    <RadioButton value="3">
      <Icon slot="prefix" name="gift" />
      <Icon slot="suffix" name="cart" />
      Option 3
    </RadioButton>
  </RadioGroup>
);
```

### Buttons with Icons

You can omit button labels and use icons instead. Make sure to set a `label` attribute on each icon so screen readers will announce each option correctly.

```html preview
<bui-radio-group label="Select an option" name="a" value="neutral">
  <bui-radio-button value="angry">
    <bui-icon name="emoji-angry" label="Angry"></bui-icon>
  </bui-radio-button>

  <bui-radio-button value="sad">
    <bui-icon name="emoji-frown" label="Sad"></bui-icon>
  </bui-radio-button>

  <bui-radio-button value="neutral">
    <bui-icon name="emoji-neutral" label="Neutral"></bui-icon>
  </bui-radio-button>

  <bui-radio-button value="happy">
    <bui-icon name="emoji-smile" label="Happy"></bui-icon>
  </bui-radio-button>

  <bui-radio-button value="laughing">
    <bui-icon name="emoji-laughing" label="Laughing"></bui-icon>
  </bui-radio-button>
</bui-radio-group>
```

```jsx react
import { Icon, RadioButton, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" name="a" value="neutral">
    <RadioButton value="angry">
      <Icon name="emoji-angry" label="Angry" />
    </RadioButton>

    <RadioButton value="sad">
      <Icon name="emoji-frown" label="Sad" />
    </RadioButton>

    <RadioButton value="neutral">
      <Icon name="emoji-neutral" label="Neutral" />
    </RadioButton>

    <RadioButton value="happy">
      <Icon name="emoji-smile" label="Happy" />
    </RadioButton>

    <RadioButton value="laughing">
      <Icon name="emoji-laughing" label="Laughing" />
    </RadioButton>
  </RadioGroup>
);
```

[component-metadata:bui-radio-button]
