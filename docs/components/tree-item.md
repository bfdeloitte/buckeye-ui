# Tree Item

[component-header:bui-tree-item]

```html preview
<bui-tree>
  <bui-tree-item>
    Item 1
    <bui-tree-item>Item A</bui-tree-item>
    <bui-tree-item>Item B</bui-tree-item>
    <bui-tree-item>Item C</bui-tree-item>
  </bui-tree-item>
  <bui-tree-item>Item 2</bui-tree-item>
  <bui-tree-item>Item 3</bui-tree-item>
</bui-tree>
```

<!-- prettier-ignore -->
```jsx react
import { Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Tree>
    <TreeItem>
      Item 1
      <TreeItem>Item A</TreeItem>
      <TreeItem>Item B</TreeItem>
      <TreeItem>Item C</TreeItem>
    </TreeItem>
    <TreeItem>Item 2</TreeItem>
    <TreeItem>Item 3</TreeItem>
  </Tree>
);
```

## Examples

### Nested tree items

A tree item can contain other tree items. This allows the node to be expanded or collapsed by the user.

```html preview
<bui-tree>
  <bui-tree-item>
    Item 1
    <bui-tree-item>
      Item A
      <bui-tree-item>Item Z</bui-tree-item>
      <bui-tree-item>Item Y</bui-tree-item>
      <bui-tree-item>Item X</bui-tree-item>
    </bui-tree-item>
    <bui-tree-item>Item B</bui-tree-item>
    <bui-tree-item>Item C</bui-tree-item>
  </bui-tree-item>
  <bui-tree-item>Item 2</bui-tree-item>
  <bui-tree-item>Item 3</bui-tree-item>
</bui-tree>
```

<!-- prettier-ignore -->
```jsx react
import { Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Tree>
    <TreeItem>
      Item 1
      <TreeItem>
        Item A
        <TreeItem>Item Z</TreeItem>
        <TreeItem>Item Y</TreeItem>
        <TreeItem>Item X</TreeItem>
      </TreeItem>
      <TreeItem>Item B</TreeItem>
      <TreeItem>Item C</TreeItem>
    </TreeItem>
    <TreeItem>Item 2</TreeItem>
    <TreeItem>Item 3</TreeItem>
  </Tree>
);
```

### Selected

Use the `selected` attribute to select a tree item initially.

```html preview
<bui-tree>
  <bui-tree-item selected>
    Item 1
    <bui-tree-item>Item A</bui-tree-item>
    <bui-tree-item>Item B</bui-tree-item>
    <bui-tree-item>Item C</bui-tree-item>
  </bui-tree-item>
  <bui-tree-item>Item 2</bui-tree-item>
  <bui-tree-item>Item 3</bui-tree-item>
</bui-tree>
```

<!-- prettier-ignore -->
```jsx react
import { Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Tree>
    <TreeItem selected>
      Item 1
      <TreeItem>Item A</TreeItem>
      <TreeItem>Item B</TreeItem>
      <TreeItem>Item C</TreeItem>
    </TreeItem>
    <TreeItem>Item 2</TreeItem>
    <TreeItem>Item 3</TreeItem>
  </Tree>
);
```

### Expanded

Use the `expanded` attribute to expand a tree item initially.

```html preview
<bui-tree>
  <bui-tree-item expanded>
    Item 1
    <bui-tree-item expanded>
      Item A
      <bui-tree-item>Item Z</bui-tree-item>
      <bui-tree-item>Item Y</bui-tree-item>
      <bui-tree-item>Item X</bui-tree-item>
    </bui-tree-item>
    <bui-tree-item>Item B</bui-tree-item>
    <bui-tree-item>Item C</bui-tree-item>
  </bui-tree-item>
  <bui-tree-item>Item 2</bui-tree-item>
  <bui-tree-item>Item 3</bui-tree-item>
</bui-tree>
```

<!-- prettier-ignore -->
```jsx react
import { Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Tree>
    <TreeItem expanded>
      Item 1
      <TreeItem expanded>
        Item A
        <TreeItem>Item Z</TreeItem>
        <TreeItem>Item Y</TreeItem>
        <TreeItem>Item X</TreeItem>
      </TreeItem>
      <TreeItem>Item B</TreeItem>
      <TreeItem>Item C</TreeItem>
    </TreeItem>
    <TreeItem>Item 2</TreeItem>
    <TreeItem>Item 3</TreeItem>
  </Tree>
);
```

[component-metadata:bui-tree-item]
