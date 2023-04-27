# Card

[component-header:bui-card]

```html preview
<bui-card class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <bui-button variant="primary" pill>More Info</bui-button>
    <bui-rating></bui-rating>
  </div>
</bui-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--bui-color-neutral-500);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx react
import { Button, Card, Rating } from 'buckeye-ui/dist/react';

const css = `
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--bui-color-neutral-500);
  }

  .card-overview [slot="footer"] {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
`;

const App = () => (
  <>
    <Card className="card-overview">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        alt="A kitten sits patiently between a terracotta pot and decorative grasses."
      />
      <strong>Mittens</strong>
      <br />
      This kitten is as cute as he is playful. Bring him home today!
      <br />
      <small>6 weeks old</small>
      <div slot="footer">
        <Button variant="primary" pill>
          More Info
        </Button>
        <Rating></Rating>
      </div>
    </Card>

    <style>{css}</style>
  </>
);
```

## Examples

## Basic Card

Basic cards aren't very exciting, but they can display any content you want them to.

```html preview
<bui-card class="card-basic">
  This is just a basic card. No image, no header, and no footer. Just your content.
</bui-card>

<style>
  .card-basic {
    max-width: 300px;
  }
</style>
```

```jsx react
import { Card } from 'buckeye-ui/dist/react';

const css = `
  .card-basic {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <Card className="card-basic">
      This is just a basic card. No image, no header, and no footer. Just your content.
    </Card>

    <style>{css}</style>
  </>
);
```

## Card with Header

Headers can be used to display titles and more.

```html preview
<bui-card class="card-header">
  <div slot="header">
    Header Title
    <bui-icon-button name="gear" label="Settings"></bui-icon-button>
  </div>

  This card has a header. You can put all sorts of things in it!
</bui-card>

<style>
  .card-header {
    max-width: 300px;
  }

  .card-header [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header bui-icon-button {
    font-size: var(--bui-font-size-medium);
  }
</style>
```

```jsx react
import { Card, IconButton } from 'buckeye-ui/dist/react';

const css = `
  .card-header {
    max-width: 300px;
  }

  .card-header [slot="header"] {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header bui-icon-button {
    font-size: var(--bui-font-size-medium);
  }
`;

const App = () => (
  <>
    <Card className="card-header">
      <div slot="header">
        Header Title
        <IconButton name="gear"></IconButton>
      </div>
      This card has a header. You can put all sorts of things in it!
    </Card>

    <style>{css}</style>
  </>
);
```

## Card with Footer

Footers can be used to display actions, summaries, or other relevant content.

```html preview
<bui-card class="card-footer">
  This card has a footer. You can put all sorts of things in it!

  <div slot="footer">
    <bui-rating></bui-rating>
    <bui-button variant="primary">Preview</bui-button>
  </div>
</bui-card>

<style>
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

```jsx react
import { Button, Card, Rating } from 'buckeye-ui/dist/react';

const css = `
  .card-footer {
    max-width: 300px;
  }

  .card-footer [slot="footer"] {
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }
`;

const App = () => (
  <>
    <Card className="card-footer">
      This card has a footer. You can put all sorts of things in it!
      <div slot="footer">
        <Rating></Rating>
        <Button slot="footer" variant="primary">
          Preview
        </Button>
      </div>
    </Card>

    <style>{css}</style>
  </>
);
```

## Images

Cards accept an `image` slot. The image is displayed atop the card and stretches to fit.

```html preview
<bui-card class="card-image">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
    alt="A kitten walks towards camera on top of pallet."
  />
  This is a kitten, but not just any kitten. This kitten likes walking along pallets.
</bui-card>

<style>
  .card-image {
    max-width: 300px;
  }
</style>
```

```jsx react
import { Card } from 'buckeye-ui/dist/react';

const css = `
  .card-image {
    max-width: 300px;
  }
`;

const App = () => (
  <>
    <Card className="card-image">
      <img
        slot="image"
        src="https://images.unsplash.com/photo-1547191783-94d5f8f6d8b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
        alt="A kitten walks towards camera on top of pallet."
      />
      This is a kitten, but not just any kitten. This kitten likes walking along pallets.
    </Card>

    <style>{css}</style>
  </>
);
```

[component-metadata:bui-card]
