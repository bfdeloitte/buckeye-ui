# Resize Observer

[component-header:bui-resize-observer]

The resize observer will report changes to the dimensions of the elements it wraps through the `bui-resize` event. When emitted, a collection of [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) objects will be attached to `event.detail` that contains the target element and information about its dimensions.

```html preview
<div class="resize-observer-overview">
  <bui-resize-observer>
    <div>Resize this box and watch the console 👉</div>
  </bui-resize-observer>
</div>

<script>
  const container = document.querySelector('.resize-observer-overview');
  const resizeObserver = container.querySelector('bui-resize-observer');

  resizeObserver.addEventListener('bui-resize', event => {
    console.log(event.detail);
  });
</script>

<style>
  .resize-observer-overview div {
    display: flex;
    border: solid 2px var(--bui-input-border-color);
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
</style>
```

```jsx react
import { ResizeObserver } from 'buckeye-ui/dist/react';

const css = `
  .resize-observer-overview div {
    display: flex; 
    border: solid 2px var(--bui-input-border-color); 
    align-items: center; 
    justify-content: center;
    text-align: center;
    padding: 4rem 2rem;
  }
`;

const App = () => (
  <>
    <div className="resize-observer-overview">
      <ResizeObserver onResize={event => console.log(event.detail)}>
        <div>Resize this box and watch the console 👉</div>
      </ResizeObserver>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:bui-resize-observer]
