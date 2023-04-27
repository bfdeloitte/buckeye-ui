# Textarea

[component-header:bui-textarea]

```html preview
<bui-textarea></bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => <Textarea />;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html preview
<bui-textarea label="Comments"></bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => <Textarea label="Comments" />;
```

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<bui-textarea label="Feedback" help-text="Please tell us what you think."> </bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => <Textarea label="Feedback" help-text="Please tell us what you think." />;
```

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html preview
<bui-textarea rows="2"></bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => <Textarea rows={2} />;
```

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html preview
<bui-textarea placeholder="Type something"></bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => <Textarea placeholder="Type something" />;
```

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html preview
<bui-textarea placeholder="Type something" filled></bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => <Textarea placeholder="Type something" filled />;
```

### Disabled

Use the `disabled` attribute to disable a textarea.

```html preview
<bui-textarea placeholder="Textarea" disabled></bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => <Textarea placeholder="Textarea" disabled />;
```

### Sizes

Use the `size` attribute to change a textarea's size.

```html preview
<bui-textarea placeholder="Small" size="small"></bui-textarea>
<br />
<bui-textarea placeholder="Medium" size="medium"></bui-textarea>
<br />
<bui-textarea placeholder="Large" size="large"></bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Textarea placeholder="Small" size="small"></Textarea>
    <br />
    <Textarea placeholder="Medium" size="medium"></Textarea>
    <br />
    <Textarea placeholder="Large" size="large"></Textarea>
  </>
);
```

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html preview
<bui-textarea resize="none"></bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => <Textarea resize="none" />;
```

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html preview
<bui-textarea resize="auto"></bui-textarea>
```

```jsx react
import { Textarea } from 'buckeye-ui/dist/react';

const App = () => <Textarea resize="auto" />;
```

[component-metadata:bui-textarea]
