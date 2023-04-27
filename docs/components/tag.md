# Tag

[component-header:bui-tag]

```html preview
<bui-tag variant="primary">Primary</bui-tag>
<bui-tag variant="success">Success</bui-tag>
<bui-tag variant="neutral">Neutral</bui-tag>
<bui-tag variant="warning">Warning</bui-tag>
<bui-tag variant="danger">Danger</bui-tag>
```

```jsx react
import { Tag } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Tag variant="primary">Primary</Tag>
    <Tag variant="success">Success</Tag>
    <Tag variant="neutral">Neutral</Tag>
    <Tag variant="warning">Warning</Tag>
    <Tag variant="danger">Danger</Tag>
  </>
);
```

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html preview
<bui-tag size="small">Small</bui-tag>
<bui-tag size="medium">Medium</bui-tag>
<bui-tag size="large">Large</bui-tag>
```

```jsx react
import { Tag } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Tag size="small">Small</Tag>
    <Tag size="medium">Medium</Tag>
    <Tag size="large">Large</Tag>
  </>
);
```

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html preview
<bui-tag size="small" pill>Small</bui-tag>
<bui-tag size="medium" pill>Medium</bui-tag>
<bui-tag size="large" pill>Large</bui-tag>
```

```jsx react
import { Tag } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Tag size="small" pill>
      Small
    </Tag>
    <Tag size="medium" pill>
      Medium
    </Tag>
    <Tag size="large" pill>
      Large
    </Tag>
  </>
);
```

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html preview
<div class="tags-removable">
  <bui-tag size="small" removable>Small</bui-tag>
  <bui-tag size="medium" removable>Medium</bui-tag>
  <bui-tag size="large" removable>Large</bui-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('bui-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable bui-tag {
    transition: var(--bui-transition-medium) opacity;
  }
</style>
```

```jsx react
import { Tag } from 'buckeye-ui/dist/react';

const css = `
  .tags-removable bui-tag {
    transition: var(--bui-transition-medium) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <Tag size="small" removable onRemove={handleRemove}>
          Small
        </Tag>

        <Tag size="medium" removable onRemove={handleRemove}>
          Medium
        </Tag>

        <Tag size="large" removable onRemove={handleRemove}>
          Large
        </Tag>
      </div>

      <style>{css}</style>
    </>
  );
};
```

[component-metadata:bui-tag]
