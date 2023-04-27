<!-- cspell:dictionaries lorem-ipsum -->

# Details

[component-header:bui-details]

```html preview
<bui-details summary="Toggle Me">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</bui-details>
```

```jsx react
import { Details } from 'buckeye-ui/dist/react';

const App = () => (
  <Details summary="Toggle Me">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Details>
);
```

## Examples

### Disabled

Use the `disable` attribute to prevent the details from expanding.

```html preview
<bui-details summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</bui-details>
```

```jsx react
import { Details } from 'buckeye-ui/dist/react';

const App = () => (
  <Details summary="Disabled" disabled>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </Details>
);
```

### Customizing the Summary Icon

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `summary-icon` part as shown below.

```html preview
<bui-details summary="Toggle Me" class="custom-icons">
  <bui-icon name="plus-square" slot="expand-icon"></bui-icon>
  <bui-icon name="dash-square" slot="collapse-icon"></bui-icon>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</bui-details>

<style>
  bui-details.custom-icons::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

```jsx react
import { Details, Icon } from 'buckeye-ui/dist/react';

const css = `
  bui-details.custom-icon::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
`;

const App = () => (
  <>
    <Details summary="Toggle Me" class="custom-icon">
      <Icon name="plus-square" slot="expand-icon" />
      <Icon name="dash-square" slot="collapse-icon" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </Details>

    <style>{css}</style>
  </>
);
```

### Grouping Details

Details are designed to function independently, but you can simulate a group or "accordion" where only one is shown at a time by listening for the `bui-show` event.

```html preview
<div class="details-group-example">
  <bui-details summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </bui-details>

  <bui-details summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </bui-details>

  <bui-details summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </bui-details>
</div>

<script>
  const container = document.querySelector('.details-group-example');

  // Close all other details when one is shown
  container.addEventListener('bui-show', event => {
    [...container.querySelectorAll('bui-details')].map(details => (details.open = event.target === details));
  });
</script>

<style>
  .details-group-example bui-details:not(:last-of-type) {
    margin-bottom: var(--bui-spacing-2x-small);
  }
</style>
```

[component-metadata:bui-details]
