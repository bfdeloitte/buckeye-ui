# Rating

[component-header:bui-rating]

```html preview
<bui-rating label="Rating"></bui-rating>
```

```jsx react
import { Rating } from 'buckeye-ui/dist/react';

const App = () => <Rating label="Rating" />;
```

## Examples

### Labels

Ratings are commonly identified contextually, so labels aren't displayed. However, you should always provide one for assistive devices using the `label` attribute.

```html preview
<bui-rating label="Rate this component"></bui-rating>
```

```jsx react
import { Rating } from 'buckeye-ui/dist/react';

const App = () => <Rating label="Rate this component" />;
```

### Maximum Value

Ratings are 0-5 by default. To change the maximum possible value, use the `max` attribute.

```html preview
<bui-rating label="Rating" max="3"></bui-rating>
```

```jsx react
import { Rating } from 'buckeye-ui/dist/react';

const App = () => <Rating label="Rating" max={3} />;
```

### Precision

Use the `precision` attribute to let users select fractional ratings.

```html preview
<bui-rating label="Rating" precision="0.5" value="2.5"></bui-rating>
```

```jsx react
import { Rating } from 'buckeye-ui/dist/react';

const App = () => <Rating label="Rating" precision={0.5} value={2.5} />;
```

### Symbol Sizes

Set the `--symbol-size` custom property to adjust the size.

```html preview
<bui-rating label="Rating" style="--symbol-size: 2rem;"></bui-rating>
```

```jsx react
import { Rating } from 'buckeye-ui/dist/react';

const App = () => <Rating label="Rating" style={{ '--symbol-size': '2rem' }} />;
```

### Readonly

Use the `readonly` attribute to display a rating that users can't change.

```html preview
<bui-rating label="Rating" readonly value="3"></bui-rating>
```

```jsx react
import { Rating } from 'buckeye-ui/dist/react';

const App = () => <Rating label="Rating" readonly value={3} />;
```

### Disabled

Use the `disable` attribute to disable the rating.

```html preview
<bui-rating label="Rating" disabled value="3"></bui-rating>
```

```jsx react
import { Rating } from 'buckeye-ui/dist/react';

const App = () => <Rating label="Rating" disabled value={3} />;
```

### Detecting Hover

Use the `bui-hover` event to detect when the user hovers over (or touch and drag) the rating. This lets you hook into values as the user interacts with the rating, but before they select a value.

The event has a payload with `phase` and `value` properties. The `phase` property tells when hovering starts, moves to a new value, and ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.

```html preview
<div class="detect-hover">
  <bui-rating label="Rating"></bui-rating>
  <span></span>
</div>

<script>
  const rating = document.querySelector('.detect-hover > bui-rating');
  const span = rating.nextElementSibling;
  const terms = ['No rating', 'Terrible', 'Bad', 'OK', 'Good', 'Excellent'];

  rating.addEventListener('bui-hover', event => {
    span.textContent = terms[event.detail.value];

    // Clear feedback when hovering stops
    if (event.detail.phase === 'end') {
      span.textContent = '';
    }
  });
</script>

<style>
  .detect-hover span {
    position: relative;
    top: -4px;
    left: 8px;
    border-radius: var(--bui-border-radius-small);
    background: var(--bui-color-neutral-900);
    color: var(--bui-color-neutral-0);
    text-align: center;
    padding: 4px 6px;
  }

  .detect-hover span:empty {
    display: none;
  }
</style>
```

```jsx react
import { useState } from 'react';
import { Rating } from 'buckeye-ui/dist/react';

const terms = ['No rating', 'Terrible', 'Bad', 'OK', 'Good', 'Excellent'];
const css = `
  .detect-hover span {
    position: relative;
    top: -4px;
    left: 8px;
    border-radius: var(--bui-border-radius-small);
    background: var(--bui-color-neutral-900);
    color: var(--bui-color-neutral-0);
    text-align: center;
    padding: 4px 6px;
  }

  .detect-hover span:empty {
    display: none;
  }
`;

function handleHover(event) {
  rating.addEventListener('bui-hover', event => {
    setFeedback(terms[event.detail.value]);

    // Clear feedback when hovering stops
    if (event.detail.phase === 'end') {
      setFeedback('');
    }
  });
}

const App = () => {
  const [feedback, setFeedback] = useState(true);

  return (
    <>
      <div class="detect-hover">
        <Rating label="Rating" onHover={handleHover} />
        <span>{feedback}</span>
      </div>
      <style>{css}</style>
    </>
  );
};
```

### Custom Icons

You can provide custom icons by passing a function to the `getSymbol` property.

```html preview
<bui-rating label="Rating" class="rating-hearts" style="--symbol-color-active: #ff4136;"></bui-rating>

<script>
  const rating = document.querySelector('.rating-hearts');
  rating.getSymbol = () => '<bui-icon name="heart-fill"></bui-icon>';
</script>
```

```jsx react
import { Rating } from 'buckeye-ui/dist/react';

const App = () => (
  <Rating
    label="Rating"
    getSymbol={() => '<bui-icon name="heart-fill"></bui-icon>'}
    style={{ '--symbol-color-active': '#ff4136' }}
  />
);
```

### Value-based Icons

You can also use the `getSymbol` property to render different icons based on value.

```html preview
<bui-rating label="Rating" class="rating-emojis"></bui-rating>

<script>
  const rating = document.querySelector('.rating-emojis');

  rating.getSymbol = value => {
    const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
    return `<bui-icon name="${icons[value - 1]}"></bui-icon>`;
  };
</script>
```

```jsx react
import { Rating } from 'buckeye-ui/dist/react';

function getSymbol(value) {
  const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
  return `<bui-icon name="${icons[value - 1]}"></bui-icon>`;
}

const App = () => <Rating label="Rating" getSymbol={getSymbol} />;
```

[component-metadata:bui-rating]
