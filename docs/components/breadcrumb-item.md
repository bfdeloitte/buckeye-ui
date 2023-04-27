# Breadcrumb Item

[component-header:bui-breadcrumb-item]

```html preview
<bui-breadcrumb>
  <bui-breadcrumb-item>
    <bui-icon slot="prefix" name="house"></bui-icon>
    Home
  </bui-breadcrumb-item>
  <bui-breadcrumb-item>Clothing</bui-breadcrumb-item>
  <bui-breadcrumb-item>Shirts</bui-breadcrumb-item>
</bui-breadcrumb>
```

```jsx react
import { Breadcrumb, BreadcrumbItem, Icon } from 'buckeye-ui/dist/react';

const App = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <Icon slot="prefix" name="house"></Icon>
      Home
    </BreadcrumbItem>
    <BreadcrumbItem>Clothing</BreadcrumbItem>
    <BreadcrumbItem>Shirts</BreadcrumbItem>
  </Breadcrumb>
);
```

?> Additional demonstrations can be found in the [breadcrumb examples](/components/breadcrumb).

[component-metadata:bui-breadcrumb-item]
