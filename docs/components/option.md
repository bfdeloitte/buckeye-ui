# Option

[component-header:bui-option]

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
  <SlSelect>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2">Option 2</Option>
    <Option value="option-3">Option 3</Option>
  </SlSelect>
);
```

## Examples

### Disabled

Use the `disabled` attribute to disable an option and prevent it from being selected.

```html preview
<bui-select label="Select one">
  <bui-option value="option-1">Option 1</bui-option>
  <bui-option value="option-2" disabled>Option 2</bui-option>
  <bui-option value="option-3">Option 3</bui-option>
</bui-select>
```

```jsx react
import { Option, SlSelect } from 'buckeye-ui/dist/react';

const App = () => (
  <SlSelect>
    <Option value="option-1">Option 1</Option>
    <Option value="option-2" disabled>
      Option 2
    </Option>
    <Option value="option-3">Option 3</Option>
  </SlSelect>
);
```

### Prefix & Suffix

Add icons to the start and end of menu items using the `prefix` and `suffix` slots.

```html preview
<bui-select label="Select one">
  <bui-option value="option-1">
    <bui-icon slot="prefix" name="envelope"></bui-icon>
    Email
    <bui-icon slot="suffix" name="patch-check"></bui-icon>
  </bui-option>

  <bui-option value="option-2">
    <bui-icon slot="prefix" name="telephone"></bui-icon>
    Phone
    <bui-icon slot="suffix" name="patch-check"></bui-icon>
  </bui-option>

  <bui-option value="option-3">
    <bui-icon slot="prefix" name="chat-dots"></bui-icon>
    Chat
    <bui-icon slot="suffix" name="patch-check"></bui-icon>
  </bui-option>
</bui-select>
```

[component-metadata:bui-option]
