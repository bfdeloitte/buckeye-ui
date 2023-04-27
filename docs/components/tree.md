# Tree

[component-header:bui-tree]

```html preview
<bui-tree>
  <bui-tree-item>
    Deciduous
    <bui-tree-item>Birch</bui-tree-item>
    <bui-tree-item>
      Maple
      <bui-tree-item>Field maple</bui-tree-item>
      <bui-tree-item>Red maple</bui-tree-item>
      <bui-tree-item>Sugar maple</bui-tree-item>
    </bui-tree-item>
    <bui-tree-item>Oak</bui-tree-item>
  </bui-tree-item>

  <bui-tree-item>
    Coniferous
    <bui-tree-item>Cedar</bui-tree-item>
    <bui-tree-item>Pine</bui-tree-item>
    <bui-tree-item>Spruce</bui-tree-item>
  </bui-tree-item>

  <bui-tree-item>
    Non-trees
    <bui-tree-item>Bamboo</bui-tree-item>
    <bui-tree-item>Cactus</bui-tree-item>
    <bui-tree-item>Fern</bui-tree-item>
  </bui-tree-item>
</bui-tree>
```

<!-- prettier-ignore -->
```jsx react
import { Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Tree>
    <TreeItem>
      Deciduous
      <TreeItem>Birch</TreeItem>
      <TreeItem>
        Maple
        <TreeItem>Field maple</TreeItem>
        <TreeItem>Red maple</TreeItem>
        <TreeItem>Sugar maple</TreeItem>
      </TreeItem>
      <TreeItem>Oak</TreeItem>
    </TreeItem>

    <TreeItem>
      Coniferous
      <TreeItem>Cedar</TreeItem>
      <TreeItem>Pine</TreeItem>
      <TreeItem>Spruce</TreeItem>
    </TreeItem>

    <TreeItem>
      Non-trees
      <TreeItem>Bamboo</TreeItem>
      <TreeItem>Cactus</TreeItem>
      <TreeItem>Fern</TreeItem>
    </TreeItem>
  </Tree>
);
```

## Examples

### Selection Modes

The `selection` attribute lets you change the selection behavior of the tree.

- Use `single` to allow the selection of a single item (default).
- Use `multiple` to allow the selection of multiple items.
- Use `leaf` to only allow leaf nodes to be selected.

```html preview
<bui-select id="selection-mode" value="single" label="Selection">
  <bui-option value="single">Single</bui-option>
  <bui-option value="multiple">Multiple</bui-option>
  <bui-option value="leaf">Leaf</bui-option>
</bui-select>

<br />

<bui-tree class="tree-selectable">
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

<script>
  const selectionMode = document.querySelector('#selection-mode');
  const tree = document.querySelector('.tree-selectable');

  selectionMode.addEventListener('bui-change', () => {
    tree.querySelectorAll('bui-tree-item').forEach(item => (item.selected = false));
    tree.selection = selectionMode.value;
  });
</script>
```

<!-- prettier-ignore -->
```jsx react
import { Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => {
  const [selection, setSelection] = useState('single');

  return (
    <>
      <SlSelect label="Selection" value={selection} onChange={event => setSelection(event.target.value)}>
        <MenuItem value="single">single</MenuItem>
        <MenuItem value="multiple">multiple</MenuItem>
        <MenuItem value="leaf">leaf</MenuItem>
      </SlSelect>

      <br />

      <Tree selection={selection}>
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
    </>
  );
};
```

### Showing Indent Guides

Indent guides can be drawn by setting `--indent-guide-width`. You can also change the color, offset, and style, using `--indent-guide-color`, `--indent-guide-style`, and `--indent-guide-offset`, respectively.

```html preview
<bui-tree class="tree-with-lines">
  <bui-tree-item expanded>
    Deciduous
    <bui-tree-item>Birch</bui-tree-item>
    <bui-tree-item expanded>
      Maple
      <bui-tree-item>Field maple</bui-tree-item>
      <bui-tree-item>Red maple</bui-tree-item>
      <bui-tree-item>Sugar maple</bui-tree-item>
    </bui-tree-item>
    <bui-tree-item>Oak</bui-tree-item>
  </bui-tree-item>

  <bui-tree-item>
    Coniferous
    <bui-tree-item>Cedar</bui-tree-item>
    <bui-tree-item>Pine</bui-tree-item>
    <bui-tree-item>Spruce</bui-tree-item>
  </bui-tree-item>

  <bui-tree-item>
    Non-trees
    <bui-tree-item>Bamboo</bui-tree-item>
    <bui-tree-item>Cactus</bui-tree-item>
    <bui-tree-item>Fern</bui-tree-item>
  </bui-tree-item>
</bui-tree>

<style>
  .tree-with-lines {
    --indent-guide-width: 1px;
  }
</style>
```

<!-- prettier-ignore -->
```jsx react
import { Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Tree class="tree-with-lines" style={{ '--indent-guide-width': '1px' }}>
    <TreeItem expanded>
      Deciduous
      <TreeItem>Birch</TreeItem>
      <TreeItem expanded>
        Maple
        <TreeItem>Field maple</TreeItem>
        <TreeItem>Red maple</TreeItem>
        <TreeItem>Sugar maple</TreeItem>
      </TreeItem>
      <TreeItem>Oak</TreeItem>
    </TreeItem>

    <TreeItem>
      Coniferous
      <TreeItem>Cedar</TreeItem>
      <TreeItem>Pine</TreeItem>
      <TreeItem>Spruce</TreeItem>
    </TreeItem>

    <TreeItem>
      Non-trees
      <TreeItem>Bamboo</TreeItem>
      <TreeItem>Cactus</TreeItem>
      <TreeItem>Fern</TreeItem>
    </TreeItem>
  </Tree>
);
```

### Lazy Loading

Use the `lazy` attribute on a tree item to indicate that the content is not yet present and will be loaded later. When the user tries to expand the node, the `loading` state is set to `true` and the `bui-lazy-load` event will be emitted to allow you to load data asynchronously. The item will remain in a loading state until its content is changed.

If you want to disable this behavior after the first load, simply remove the `lazy` attribute and, on the next expand, the existing content will be shown instead.

```html preview
<bui-tree>
  <bui-tree-item lazy>Available Trees</bui-tree-item>
</bui-tree>

<script type="module">
  const lazyItem = document.querySelector('bui-tree-item[lazy]');

  lazyItem.addEventListener('bui-lazy-load', () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      const subItems = ['Birch', 'Cedar', 'Maple', 'Pine'];

      for (const item of subItems) {
        const treeItem = document.createElement('bui-tree-item');
        treeItem.innerText = item;
        lazyItem.append(treeItem);
      }

      // Disable lazy mode once the content has been loaded
      lazyItem.lazy = false;
    }, 1000);
  });
</script>
```

```jsx react
import { Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => {
  const [childItems, setChildItems] = useState([]);
  const [lazy, setLazy] = useState(true);

  const handleLazyLoad = () => {
    // Simulate asynchronous loading
    setTimeout(() => {
      setChildItems(['Birch', 'Cedar', 'Maple', 'Pine']);

      // Disable lazy mode once the content has been loaded
      setLazy(false);
    }, 1000);
  };

  return (
    <Tree>
      <TreeItem lazy={lazy} onLazyLoad={handleLazyLoad}>
        Available Trees
        {childItems.map(item => (
          <TreeItem>{item}</TreeItem>
        ))}
      </TreeItem>
    </Tree>
  );
};
```

### Customizing the Expand and Collapse Icons

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `expand-button` part as shown below.

```html preview
<bui-tree class="custom-icons">
  <bui-icon name="plus-square" slot="expand-icon"></bui-icon>
  <bui-icon name="dash-square" slot="collapse-icon"></bui-icon>

  <bui-tree-item>
    Deciduous
    <bui-tree-item>Birch</bui-tree-item>
    <bui-tree-item>
      Maple
      <bui-tree-item>Field maple</bui-tree-item>
      <bui-tree-item>Red maple</bui-tree-item>
      <bui-tree-item>Sugar maple</bui-tree-item>
    </bui-tree-item>
    <bui-tree-item>Oak</bui-tree-item>
  </bui-tree-item>

  <bui-tree-item>
    Coniferous
    <bui-tree-item>Cedar</bui-tree-item>
    <bui-tree-item>Pine</bui-tree-item>
    <bui-tree-item>Spruce</bui-tree-item>
  </bui-tree-item>

  <bui-tree-item>
    Non-trees
    <bui-tree-item>Bamboo</bui-tree-item>
    <bui-tree-item>Cactus</bui-tree-item>
    <bui-tree-item>Fern</bui-tree-item>
  </bui-tree-item>
</bui-tree>

<style>
  .custom-icons bui-tree-item::part(expand-button) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

<!-- prettier-ignore -->
```jsx react
import { Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => (
  <Tree>
    <Icon name="plus-square" slot="expand-icon"></Icon>
    <Icon name="dash-square" slot="collapse-icon"></Icon>

    <TreeItem>
      Deciduous
      <TreeItem>Birch</TreeItem>
      <TreeItem>
        Maple
        <TreeItem>Field maple</TreeItem>
        <TreeItem>Red maple</TreeItem>
        <TreeItem>Sugar maple</TreeItem>
      </TreeItem>
      <TreeItem>Oak</TreeItem>
    </TreeItem>

    <TreeItem>
      Coniferous
      <TreeItem>Cedar</TreeItem>
      <TreeItem>Pine</TreeItem>
      <TreeItem>Spruce</TreeItem>
    </TreeItem>

    <TreeItem>
      Non-trees
      <TreeItem>Bamboo</TreeItem>
      <TreeItem>Cactus</TreeItem>
      <TreeItem>Fern</TreeItem>
    </TreeItem>
  </Tree>
);
```

### With Icons

Decorative icons can be used before labels to provide hints for each node.

```html preview
<bui-tree class="tree-with-icons">
  <bui-tree-item expanded>
    <bui-icon name="folder"></bui-icon>
    Documents

    <bui-tree-item>
      <bui-icon name="folder"> </bui-icon>
      Photos
      <bui-tree-item>
        <bui-icon name="image"></bui-icon>
        birds.jpg
      </bui-tree-item>
      <bui-tree-item>
        <bui-icon name="image"></bui-icon>
        kitten.jpg
      </bui-tree-item>
      <bui-tree-item>
        <bui-icon name="image"></bui-icon>
        puppy.jpg
      </bui-tree-item>
    </bui-tree-item>

    <bui-tree-item>
      <bui-icon name="folder"></bui-icon>
      Writing
      <bui-tree-item>
        <bui-icon name="file"></bui-icon>
        draft.txt
      </bui-tree-item>
      <bui-tree-item>
        <bui-icon name="file-pdf"></bui-icon>
        final.pdf
      </bui-tree-item>
      <bui-tree-item>
        <bui-icon name="file-bar-graph"></bui-icon>
        sales.xls
      </bui-tree-item>
    </bui-tree-item>
  </bui-tree-item>
</bui-tree>
```

```jsx react
import { Icon, Tree, TreeItem } from 'buckeye-ui/dist/react';

const App = () => {
  return (
    <Tree class="tree-with-icons">
      <TreeItem expanded>
        <Icon name="folder" />
        Root
        <TreeItem>
          <Icon name="folder" />
          Folder 1<TreeItem>
            <Icon name="files" />
            File 1 - 1
          </TreeItem>
          <TreeItem disabled>
            <Icon name="files" />
            File 1 - 2
          </TreeItem>
          <TreeItem>
            <Icon name="files" />
            File 1 - 3
          </TreeItem>
        </TreeItem>
        <TreeItem>
          <Icon name="files" />
          Folder 2<TreeItem>
            <Icon name="files" />
            File 2 - 1
          </TreeItem>
          <TreeItem>
            <Icon name="files" />
            File 2 - 2
          </TreeItem>
        </TreeItem>
        <TreeItem>
          <Icon name="files" />
          File 1
        </TreeItem>
      </TreeItem>
    </Tree>
  );
};
```

[component-metadata:bui-tree]
