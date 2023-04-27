# Progress Bar

[component-header:bui-progress-bar]

```html preview
<bui-progress-bar value="50"></bui-progress-bar>
```

```jsx react
import { ProgressBar } from 'buckeye-ui/dist/react';

const App = () => <ProgressBar value={50} />;
```

## Examples

### Labels

Use the `label` attribute to label the progress bar and tell assistive devices how to announce it.

```html preview
<bui-progress-bar value="50" label="Upload progress"></bui-progress-bar>
```

```jsx react
import { ProgressBar } from 'buckeye-ui/dist/react';

const App = () => <ProgressBar value="50" label="Upload progress" />;
```

### Custom Height

Use the `--height` custom property to set the progress bar's height.

```html preview
<bui-progress-bar value="50" style="--height: 6px;"></bui-progress-bar>
```

```jsx react
import { ProgressBar } from 'buckeye-ui/dist/react';

const App = () => <ProgressBar value={50} style={{ '--height': '6px' }} />;
```

### Showing Values

Use the default slot to show a value.

```html preview
<bui-progress-bar value="50" class="progress-bar-values">50%</bui-progress-bar>

<br />

<bui-button circle><bui-icon name="dash" label="Decrease"></bui-icon></bui-button>
<bui-button circle><bui-icon name="plus" label="Increase"></bui-icon></bui-button>

<script>
  const progressBar = document.querySelector('.progress-bar-values');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressBar.value + 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressBar.value - 10);
    progressBar.value = value;
    progressBar.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { Button, Icon, ProgressBar } from 'buckeye-ui/dist/react';

const App = () => {
  const [value, setValue] = useState(50);

  function adjustValue(amount) {
    let newValue = value + amount;
    if (newValue < 0) newValue = 0;
    if (newValue > 100) newValue = 100;
    setValue(newValue);
  }

  return (
    <>
      <ProgressBar value={value}>{value}%</ProgressBar>

      <br />

      <Button circle onClick={() => adjustValue(-10)}>
        <Icon name="dash" label="Decrease" />
      </Button>

      <Button circle onClick={() => adjustValue(10)}>
        <Icon name="plus" label="Increase" />
      </Button>
    </>
  );
};
```

### Indeterminate

The `indeterminate` attribute can be used to inform the user that the operation is pending, but its status cannot currently be determined. In this state, `value` is ignored and the label, if present, will not be shown.

```html preview
<bui-progress-bar indeterminate></bui-progress-bar>
```

```jsx react
import { ProgressBar } from 'buckeye-ui/dist/react';

const App = () => <ProgressBar indeterminate />;
```

[component-metadata:bui-progress-bar]
