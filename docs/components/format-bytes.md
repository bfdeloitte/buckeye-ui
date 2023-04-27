# Format Bytes

[component-header:bui-format-bytes]

```html preview
<div class="format-bytes-overview">
  The file is <bui-format-bytes value="1000"></bui-format-bytes> in size. <br /><br />
  <bui-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></bui-input>
</div>

<script>
  const container = document.querySelector('.format-bytes-overview');
  const formatter = container.querySelector('bui-format-bytes');
  const input = container.querySelector('bui-input');

  input.addEventListener('bui-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { Button, FormatBytes, Input } from 'buckeye-ui/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      The file is <FormatBytes value={value} /> in size.
      <br />
      <br />
      <Input
        type="number"
        value={value}
        label="Number to Format"
        style={{ maxWidth: '180px' }}
        onInput={event => setValue(event.target.value)}
      />
    </>
  );
};
```

## Examples

### Formatting Bytes

Set the `value` attribute to a number to get the value in bytes.

```html preview
<bui-format-bytes value="12"></bui-format-bytes><br />
<bui-format-bytes value="1200"></bui-format-bytes><br />
<bui-format-bytes value="1200000"></bui-format-bytes><br />
<bui-format-bytes value="1200000000"></bui-format-bytes>
```

```jsx react
import { FormatBytes } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <FormatBytes value="12" />
    <br />
    <FormatBytes value="1200" />
    <br />
    <FormatBytes value="1200000" />
    <br />
    <FormatBytes value="1200000000" />
  </>
);
```

### Formatting Bits

To get the value in bits, set the `unit` attribute to `bit`.

```html preview
<bui-format-bytes value="12" unit="bit"></bui-format-bytes><br />
<bui-format-bytes value="1200" unit="bit"></bui-format-bytes><br />
<bui-format-bytes value="1200000" unit="bit"></bui-format-bytes><br />
<bui-format-bytes value="1200000000" unit="bit"></bui-format-bytes>
```

```jsx react
import { FormatBytes } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <FormatBytes value="12" unit="bit" />
    <br />
    <FormatBytes value="1200" unit="bit" />
    <br />
    <FormatBytes value="1200000" unit="bit" />
    <br />
    <FormatBytes value="1200000000" unit="bit" />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
<bui-format-bytes value="12" lang="de"></bui-format-bytes><br />
<bui-format-bytes value="1200" lang="de"></bui-format-bytes><br />
<bui-format-bytes value="1200000" lang="de"></bui-format-bytes><br />
<bui-format-bytes value="1200000000" lang="de"></bui-format-bytes>
```

```jsx react
import { FormatBytes } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <FormatBytes value="12" lang="de" />
    <br />
    <FormatBytes value="1200" lang="de" />
    <br />
    <FormatBytes value="1200000" lang="de" />
    <br />
    <FormatBytes value="1200000000" lang="de" />
  </>
);
```

[component-metadata:bui-format-bytes]
