# Radio Group

[component-header:bui-radio-group]

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

## Examples

### Help Text

Add descriptive help text to a radio group with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html preview
<bui-radio-group label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
  <bui-radio value="1">Option 1</bui-radio>
  <bui-radio value="2">Option 2</bui-radio>
  <bui-radio value="3">Option 3</bui-radio>
</bui-radio-group>
```

```jsx react
import { Radio, RadioGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <RadioGroup label="Select an option" help-text="Choose the most appropriate option." name="a" value="1">
    <Radio value="1">Option 1</Radio>
    <Radio value="2">Option 2</Radio>
    <Radio value="3">Option 3</Radio>
  </RadioGroup>
);
```

### Radio Buttons

[Radio buttons](/components/radio-button) offer an alternate way to display radio controls. In this case, an internal [button group](/components/button-group) is used to group the buttons into a single, cohesive control.

```html preview
<bui-radio-group label="Select an option" help-text="Select an option that makes you proud." name="a" value="1">
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

### Disabling Options

Radios and radio buttons can be disabled by adding the `disabled` attribute to the respective options inside the radio group.

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

### Validation

Setting the `required` attribute to make selecting an option mandatory. If a value has not been selected, it will prevent the form from submitting and display an error message.

```html preview
<form class="validation">
  <bui-radio-group label="Select an option" name="a" required>
    <bui-radio value="1">Option 1</bui-radio>
    <bui-radio value="2">Option 2</bui-radio>
    <bui-radio value="3">Option 3</bui-radio>
  </bui-radio-group>
  <br />
  <bui-button type="submit" variant="primary">Submit</bui-button>
</form>

<script>
  const form = document.querySelector('.validation');

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { Button, Icon, Radio, RadioGroup } from 'buckeye-ui/dist/react';
const App = () => {
  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <RadioGroup label="Select an option" name="a" required onChange={handleChange}>
        <Radio value="1">
          Option 1
        </Radio>
        <Radiovalue="2">
          Option 2
        </Radio>
        <Radio value="3">
          Option 3
        </Radio>
      </RadioGroup>
      <br />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};
```

### Custom Validity

Use the `setCustomValidity()` method to set a custom validation message. This will prevent the form from submitting and make the browser display the error message you provide. To clear the error, call this function with an empty string.

```html preview
<form class="custom-validity">
  <bui-radio-group label="Select an option" name="a" value="1">
    <bui-radio value="1">Not me</bui-radio>
    <bui-radio value="2">Me neither</bui-radio>
    <bui-radio value="3">Choose me</bui-radio>
  </bui-radio-group>
  <br />
  <bui-button type="submit" variant="primary">Submit</bui-button>
</form>

<script>
  const form = document.querySelector('.custom-validity');
  const radioGroup = form.querySelector('bui-radio-group');
  const errorMessage = 'You must choose the last option';

  // Set initial validity as soon as the element is defined
  customElements.whenDefined('bui-radio').then(() => {
    radioGroup.setCustomValidity(errorMessage);
  });

  // Update validity when a selection is made
  form.addEventListener('bui-change', () => {
    const isValid = radioGroup.value === '3';
    radioGroup.setCustomValidity(isValid ? '' : errorMessage);
  });

  // Handle form submit
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('All fields are valid!');
  });
</script>
```

```jsx react
import { useEffect, useRef } from 'react';
import { Button, Icon, Radio, RadioGroup } from 'buckeye-ui/dist/react';
const App = () => {
  const radioGroup = useRef(null);
  const errorMessage = 'You must choose this option';

  function handleChange() {
    radioGroup.current.setCustomValidity(radioGroup.current.value === '3' ? '' : errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('All fields are valid!');
  }

  useEffect(() => {
    radio.current.setCustomValidity(errorMessage);
  }, []);

  return (
    <form class="custom-validity" onSubmit={handleSubmit}>
      <RadioGroup ref={radioGroup} label="Select an option" name="a" value="1" onChange={handleChange}>
        <Radio value="1">Not me</Radio>
        <Radio value="2">Me neither</Radio>
        <Radio value="3">Choose me</Radio>
      </RadioGroup>
      <br />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};
```

[component-metadata:bui-radio-group]
