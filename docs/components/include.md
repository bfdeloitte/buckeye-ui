# Include

[component-header:bui-include]

Included files are asynchronously requested using `window.fetch()`. Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the `<bui-include>` element's default slot so it can be easily accessed and styled through the light DOM.

```html preview
<bui-include src="https://buckeyeui.com/assets/examples/include.html"></bui-include>
```

```jsx react
import { Include } from 'buckeye-ui/dist/react';

const App = () => <Include src="https://buckeyeui.com/assets/examples/include.html" />;
```

## Examples

### Listening for Events

When an include file loads successfully, the `bui-load` event will be emitted. You can listen for this event to add custom loading logic to your includes.

If the request fails, the `bui-error` event will be emitted. In this case, `event.detail.status` will contain the resulting HTTP status code of the request, e.g. 404 (not found).

```html
<bui-include src="https://buckeyeui.com/assets/examples/include.html"></bui-include>

<script>
  const include = document.querySelector('bui-include');

  include.addEventListener('bui-load', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Success');
    }
  });

  include.addEventListener('bui-error', event => {
    if (event.eventPhase === Event.AT_TARGET) {
      console.log('Error', event.detail.status);
    }
  });
</script>
```

[component-metadata:bui-include]
