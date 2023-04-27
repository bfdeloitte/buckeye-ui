# Format Date

[component-header:bui-format-date]

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html preview
<!-- BuckeyeUI creation date 🎉 -->
<bui-format-date date="2023-04-26T02:37:00-04:00"></bui-format-date>
```

```jsx react
import { FormatDate } from 'buckeye-ui/dist/react';

const App = () => <FormatDate date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html preview
<!-- Human-readable date -->
<bui-format-date month="long" day="numeric" year="numeric"></bui-format-date><br />

<!-- Time -->
<bui-format-date hour="numeric" minute="numeric"></bui-format-date><br />

<!-- Weekday -->
<bui-format-date weekday="long"></bui-format-date><br />

<!-- Month -->
<bui-format-date month="long"></bui-format-date><br />

<!-- Year -->
<bui-format-date year="numeric"></bui-format-date><br />

<!-- No formatting options -->
<bui-format-date></bui-format-date>
```

```jsx react
import { FormatDate } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    {/* Human-readable date */}
    <FormatDate month="long" day="numeric" year="numeric" />
    <br />

    {/* Time */}
    <FormatDate hour="numeric" minute="numeric" />
    <br />

    {/* Weekday */}
    <FormatDate weekday="long" />
    <br />

    {/* Month */}
    <FormatDate month="long" />
    <br />

    {/* Year */}
    <FormatDate year="numeric" />
    <br />

    {/* No formatting options */}
    <FormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html preview
<bui-format-date hour="numeric" minute="numeric" hour-format="12"></bui-format-date><br />
<bui-format-date hour="numeric" minute="numeric" hour-format="24"></bui-format-date>
```

```jsx react
import { FormatDate } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <FormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <FormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html preview
English: <bui-format-date lang="en"></bui-format-date><br />
French: <bui-format-date lang="fr"></bui-format-date><br />
Russian: <bui-format-date lang="ru"></bui-format-date>
```

```jsx react
import { FormatDate } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    English: <FormatDate lang="en" />
    <br />
    French: <FormatDate lang="fr" />
    <br />
    Russian: <FormatDate lang="ru" />
  </>
);
```

[component-metadata:bui-format-date]
