# Progress Ring

[component-header:bui-progress-ring]

```html preview
<bui-progress-ring value="25"></bui-progress-ring>
```

```jsx react
import { ProgressRing } from 'buckeye-ui/dist/react';

const App = () => <ProgressRing value="25" />;
```

## Examples

### Size

Use the `--size` custom property to set the diameter of the progress ring.

```html preview
<bui-progress-ring value="50" style="--size: 200px;"></bui-progress-ring>
```

```jsx react
import { ProgressRing } from 'buckeye-ui/dist/react';

const App = () => <ProgressRing value="50" style={{ '--size': '200px' }} />;
```

### Track and Indicator Width

Use the `--track-width` and `--indicator-width` custom properties to set the width of the progress ring's track and indicator.

```html preview
<bui-progress-ring value="50" style="--track-width: 6px; --indicator-width: 12px;"></bui-progress-ring>
```

```jsx react
import { ProgressRing } from 'buckeye-ui/dist/react';

const App = () => <ProgressRing value="50" style={{ '--track-width': '6px', '--indicator-width': '12px' }} />;
```

### Colors

To change the color, use the `--track-color` and `--indicator-color` custom properties.

```html preview
<bui-progress-ring
  value="50"
  style="
    --track-color: pink;
    --indicator-color: deeppink;
  "
></bui-progress-ring>
```

```jsx react
import { ProgressRing } from 'buckeye-ui/dist/react';

const App = () => (
  <ProgressRing
    value="50"
    style={{
      '--track-color': 'pink',
      '--indicator-color': 'deeppink'
    }}
  />
);
```

### Labels

Use the `label` attribute to label the progress ring and tell assistive devices how to announce it.

```html preview
<bui-progress-ring value="50" label="Upload progress"></bui-progress-ring>
```

```jsx react
import { ProgressRing } from 'buckeye-ui/dist/react';

const App = () => <ProgressRing value="50" label="Upload progress" />;
```

### Showing Values

Use the default slot to show a label inside the progress ring.

```html preview
<bui-progress-ring value="50" class="progress-ring-values" style="margin-bottom: .5rem;">50%</bui-progress-ring>

<br />

<bui-button circle><bui-icon name="dash" label="Decrease"></bui-icon></bui-button>
<bui-button circle><bui-icon name="plus" label="Increase"></bui-icon></bui-button>

<script>
  const progressRing = document.querySelector('.progress-ring-values');
  const subtractButton = progressRing.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const value = Math.min(100, progressRing.value + 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });

  subtractButton.addEventListener('click', () => {
    const value = Math.max(0, progressRing.value - 10);
    progressRing.value = value;
    progressRing.textContent = `${value}%`;
  });
</script>
```

```jsx react
import { useState } from 'react';
import { Button, Icon, ProgressRing } from 'buckeye-ui/dist/react';

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
      <ProgressRing value={value} style={{ marginBottom: '.5rem' }}>
        {value}%
      </ProgressRing>

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

[component-metadata:bui-progress-ring]
