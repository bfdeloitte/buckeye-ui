# Checkbox

[component-header:bui-checkbox]

```html preview
<bui-checkbox>Checkbox</bui-checkbox>
```

```jsx react
import { Checkbox } from 'buckeye-ui/dist/react';

const App = () => <Checkbox>Checkbox</Checkbox>;
```

?> This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.

## Examples

### Checked

Use the `checked` attribute to activate the checkbox.

```html preview
<bui-checkbox checked>Checked</bui-checkbox>
```

```jsx react
import { Checkbox } from 'buckeye-ui/dist/react';

const App = () => <Checkbox checked>Checked</Checkbox>;
```

### Indeterminate

Use the `indeterminate` attribute to make the checkbox indeterminate.

```html preview
<bui-checkbox indeterminate>Indeterminate</bui-checkbox>
```

```jsx react
import { Checkbox } from 'buckeye-ui/dist/react';

const App = () => <Checkbox indeterminate>Indeterminate</Checkbox>;
```

### Disabled

Use the `disabled` attribute to disable the checkbox.

```html preview
<bui-checkbox disabled>Disabled</bui-checkbox>
```

```jsx react
import { Checkbox } from 'buckeye-ui/dist/react';

const App = () => <Checkbox disabled>Disabled</Checkbox>;
```

## Sizes

Use the `size` attribute to change a checkbox's size.

```html preview
<bui-checkbox size="small">Small</bui-checkbox>
<br />
<bui-checkbox size="medium">Medium</bui-checkbox>
<br />
<bui-checkbox size="large">Large</bui-checkbox>
```

```jsx react
import { Checkbox } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Checkbox size="small">Small</Checkbox>
    <br />
    <Checkbox size="medium">Medium</Checkbox>
    <br />
    <Checkbox size="large">Large</Checkbox>
  </>
);
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <bui-checkbox>Check me</bui-checkbox>
  <br />
  <bui-button type="submit" variant="primary" style="margin-top: 1rem;">Submit</bui-button>
</form>
<script>
  const form = document.querySelector('.custom-validity');
  const checkbox = form.querySelector('bui-checkbox');
  const errorMessage = `Don't forget to check me!`;

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('bui-checkbox').then(async () => {
    await checkbox.updateComplete;
    checkbox.setCustomValidity(errorMessage);
  });

  // Update validity on change
  checkbox.addEventListener('bui-change', () => {
    checkbox.setCustomValidity(checkbox.checked ? '' : errorMessage);
  });

  // Handle submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { Button, Checkbox } from 'buckeye-ui/dist/react';

const App = () => {
  const checkbox = useRef(null);
  const errorMessage = `Don't forget to check me!`;

  function handleChange() {
    checkbox.current.setCustomValidity(checkbox.current.checked ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    checkbox.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <Checkbox ref={checkbox} onChange={handleChange}>
        Check me
      </Checkbox>
      <br />
      <Button type="submit" variant="primary" style={{ marginTop: '1rem' }}>
        Submit
      </Button>
    </form>
  );
};
```

[component-metadata:bui-checkbox]
