# Form Controls

Every BuckeyeUI component makes use of a [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) to encapsulate markup, styles, and behavior. One caveat of this approach is that native `<form>` elements do not recognize form controls located inside a shadow root.

BuckeyeUI solves this problem by using the [`formdata`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event) event, which is [available in all modern browsers](https://caniuse.com/mdn-api_htmlformelement_formdata_event). This means, when a form is submitted, BuckeyeUI form controls will automatically append their values to the `FormData` object that's used to submit the form. In most cases, things will "just work." However, if you're using a form serialization library, it might need to be adapted to recognize BuckeyeUI form controls.

?> BuckeyeUI uses event listeners to intercept the form's `formdata` and `submit` events. This allows it to inject data and trigger validation as necessary. If you're also attaching an event listener to the form, _you must attach it after BuckeyeUI form controls are connected to the DOM_, otherwise your logic will run before BuckeyeUI has a chance to inject form data and validate form controls.

## Data Serialization

Serialization is just a fancy word for collecting form data. If you're relying on standard form submissions, e.g. `<form action="...">`, you can probably skip this section. However, most modern apps use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or a library such as [axios](https://github.com/axios/axios) to submit forms using JavaScript.

The [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) interface offers a standard way to serialize forms in the browser. You can create a `FormData` object from any `<form>` element like this.

```js
const form = document.querySelector('form');
const data = new FormData(form);

// All form control data is available in a FormData object
```

However, some folks find `FormData` tricky to work with or they need to pass a JSON payload to their server. To accommodate this, BuckeyeUI offers a serialization utility that gathers form data and returns a simple JavaScript object instead.

```js
import { serialize } from 'buckeye-ui/dist/utilities/form.js';

const form = document.querySelector('form');
const data = serialize(form);

// All form control data is available in a plain object
```

This results in an object with name/value pairs that map to each form control. If more than one form control shares the same name, the values will be passed as an array, e.g. `{ name: ['value1', 'value2'] }`.

## Constraint Validation

Client-side validation can be enabled through the browser's [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation) for BuckeyeUI form controls. You can activate it using attributes such as `required`, `pattern`, `minlength`, `maxlength`, etc. BuckeyeUI implements many of the same attributes as native form controls, but check the documentation for a list of supported properties for each component.

If you don't want to use client-side validation, you can suppress this behavior by adding `novalidate` to the surrounding `<form>` element.

?> If this syntax looks unfamiliar, don't worry! Most of what you're learning on this page is platform knowledge that applies to regular form controls, too.

!> Client-side validation can be used to improve the UX of forms, but it is not a replacement for server-side validation. **You should always validate and sanitize user input on the server!**

### Required Fields

To make a field required, use the `required` attribute. Required fields will automatically receive a `*` after their labels. This is configurable through the `--bui-input-required-content` custom property.

The form will not be submitted if a required field is incomplete.

```html preview
<form class="input-validation-required">
  <bui-input name="name" label="Name" required></bui-input>
  <br />
  <bui-select label="Favorite Animal" clearable required>
    <bui-option value="birds">Birds</bui-option>
    <bui-option value="cats">Cats</bui-option>
    <bui-option value="dogs">Dogs</bui-option>
    <bui-option value="other">Other</bui-option>
  </bui-select>
  <br />
  <bui-textarea name="comment" label="Comment" required></bui-textarea>
  <br />
  <bui-checkbox required>Check me before submitting</bui-checkbox>
  <br /><br />
  <bui-button type="submit" variant="primary">Submit</bui-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-required');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { Button, Checkbox, Input, MenuItem, SlSelect, Textarea } from 'buckeye-ui/dist/react';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" label="Name" required />
      <br />
      <SlSelect label="Favorite Animal" clearable required>
        <MenuItem value="birds">Birds</MenuItem>
        <MenuItem value="cats">Cats</MenuItem>
        <MenuItem value="dogs">Dogs</MenuItem>
        <MenuItem value="other">Other</MenuItem>
      </SlSelect>
      <br />
      <Textarea name="comment" label="Comment" required></Textarea>
      <br />
      <Checkbox required>Check me before submitting</Checkbox>
      <br />
      <br />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};
```

### Input Patterns

To restrict a value to a specific [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern), use the `pattern` attribute. This example only allows the letters A-Z, so the form will not submit if a number or symbol is entered. This only works with `<bui-input>` elements.

```html preview
<form class="input-validation-pattern">
  <bui-input name="letters" required label="Letters" pattern="[A-Za-z]+"></bui-input>
  <br />
  <bui-button type="submit" variant="primary">Submit</bui-button>
  <bui-button type="reset" variant="default">Reset</bui-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-pattern');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { Button, Input } from 'buckeye-ui/dist/react';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="letters" required label="Letters" pattern="[A-Za-z]+" />
      <br />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};
```

### Input Types

Some input types will automatically trigger constraints, such as `email` and `url`.

```html preview
<form class="input-validation-type">
  <bui-input type="email" label="Email" placeholder="you@example.com" required></bui-input>
  <br />
  <bui-input type="url" label="URL" placeholder="https://example.com/" required></bui-input>
  <br />
  <bui-button type="submit" variant="primary">Submit</bui-button>
  <bui-button type="reset" variant="default">Reset</bui-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-type');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { Button, Input } from 'buckeye-ui/dist/react';

const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="email" label="Email" placeholder="you@example.com" required />
      <br />
      <Input type="url" label="URL" placeholder="https://example.com/" required />
      <br />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};
```

### Custom Error Messages

To create a custom validation error, pass a non-empty string to the `setCustomValidity()` method. This will override any existing validation constraints. The form will not be submitted when a custom validity is set and the browser will show a validation error when the containing form is submitted. To make the input valid again, call `setCustomValidity()` again with an empty string.

```html preview
<form class="input-validation-custom">
  <bui-input label="Type “buckeye”" required></bui-input>
  <br />
  <bui-button type="submit" variant="primary">Submit</bui-button>
  <bui-button type="reset" variant="default">Reset</bui-button>
</form>

<script type="module">
  const form = document.querySelector('.input-validation-custom');
  const input = form.querySelector('bui-input');

  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });

  input.addEventListener('bui-input', () => {
    if (input.value === 'buckeye') {
      input.setCustomValidity('');
    } else {
      input.setCustomValidity("Hey, you're supposed to type 'buckeye' before submitting this!");
    }
  });
</script>
```

```jsx react
import { useRef, useState } from 'react';
import { Button, Input } from 'buckeye-ui/dist/react';

const App = () => {
  const input = useRef(null);
  const [value, setValue] = useState('');

  function handleInput(event) {
    setValue(event.target.value);

    if (event.target.value === 'buckeye') {
      input.current.setCustomValidity('');
    } else {
      input.current.setCustomValidity("Hey, you're supposed to type 'buckeye' before submitting this!");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input ref={input} label="Type 'buckeye'" required value={value} onInput={handleInput} />
      <br />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};
```

?> Custom validation can be applied to any form control that supports the `setCustomValidity()` method. It is not limited to inputs and textareas.

## Custom Validation Styles

Due to the many ways form controls are used, BuckeyeUI doesn't provide out of the box validation styles for form controls as part of its default theme. Instead, the following attributes will be applied to reflect a control's validity as users interact with it. You can use them to create custom styles for any of the validation states you're interested in.

- `data-required` - the form control is required
- `data-optional` - the form control is optional
- `data-invalid` - the form control is currently invalid
- `data-valid` - the form control is currently valid
- `data-user-invalid` - the form control is currently invalid and the user has interacted with it
- `data-user-valid` - the form control is currently valid and the user has interacted with it

These attributes map to the browser's built-in pseudo classes for validation: [`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required), [`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional), [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid), [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid), and the proposed [`:user-invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid) and [`:user-valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid).

?> In the future, data attributes will be replaced with custom pseudo classes such as `:--valid` and `:--invalid`. BuckeyeUI is using data attributes as a workaround until browsers support custom states through [`ElementInternals.states`](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/states).

### Styling Invalid Form Controls

You can target validity using any of the aforementioned data attributes, but it's usually preferable to target `data-user-invalid` and `data-user-valid` since they get applied only after a user interaction such as typing or submitting. This prevents empty form controls from appearing invalid immediately, which often results in a poor user experience.

This example demonstrates custom validation styles using `data-user-invalid` and `data-user-valid`. Try Typing in the fields to see how validity changes with user input.

```html preview
<form class="validity-styles">
  <bui-input
    name="name"
    label="Name"
    help-text="What would you like people to call you?"
    autocomplete="off"
    required
  ></bui-input>

  <bui-select name="animal" label="Favorite Animal" help-text="Select the best option." clearable required>
    <bui-option value="birds">Birds</bui-option>
    <bui-option value="cats">Cats</bui-option>
    <bui-option value="dogs">Dogs</bui-option>
    <bui-option value="other">Other</bui-option>
  </bui-select>

  <bui-checkbox value="accept" required>Accept terms and conditions</bui-checkbox>

  <bui-button type="submit" variant="primary">Submit</bui-button>
  <bui-button type="reset" variant="default">Reset</bui-button>
</form>

<script type="module">
  const form = document.querySelector('.validity-styles');
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>

<style>
  .validity-styles bui-input,
  .validity-styles bui-select,
  .validity-styles bui-checkbox {
    display: block;
    margin-bottom: var(--bui-spacing-medium);
  }

  /* user invalid styles */
  .validity-styles bui-input[data-user-invalid]::part(base),
  .validity-styles bui-select[data-user-invalid]::part(combobox),
  .validity-styles bui-checkbox[data-user-invalid]::part(control) {
    border-color: var(--bui-color-danger-600);
  }

  .validity-styles [data-user-invalid]::part(form-control-label),
  .validity-styles [data-user-invalid]::part(form-control-help-text),
  .validity-styles bui-checkbox[data-user-invalid]::part(label) {
    color: var(--bui-color-danger-700);
  }

  .validity-styles bui-checkbox[data-user-invalid]::part(control) {
    outline: none;
  }

  .validity-styles bui-input:focus-within[data-user-invalid]::part(base),
  .validity-styles bui-select:focus-within[data-user-invalid]::part(combobox),
  .validity-styles bui-checkbox:focus-within[data-user-invalid]::part(control) {
    border-color: var(--bui-color-danger-600);
    box-shadow: 0 0 0 var(--bui-focus-ring-width) var(--bui-color-danger-300);
  }

  /* User valid styles */
  .validity-styles bui-input[data-user-valid]::part(base),
  .validity-styles bui-select[data-user-valid]::part(combobox),
  .validity-styles bui-checkbox[data-user-valid]::part(control) {
    border-color: var(--bui-color-success-600);
  }

  .validity-styles [data-user-valid]::part(form-control-label),
  .validity-styles [data-user-valid]::part(form-control-help-text),
  .validity-styles bui-checkbox[data-user-valid]::part(label) {
    color: var(--bui-color-success-700);
  }

  .validity-styles bui-checkbox[data-user-valid]::part(control) {
    background-color: var(--bui-color-success-600);
    outline: none;
  }

  .validity-styles bui-input:focus-within[data-user-valid]::part(base),
  .validity-styles bui-select:focus-within[data-user-valid]::part(combobox),
  .validity-styles bui-checkbox:focus-within[data-user-valid]::part(control) {
    border-color: var(--bui-color-success-600);
    box-shadow: 0 0 0 var(--bui-focus-ring-width) var(--bui-color-success-300);
  }
</style>
```

## Inline Form Validation

By default, BuckeyeUI form controls use the browser's tooltip-style error messages. No mechanism is provided to show errors inline, as there are too many opinions on how that would work when combined with native form controls and other custom elements. You can, however, implement your own solution using the following technique.

To disable the browser's error messages, you need to cancel the `bui-invalid` event. Then you can apply your own inline validation errors. This example demonstrates a primitive way to do this.

```html preview
<form class="inline-validation">
  <bui-input
    name="name"
    label="Name"
    help-text="What would you like people to call you?"
    autocomplete="off"
    required
  ></bui-input>

  <div id="name-error" aria-live="polite" hidden></div>

  <bui-button type="submit" variant="primary">Submit</bui-button>
  <bui-button type="reset" variant="default">Reset</bui-button>
</form>

<script>
  const form = document.querySelector('.inline-validation');
  const nameError = document.querySelector('#name-error');

  // A form control is invalid
  form.addEventListener(
    'bui-invalid',
    event => {
      // Suppress the browser's constraint validation message
      event.preventDefault();

      nameError.textContent = `Error: ${event.target.validationMessage}`;
      nameError.hidden = false;

      event.target.focus();
    },
    { capture: true } // you must use capture since bui-invalid doesn't bubble!
  );

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    nameError.hidden = true;
    nameError.textContent = '';
    setTimeout(() => alert('All fields are valid'), 50);
  });

  // Handle form reset
  form.addEventListener('reset', event => {
    nameError.hidden = true;
    nameError.textContent = '';
  });
</script>

<style>
  #name-error {
    font-size: var(--bui-input-help-text-font-size-medium);
    color: var(--bui-color-danger-700);
  }

  #name-error ~ bui-button {
    margin-top: var(--bui-spacing-medium);
  }

  .inline-validation bui-input {
    display: block;
  }

  /* user invalid styles */
  .inline-validation bui-input[data-user-invalid]::part(base) {
    border-color: var(--bui-color-danger-600);
  }

  .inline-validation [data-user-invalid]::part(form-control-label),
  .inline-validation [data-user-invalid]::part(form-control-help-text) {
    color: var(--bui-color-danger-700);
  }

  .inline-validation bui-input:focus-within[data-user-invalid]::part(base) {
    border-color: var(--bui-color-danger-600);
    box-shadow: 0 0 0 var(--bui-focus-ring-width) var(--bui-color-danger-300);
  }

  /* User valid styles */
  .inline-validation bui-input[data-user-valid]::part(base) {
    border-color: var(--bui-color-success-600);
  }

  .inline-validation [data-user-valid]::part(form-control-label),
  .inline-validation [data-user-valid]::part(form-control-help-text) {
    color: var(--bui-color-success-700);
  }

  .inline-validation bui-checkbox[data-user-valid]::part(control) {
    background-color: var(--bui-color-success-600);
    outline: none;
  }

  .inline-validation bui-input:focus-within[data-user-valid]::part(base) {
    border-color: var(--bui-color-success-600);
    box-shadow: 0 0 0 var(--bui-focus-ring-width) var(--bui-color-success-300);
  }
</style>
```

!> This example is meant to demonstrate the concept of providing your own error messages inline. It is not intended to scale to more complex forms. Users who want this functionality are encouraged to build a more appropriate validation solution using the techniques shown below. Depending on how you implement this feature, custom error messages may affect the accessibility of your form controls.

## Getting Associated Form Controls

At this time, using [`HTMLFormElement.elements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements) will not return BuckeyeUI form controls because the browser is unaware of their status as custom element form controls. Fortunately, BuckeyeUI provides an `elements()` function that does something very similar. However, instead of returning an [`HTMLFormControlsCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormControlsCollection), it returns an array of HTML and BuckeyeUI form controls in the order they appear in the DOM.

```js
import { getFormControls } from 'buckeye-ui/dist/utilities/form.js';

const form = document.querySelector('#my-form');
const formControls = getFormControls(form);

console.log(formControls); // e.g. [input, bui-input, ...]
```

?> You probably don't need this function! If you're gathering form data for submission, you probably want to use [Data Serialization](#data-serializing) instead.
