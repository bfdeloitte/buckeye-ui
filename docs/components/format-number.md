# Format Number

[component-header:bui-format-number]

Localization is handled by the browser's [`Intl.NumberFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). No language packs are required.

```html preview
<div class="format-number-overview">
  <bui-format-number value="1000"></bui-format-number>
  <br /><br />
  <bui-input type="number" value="1000" label="Number to Format" style="max-width: 180px;"></bui-input>
</div>

<script>
  const container = document.querySelector('.format-number-overview');
  const formatter = container.querySelector('bui-format-number');
  const input = container.querySelector('bui-input');

  input.addEventListener('bui-input', () => (formatter.value = input.value || 0));
</script>
```

```jsx react
import { useState } from 'react';
import { FormatNumber, Input } from 'buckeye-ui/dist/react';

const App = () => {
  const [value, setValue] = useState(1000);

  return (
    <>
      <FormatNumber value={value} />
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

### Percentages

To get the value as a percent, set the `type` attribute to `percent`.

```html preview
<bui-format-number type="percent" value="0"></bui-format-number><br />
<bui-format-number type="percent" value="0.25"></bui-format-number><br />
<bui-format-number type="percent" value="0.50"></bui-format-number><br />
<bui-format-number type="percent" value="0.75"></bui-format-number><br />
<bui-format-number type="percent" value="1"></bui-format-number>
```

```jsx react
import { FormatNumber } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <FormatNumber type="percent" value={0} />
    <br />
    <FormatNumber type="percent" value={0.25} />
    <br />
    <FormatNumber type="percent" value={0.5} />
    <br />
    <FormatNumber type="percent" value={0.75} />
    <br />
    <FormatNumber type="percent" value={1} />
  </>
);
```

### Localization

Use the `lang` attribute to set the number formatting locale.

```html preview
English: <bui-format-number value="2000" lang="en" minimum-fraction-digits="2"></bui-format-number><br />
German: <bui-format-number value="2000" lang="de" minimum-fraction-digits="2"></bui-format-number><br />
Russian: <bui-format-number value="2000" lang="ru" minimum-fraction-digits="2"></bui-format-number>
```

```jsx react
import { FormatNumber } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    English: <FormatNumber value="2000" lang="en" minimum-fraction-digits="2" />
    <br />
    German: <FormatNumber value="2000" lang="de" minimum-fraction-digits="2" />
    <br />
    Russian: <FormatNumber value="2000" lang="ru" minimum-fraction-digits="2" />
  </>
);
```

### Currency

To format a number as a monetary value, set the `type` attribute to `currency` and set the `currency` attribute to the desired ISO 4217 currency code. You should also specify `lang` to ensure the the number is formatted correctly for the target locale.

```html preview
<bui-format-number type="currency" currency="USD" value="2000" lang="en-US"></bui-format-number><br />
<bui-format-number type="currency" currency="GBP" value="2000" lang="en-GB"></bui-format-number><br />
<bui-format-number type="currency" currency="EUR" value="2000" lang="de"></bui-format-number><br />
<bui-format-number type="currency" currency="RUB" value="2000" lang="ru"></bui-format-number><br />
<bui-format-number type="currency" currency="CNY" value="2000" lang="zh-cn"></bui-format-number>
```

```jsx react
import { FormatNumber } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <FormatNumber type="currency" currency="USD" value="2000" lang="en-US" />
    <br />
    <FormatNumber type="currency" currency="GBP" value="2000" lang="en-GB" />
    <br />
    <FormatNumber type="currency" currency="EUR" value="2000" lang="de" />
    <br />
    <FormatNumber type="currency" currency="RUB" value="2000" lang="ru" />
    <br />
    <FormatNumber type="currency" currency="CNY" value="2000" lang="zh-cn" />
  </>
);
```

[component-metadata:bui-format-number]
