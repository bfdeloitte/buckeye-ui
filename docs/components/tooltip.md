# Tooltip

[component-header:bui-tooltip]

A tooltip's target is its _first child element_, so you should only wrap one element inside of the tooltip. If you need the tooltip to show up for multiple elements, nest them inside a container first.

Tooltips use `display: contents` so they won't interfere with how elements are positioned in a flex or grid layout.

```html preview
<bui-tooltip content="This is a tooltip">
  <bui-button>Hover Me</bui-button>
</bui-tooltip>
```

```jsx react
import { Button, Tooltip } from 'buckeye-ui/dist/react';

const App = () => (
  <Tooltip content="This is a tooltip">
    <Button>Hover Me</Button>
  </Tooltip>
);
```

## Examples

### Placement

Use the `placement` attribute to set the preferred placement of the tooltip.

```html preview
<div class="tooltip-placement-example">
  <div class="tooltip-placement-example-row">
    <bui-tooltip content="top-start" placement="top-start">
      <bui-button></bui-button>
    </bui-tooltip>

    <bui-tooltip content="top" placement="top">
      <bui-button></bui-button>
    </bui-tooltip>

    <bui-tooltip content="top-end" placement="top-end">
      <bui-button></bui-button>
    </bui-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <bui-tooltip content="left-start" placement="left-start">
      <bui-button></bui-button>
    </bui-tooltip>

    <bui-tooltip content="right-start" placement="right-start">
      <bui-button></bui-button>
    </bui-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <bui-tooltip content="left" placement="left">
      <bui-button></bui-button>
    </bui-tooltip>

    <bui-tooltip content="right" placement="right">
      <bui-button></bui-button>
    </bui-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <bui-tooltip content="left-end" placement="left-end">
      <bui-button></bui-button>
    </bui-tooltip>

    <bui-tooltip content="right-end" placement="right-end">
      <bui-button></bui-button>
    </bui-tooltip>
  </div>

  <div class="tooltip-placement-example-row">
    <bui-tooltip content="bottom-start" placement="bottom-start">
      <bui-button></bui-button>
    </bui-tooltip>

    <bui-tooltip content="bottom" placement="bottom">
      <bui-button></bui-button>
    </bui-tooltip>

    <bui-tooltip content="bottom-end" placement="bottom-end">
      <bui-button></bui-button>
    </bui-tooltip>
  </div>
</div>

<style>
  .tooltip-placement-example {
    width: 250px;
    margin: 1rem;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example bui-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) bui-tooltip:first-child bui-button,
  .tooltip-placement-example-row:nth-child(5) bui-tooltip:first-child bui-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) bui-tooltip:nth-child(2) bui-button,
  .tooltip-placement-example-row:nth-child(3) bui-tooltip:nth-child(2) bui-button,
  .tooltip-placement-example-row:nth-child(4) bui-tooltip:nth-child(2) bui-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
</style>
```

```jsx react
import { Button, Tooltip } from 'buckeye-ui/dist/react';

const css = `
  .tooltip-placement-example {
    width: 250px;
  }

  .tooltip-placement-example-row:after {
    content: '';
    display: table;
    clear: both;
  }

  .tooltip-placement-example bui-button {
    float: left;
    width: 2.5rem;
    margin-right: 0.25rem;
    margin-bottom: 0.25rem;
  }

  .tooltip-placement-example-row:nth-child(1) bui-tooltip:first-child bui-button,
  .tooltip-placement-example-row:nth-child(5) bui-tooltip:first-child bui-button {
    margin-left: calc(40px + 0.25rem);
  }

  .tooltip-placement-example-row:nth-child(2) bui-tooltip:nth-child(2) bui-button,
  .tooltip-placement-example-row:nth-child(3) bui-tooltip:nth-child(2) bui-button,
  .tooltip-placement-example-row:nth-child(4) bui-tooltip:nth-child(2) bui-button {
    margin-left: calc((40px * 3) + (0.25rem * 3));
  }
`;

const App = () => (
  <>
    <div className="tooltip-placement-example">
      <div className="tooltip-placement-example-row">
        <Tooltip content="top-start" placement="top-start">
          <Button />
        </Tooltip>

        <Tooltip content="top" placement="top">
          <Button />
        </Tooltip>

        <Tooltip content="top-end" placement="top-end">
          <Button />
        </Tooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <Tooltip content="left-start" placement="left-start">
          <Button />
        </Tooltip>

        <Tooltip content="right-start" placement="right-start">
          <Button />
        </Tooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <Tooltip content="left" placement="left">
          <Button />
        </Tooltip>

        <Tooltip content="right" placement="right">
          <Button />
        </Tooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <Tooltip content="left-end" placement="left-end">
          <Button />
        </Tooltip>

        <Tooltip content="right-end" placement="right-end">
          <Button />
        </Tooltip>
      </div>

      <div className="tooltip-placement-example-row">
        <Tooltip content="bottom-start" placement="bottom-start">
          <Button />
        </Tooltip>

        <Tooltip content="bottom" placement="bottom">
          <Button />
        </Tooltip>

        <Tooltip content="bottom-end" placement="bottom-end">
          <Button />
        </Tooltip>
      </div>
    </div>

    <style>{css}</style>
  </>
);
```

### Click Trigger

Set the `trigger` attribute to `click` to toggle the tooltip on click instead of hover.

```html preview
<bui-tooltip content="Click again to dismiss" trigger="click">
  <bui-button>Click to Toggle</bui-button>
</bui-tooltip>
```

```jsx react
import { Button, Tooltip } from 'buckeye-ui/dist/react';

const App = () => (
  <Tooltip content="Click again to dismiss" trigger="click">
    <Button>Click to Toggle</Button>
  </Tooltip>
);
```

### Manual Trigger

Tooltips can be controller programmatically by setting the `trigger` attribute to `manual`. Use the `open` attribute to control when the tooltip is shown.

```html preview
<bui-button style="margin-right: 4rem;">Toggle Manually</bui-button>

<bui-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <bui-avatar label="User"></bui-avatar>
</bui-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>
```

```jsx react
import { useState } from 'react';
import { Avatar, Button, Tooltip } from 'buckeye-ui/dist/react';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button style={{ marginRight: '4rem' }} onClick={() => setOpen(!open)}>
        Toggle Manually
      </Button>

      <Tooltip open={open} content="This is an avatar" trigger="manual">
        <Avatar />
      </Tooltip>
    </>
  );
};
```

### Removing Arrows

You can control the size of tooltip arrows by overriding the `--bui-tooltip-arrow-size` design token. To remove them, set the value to `0` as shown below.

```html preview
<bui-tooltip content="This is a tooltip" style="--bui-tooltip-arrow-size: 0;">
  <bui-button>No Arrow</bui-button>
</bui-tooltip>
```

```jsx react
import { Button, Tooltip } from 'buckeye-ui/dist/react';

const App = () => (
  <div style={{ '--bui-tooltip-arrow-size': '0' }}>
    <Tooltip content="This is a tooltip">
      <Button>Above</Button>
    </Tooltip>

    <Tooltip content="This is a tooltip" placement="bottom">
      <Button>Below</Button>
    </Tooltip>
  </div>
);
```

To override it globally, set it in a root block in your stylesheet after the BuckeyeUI stylesheet is loaded.

```css
:root {
  --bui-tooltip-arrow-size: 0;
}
```

### HTML in Tooltips

Use the `content` slot to create tooltips with HTML content. Tooltips are designed only for text and presentational elements. Avoid placing interactive content, such as buttons, links, and form controls, in a tooltip.

```html preview
<bui-tooltip>
  <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>

  <bui-button>Hover me</bui-button>
</bui-tooltip>
```

```jsx react
import { Button, Tooltip } from 'buckeye-ui/dist/react';

const App = () => (
  <Tooltip>
    <div slot="content">
      I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!
    </div>

    <Button>Hover Me</Button>
  </Tooltip>
);
```

### Setting a Maximum Width

Use the `--max-width` custom property to change the width the tooltip can grow to before wrapping occurs.

```html preview
<bui-tooltip style="--max-width: 80px;" content="This tooltip will wrap after only 80 pixels.">
  <bui-button>Hover me</bui-button>
</bui-tooltip>
```

```jsx react
import { Button, Tooltip } from 'buckeye-ui/dist/react';

const App = () => (
  <Tooltip style={{ '--max-width': '80px' }} content="This tooltip will wrap after only 80 pixels.">
    <Button>Hover Me</Button>
  </Tooltip>
);
```

### Hoisting

Tooltips will be clipped if they're inside a container that has `overflow: auto|hidden|scroll`. The `hoist` attribute forces the tooltip to use a fixed positioning strategy, allowing it to break out of the container. In this case, the tooltip will be positioned relative to its containing block, which is usually the viewport unless an ancestor uses a `transform`, `perspective`, or `filter`. [Refer to this page](https://developer.mozilla.org/en-US/docs/Web/CSS/position#fixed) for more details.

```html preview
<div class="tooltip-hoist">
  <bui-tooltip content="This is a tooltip">
    <bui-button>No Hoist</bui-button>
  </bui-tooltip>

  <bui-tooltip content="This is a tooltip" hoist>
    <bui-button>Hoist</bui-button>
  </bui-tooltip>
</div>

<style>
  .tooltip-hoist {
    position: relative;
    border: solid 2px var(--bui-panel-border-color);
    overflow: hidden;
    padding: var(--bui-spacing-medium);
  }
</style>
```

```jsx react
import { Button, Tooltip } from 'buckeye-ui/dist/react';

const css = `
  .tooltip-hoist {
    border: solid 2px var(--bui-panel-border-color);
    overflow: hidden;
    padding: var(--bui-spacing-medium);
    position: relative;
  }
`;

const App = () => (
  <>
    <div class="tooltip-hoist">
      <Tooltip content="This is a tooltip">
        <Button>No Hoist</Button>
      </Tooltip>

      <Tooltip content="This is a tooltip" hoist>
        <Button>Hoist</Button>
      </Tooltip>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:bui-tooltip]
