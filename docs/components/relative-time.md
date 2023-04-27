# Relative Time

[component-header:bui-relative-time]

Localization is handled by the browser's [`Intl.RelativeTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat). No language packs are required.

```html preview
<!-- BuckeyeUI creation date 🎉 -->
<bui-relative-time date="2023-04-26T02:37:00-04:00"></bui-relative-time>
```

```jsx react
import { RelativeTime } from 'buckeye-ui/dist/react';

const App = () => <RelativeTime date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines when the date/time is calculated from. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript.

?> When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.

## Examples

### Keeping Time in Sync

Use the `sync` attribute to update the displayed value automatically as time passes.

```html preview
<div class="relative-time-sync">
  <bui-relative-time sync></bui-relative-time>
</div>

<script>
  const container = document.querySelector('.relative-time-sync');
  const relativeTime = container.querySelector('bui-relative-time');

  relativeTime.date = new Date(new Date().getTime() - 60000);
</script>
```

```jsx react
import { RelativeTime } from 'buckeye-ui/dist/react';

const date = new Date(new Date().getTime() - 60000);

const App = () => <RelativeTime date={date} sync />;
```

### Formatting Styles

You can change how the time is displayed using the `format` attribute. Note that some locales may display the same values for `narrow` and `short` formats.

```html preview
<bui-relative-time date="2020-07-15T09:17:00-04:00" format="narrow"></bui-relative-time><br />
<bui-relative-time date="2020-07-15T09:17:00-04:00" format="short"></bui-relative-time><br />
<bui-relative-time date="2020-07-15T09:17:00-04:00" format="long"></bui-relative-time>
```

```jsx react
import { RelativeTime } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <RelativeTime date="2020-07-15T09:17:00-04:00" format="narrow" />
    <br />
    <RelativeTime date="2020-07-15T09:17:00-04:00" format="short" />
    <br />
    <RelativeTime date="2020-07-15T09:17:00-04:00" format="long" />
  </>
);
```

### Localization

Use the `lang` attribute to set the desired locale.

```html preview
English: <bui-relative-time date="2020-07-15T09:17:00-04:00" lang="en-US"></bui-relative-time><br />
Chinese: <bui-relative-time date="2020-07-15T09:17:00-04:00" lang="zh-CN"></bui-relative-time><br />
German: <bui-relative-time date="2020-07-15T09:17:00-04:00" lang="de"></bui-relative-time><br />
Greek: <bui-relative-time date="2020-07-15T09:17:00-04:00" lang="el"></bui-relative-time><br />
Russian: <bui-relative-time date="2020-07-15T09:17:00-04:00" lang="ru"></bui-relative-time>
```

```jsx react
import { RelativeTime } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    English: <RelativeTime date="2020-07-15T09:17:00-04:00" lang="en-US" />
    <br />
    Chinese: <RelativeTime date="2020-07-15T09:17:00-04:00" lang="zh-CN" />
    <br />
    German: <RelativeTime date="2020-07-15T09:17:00-04:00" lang="de" />
    <br />
    Greek: <RelativeTime date="2020-07-15T09:17:00-04:00" lang="el" />
    <br />
    Russian: <RelativeTime date="2020-07-15T09:17:00-04:00" lang="ru" />
  </>
);
```

[component-metadata:bui-relative-time]
