# Breadcrumb

[component-header:bui-breadcrumb]

Breadcrumbs are usually placed before a page's main content with the current page shown last to indicate the user's position in the navigation.

```html preview
<bui-breadcrumb>
  <bui-breadcrumb-item>Catalog</bui-breadcrumb-item>
  <bui-breadcrumb-item>Clothing</bui-breadcrumb-item>
  <bui-breadcrumb-item>Women's</bui-breadcrumb-item>
  <bui-breadcrumb-item>Shirts &amp; Tops</bui-breadcrumb-item>
</bui-breadcrumb>
```

```jsx react
import { Breadcrumb, BreadcrumbItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Breadcrumb>
    <BreadcrumbItem>Catalog</BreadcrumbItem>
    <BreadcrumbItem>Clothing</BreadcrumbItem>
    <BreadcrumbItem>Women's</BreadcrumbItem>
    <BreadcrumbItem>Shirts &amp; Tops</BreadcrumbItem>
  </Breadcrumb>
);
```

## Examples

### Breadcrumb Links

By default, breadcrumb items are rendered as buttons so you can use them to navigate single-page applications. In this case, you'll need to add event listeners to handle clicks.

For websites, you'll probably want to use links instead. You can make any breadcrumb item a link by applying an `href` attribute to it. Now, when the user activates it, they'll be taken to the corresponding page — no event listeners required.

```html preview
<bui-breadcrumb>
  <bui-breadcrumb-item href="https://example.com/home">Homepage</bui-breadcrumb-item>

  <bui-breadcrumb-item href="https://example.com/home/services">Our Services</bui-breadcrumb-item>

  <bui-breadcrumb-item href="https://example.com/home/services/digital">Digital Media</bui-breadcrumb-item>

  <bui-breadcrumb-item href="https://example.com/home/services/digital/web-design">Web Design</bui-breadcrumb-item>
</bui-breadcrumb>
```

```jsx react
import { Breadcrumb, BreadcrumbItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Breadcrumb>
    <BreadcrumbItem href="https://example.com/home">Homepage</BreadcrumbItem>

    <BreadcrumbItem href="https://example.com/home/services">Our Services</BreadcrumbItem>

    <BreadcrumbItem href="https://example.com/home/services/digital">Digital Media</BreadcrumbItem>

    <BreadcrumbItem href="https://example.com/home/services/digital/web-design">Web Design</BreadcrumbItem>
  </Breadcrumb>
);
```

### Custom Separators

Use the `separator` slot to change the separator that goes between breadcrumb items. Icons work well, but you can also use text or an image.

```html preview
<bui-breadcrumb>
  <bui-icon name="dot" slot="separator"></bui-icon>
  <bui-breadcrumb-item>First</bui-breadcrumb-item>
  <bui-breadcrumb-item>Second</bui-breadcrumb-item>
  <bui-breadcrumb-item>Third</bui-breadcrumb-item>
</bui-breadcrumb>

<br />

<bui-breadcrumb>
  <bui-icon name="arrow-right" slot="separator"></bui-icon>
  <bui-breadcrumb-item>First</bui-breadcrumb-item>
  <bui-breadcrumb-item>Second</bui-breadcrumb-item>
  <bui-breadcrumb-item>Third</bui-breadcrumb-item>
</bui-breadcrumb>

<br />

<bui-breadcrumb>
  <span slot="separator">/</span>
  <bui-breadcrumb-item>First</bui-breadcrumb-item>
  <bui-breadcrumb-item>Second</bui-breadcrumb-item>
  <bui-breadcrumb-item>Third</bui-breadcrumb-item>
</bui-breadcrumb>
```

```jsx react
import 'buckeye-ui/dist/components/icon/icon.js';
import { Breadcrumb, BreadcrumbItem } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Breadcrumb>
      <bui-icon name="dot" slot="separator" />
      <BreadcrumbItem>First</BreadcrumbItem>
      <BreadcrumbItem>Second</BreadcrumbItem>
      <BreadcrumbItem>Third</BreadcrumbItem>
    </Breadcrumb>

    <br />

    <Breadcrumb>
      <bui-icon name="arrow-right" slot="separator" />
      <BreadcrumbItem>First</BreadcrumbItem>
      <BreadcrumbItem>Second</BreadcrumbItem>
      <BreadcrumbItem>Third</BreadcrumbItem>
    </Breadcrumb>

    <br />

    <Breadcrumb>
      <span slot="separator">/</span>
      <BreadcrumbItem>First</BreadcrumbItem>
      <BreadcrumbItem>Second</BreadcrumbItem>
      <BreadcrumbItem>Third</BreadcrumbItem>
    </Breadcrumb>
  </>
);
```

### Prefixes

Use the `prefix` slot to add content before any breadcrumb item.

```html preview
<bui-breadcrumb>
  <bui-breadcrumb-item>
    <bui-icon slot="prefix" name="house"></bui-icon>
    Home
  </bui-breadcrumb-item>
  <bui-breadcrumb-item>Articles</bui-breadcrumb-item>
  <bui-breadcrumb-item>Traveling</bui-breadcrumb-item>
</bui-breadcrumb>
```

```jsx react
import { Breadcrumb, BreadcrumbItem, Icon } from 'buckeye-ui/dist/react';

const App = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <Icon slot="prefix" name="house" />
      Home
    </BreadcrumbItem>
    <BreadcrumbItem>Articles</BreadcrumbItem>
    <BreadcrumbItem>Traveling</BreadcrumbItem>
  </Breadcrumb>
);
```

### Suffixes

Use the `suffix` slot to add content after any breadcrumb item.

```html preview
<bui-breadcrumb>
  <bui-breadcrumb-item>Documents</bui-breadcrumb-item>
  <bui-breadcrumb-item>Policies</bui-breadcrumb-item>
  <bui-breadcrumb-item>
    Security
    <bui-icon slot="suffix" name="shield-lock"></bui-icon>
  </bui-breadcrumb-item>
</bui-breadcrumb>
```

```jsx react
import { Breadcrumb, BreadcrumbItem, Icon } from 'buckeye-ui/dist/react';

const App = () => (
  <Breadcrumb>
    <BreadcrumbItem>Documents</BreadcrumbItem>
    <BreadcrumbItem>Policies</BreadcrumbItem>
    <BreadcrumbItem>
      Security
      <Icon slot="suffix" name="shield-lock"></Icon>
    </BreadcrumbItem>
  </Breadcrumb>
);
```

### With Dropdowns

Dropdown menus can be placed in a prefix or suffix slot to provide additional options.

```html preview
<bui-breadcrumb>
  <bui-breadcrumb-item>Homepage</bui-breadcrumb-item>
  <bui-breadcrumb-item>Our Services</bui-breadcrumb-item>
  <bui-breadcrumb-item>Digital Media</bui-breadcrumb-item>
  <bui-breadcrumb-item>
    Web Design
    <bui-dropdown slot="suffix">
      <bui-button slot="trigger" size="small" circle>
        <bui-icon label="More options" name="three-dots"></bui-icon>
      </bui-button>
      <bui-menu>
        <bui-menu-item type="checkbox" checked>Web Design</bui-menu-item>
        <bui-menu-item type="checkbox">Web Development</bui-menu-item>
        <bui-menu-item type="checkbox">Marketing</bui-menu-item>
      </bui-menu>
    </bui-dropdown>
  </bui-breadcrumb-item>
</bui-breadcrumb>
```

```jsx react
import { Breadcrumb, BreadcrumbItem, Button, Dropdown, Icon, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Breadcrumb>
    <BreadcrumbItem>Homepage</BreadcrumbItem>
    <BreadcrumbItem>Our Services</BreadcrumbItem>
    <BreadcrumbItem>Digital Media</BreadcrumbItem>
    <BreadcrumbItem>
      Web Design
      <Dropdown slot="suffix">
        <Button slot="trigger" size="small" circle>
          <Icon label="More options" name="three-dots"></Icon>
        </Button>
        <Menu>
          <MenuItem type="checkbox" checked>
            Web Design
          </MenuItem>
          <MenuItem type="checkbox">Web Development</MenuItem>
          <MenuItem type="checkbox">Marketing</MenuItem>
        </Menu>
      </Dropdown>
    </BreadcrumbItem>
  </Breadcrumb>
);
```

[component-metadata:bui-breadcrumb]
