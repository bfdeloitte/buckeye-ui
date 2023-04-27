# Button Group

[component-header:bui-button-group]

```html preview
<bui-button-group label="Alignment">
  <bui-button>Left</bui-button>
  <bui-button>Center</bui-button>
  <bui-button>Right</bui-button>
</bui-button-group>
```

```jsx react
import { Button, ButtonGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <ButtonGroup label="Alignment">
    <Button>Left</Button>
    <Button>Center</Button>
    <Button>Right</Button>
  </ButtonGroup>
);
```

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html preview
<bui-button-group label="Alignment">
  <bui-button size="small">Left</bui-button>
  <bui-button size="small">Center</bui-button>
  <bui-button size="small">Right</bui-button>
</bui-button-group>

<br /><br />

<bui-button-group label="Alignment">
  <bui-button size="medium">Left</bui-button>
  <bui-button size="medium">Center</bui-button>
  <bui-button size="medium">Right</bui-button>
</bui-button-group>

<br /><br />

<bui-button-group label="Alignment">
  <bui-button size="large">Left</bui-button>
  <bui-button size="large">Center</bui-button>
  <bui-button size="large">Right</bui-button>
</bui-button-group>
```

```jsx react
import { Button, ButtonGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <ButtonGroup label="Alignment">
      <Button size="small">Left</Button>
      <Button size="small">Center</Button>
      <Button size="small">Right</Button>
    </ButtonGroup>

    <br />
    <br />

    <ButtonGroup label="Alignment">
      <Button size="medium">Left</Button>
      <Button size="medium">Center</Button>
      <Button size="medium">Right</Button>
    </ButtonGroup>

    <br />
    <br />

    <ButtonGroup label="Alignment">
      <Button size="large">Left</Button>
      <Button size="large">Center</Button>
      <Button size="large">Right</Button>
    </ButtonGroup>
  </>
);
```

### Theme Buttons

Theme buttons are supported through the button's `variant` attribute.

```html preview
<bui-button-group label="Alignment">
  <bui-button variant="primary">Left</bui-button>
  <bui-button variant="primary">Center</bui-button>
  <bui-button variant="primary">Right</bui-button>
</bui-button-group>

<br /><br />

<bui-button-group label="Alignment">
  <bui-button variant="success">Left</bui-button>
  <bui-button variant="success">Center</bui-button>
  <bui-button variant="success">Right</bui-button>
</bui-button-group>

<br /><br />

<bui-button-group label="Alignment">
  <bui-button variant="neutral">Left</bui-button>
  <bui-button variant="neutral">Center</bui-button>
  <bui-button variant="neutral">Right</bui-button>
</bui-button-group>

<br /><br />

<bui-button-group label="Alignment">
  <bui-button variant="warning">Left</bui-button>
  <bui-button variant="warning">Center</bui-button>
  <bui-button variant="warning">Right</bui-button>
</bui-button-group>

<br /><br />

<bui-button-group label="Alignment">
  <bui-button variant="danger">Left</bui-button>
  <bui-button variant="danger">Center</bui-button>
  <bui-button variant="danger">Right</bui-button>
</bui-button-group>
```

```jsx react
import { Button, ButtonGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <ButtonGroup label="Alignment">
      <Button variant="primary">Left</Button>
      <Button variant="primary">Center</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>

    <br />
    <br />

    <ButtonGroup label="Alignment">
      <Button variant="success">Left</Button>
      <Button variant="success">Center</Button>
      <Button variant="success">Right</Button>
    </ButtonGroup>

    <br />
    <br />

    <ButtonGroup label="Alignment">
      <Button variant="neutral">Left</Button>
      <Button variant="neutral">Center</Button>
      <Button variant="neutral">Right</Button>
    </ButtonGroup>

    <br />
    <br />

    <ButtonGroup label="Alignment">
      <Button variant="warning">Left</Button>
      <Button variant="warning">Center</Button>
      <Button variant="warning">Right</Button>
    </ButtonGroup>

    <br />
    <br />

    <ButtonGroup label="Alignment">
      <Button variant="danger">Left</Button>
      <Button variant="danger">Center</Button>
      <Button variant="danger">Right</Button>
    </ButtonGroup>
  </>
);
```

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html preview
<bui-button-group label="Alignment">
  <bui-button size="small" pill>Left</bui-button>
  <bui-button size="small" pill>Center</bui-button>
  <bui-button size="small" pill>Right</bui-button>
</bui-button-group>

<br /><br />

<bui-button-group label="Alignment">
  <bui-button size="medium" pill>Left</bui-button>
  <bui-button size="medium" pill>Center</bui-button>
  <bui-button size="medium" pill>Right</bui-button>
</bui-button-group>

<br /><br />

<bui-button-group label="Alignment">
  <bui-button size="large" pill>Left</bui-button>
  <bui-button size="large" pill>Center</bui-button>
  <bui-button size="large" pill>Right</bui-button>
</bui-button-group>
```

```jsx react
import { Button, ButtonGroup } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <ButtonGroup label="Alignment">
      <Button size="small" pill>
        Left
      </Button>
      <Button size="small" pill>
        Center
      </Button>
      <Button size="small" pill>
        Right
      </Button>
    </ButtonGroup>

    <br />
    <br />

    <ButtonGroup label="Alignment">
      <Button size="medium" pill>
        Left
      </Button>
      <Button size="medium" pill>
        Center
      </Button>
      <Button size="medium" pill>
        Right
      </Button>
    </ButtonGroup>

    <br />
    <br />

    <ButtonGroup label="Alignment">
      <Button size="large" pill>
        Left
      </Button>
      <Button size="large" pill>
        Center
      </Button>
      <Button size="large" pill>
        Right
      </Button>
    </ButtonGroup>
  </>
);
```

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<bui-button>` element.

```html preview
<bui-button-group label="Example Button Group">
  <bui-button>Button</bui-button>
  <bui-button>Button</bui-button>
  <bui-dropdown>
    <bui-button slot="trigger" caret>Dropdown</bui-button>
    <bui-menu>
      <bui-menu-item>Item 1</bui-menu-item>
      <bui-menu-item>Item 2</bui-menu-item>
      <bui-menu-item>Item 3</bui-menu-item>
    </bui-menu>
  </bui-dropdown>
</bui-button-group>
```

```jsx react
import { Button, ButtonGroup, Dropdown, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <ButtonGroup label="Example Button Group">
    <Button>Button</Button>
    <Button>Button</Button>
    <Dropdown>
      <Button slot="trigger" caret>
        Dropdown
      </Button>
      <Menu>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </Menu>
    </Dropdown>
  </ButtonGroup>
);
```

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html preview
<bui-button-group label="Example Button Group">
  <bui-button variant="primary">Save</bui-button>
  <bui-dropdown placement="bottom-end">
    <bui-button slot="trigger" variant="primary" caret>
      <bui-visually-hidden>More options</bui-visually-hidden>
    </bui-button>
    <bui-menu>
      <bui-menu-item>Save</bui-menu-item>
      <bui-menu-item>Save as&hellip;</bui-menu-item>
      <bui-menu-item>Save all</bui-menu-item>
    </bui-menu>
  </bui-dropdown>
</bui-button-group>
```

```jsx react
import { Button, ButtonGroup, Dropdown, Menu, MenuItem } from 'buckeye-ui/dist/react';

const App = () => (
  <ButtonGroup label="Example Button Group">
    <Button variant="primary">Save</Button>
    <Dropdown placement="bottom-end">
      <Button slot="trigger" variant="primary" caret></Button>
      <Menu>
        <MenuItem>Save</MenuItem>
        <MenuItem>Save as&hellip;</MenuItem>
        <MenuItem>Save all</MenuItem>
      </Menu>
    </Dropdown>
  </ButtonGroup>
);
```

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html preview
<bui-button-group label="Alignment">
  <bui-tooltip content="I'm on the left">
    <bui-button>Left</bui-button>
  </bui-tooltip>

  <bui-tooltip content="I'm in the middle">
    <bui-button>Center</bui-button>
  </bui-tooltip>

  <bui-tooltip content="I'm on the right">
    <bui-button>Right</bui-button>
  </bui-tooltip>
</bui-button-group>
```

```jsx react
import { Button, ButtonGroup, Tooltip } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <ButtonGroup label="Alignment">
      <Tooltip content="I'm on the left">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip content="I'm in the middle">
        <Button>Center</Button>
      </Tooltip>

      <Tooltip content="I'm on the right">
        <Button>Right</Button>
      </Tooltip>
    </ButtonGroup>
  </>
);
```

### Toolbar Example

Create interactive toolbars with button groups.

```html preview
<div class="button-group-toolbar">
  <bui-button-group label="History">
    <bui-tooltip content="Undo">
      <bui-button><bui-icon name="arrow-counterclockwise" label="Undo"></bui-icon></bui-button>
    </bui-tooltip>
    <bui-tooltip content="Redo">
      <bui-button><bui-icon name="arrow-clockwise" label="Redo"></bui-icon></bui-button>
    </bui-tooltip>
  </bui-button-group>

  <bui-button-group label="Formatting">
    <bui-tooltip content="Bold">
      <bui-button><bui-icon name="type-bold" label="Bold"></bui-icon></bui-button>
    </bui-tooltip>
    <bui-tooltip content="Italic">
      <bui-button><bui-icon name="type-italic" label="Italic"></bui-icon></bui-button>
    </bui-tooltip>
    <bui-tooltip content="Underline">
      <bui-button><bui-icon name="type-underline" label="Underline"></bui-icon></bui-button>
    </bui-tooltip>
  </bui-button-group>

  <bui-button-group label="Alignment">
    <bui-tooltip content="Align Left">
      <bui-button><bui-icon name="justify-left" label="Align Left"></bui-icon></bui-button>
    </bui-tooltip>
    <bui-tooltip content="Align Center">
      <bui-button><bui-icon name="justify" label="Align Center"></bui-icon></bui-button>
    </bui-tooltip>
    <bui-tooltip content="Align Right">
      <bui-button><bui-icon name="justify-right" label="Align Right"></bui-icon></bui-button>
    </bui-tooltip>
  </bui-button-group>
</div>

<style>
  .button-group-toolbar bui-button-group:not(:last-of-type) {
    margin-right: var(--bui-spacing-x-small);
  }
</style>
```

```jsx react
import { Button, ButtonGroup, Icon, Tooltip } from 'buckeye-ui/dist/react';

const css = `
  .button-group-toolbar bui-button-group:not(:last-of-type) {
    margin-right: var(--bui-spacing-x-small);
  }
`;

const App = () => (
  <>
    <div className="button-group-toolbar">
      <ButtonGroup label="History">
        <Tooltip content="Undo">
          <Button>
            <Icon name="arrow-counterclockwise"></Icon>
          </Button>
        </Tooltip>
        <Tooltip content="Redo">
          <Button>
            <Icon name="arrow-clockwise"></Icon>
          </Button>
        </Tooltip>
      </ButtonGroup>

      <ButtonGroup label="Formatting">
        <Tooltip content="Bold">
          <Button>
            <Icon name="type-bold"></Icon>
          </Button>
        </Tooltip>
        <Tooltip content="Italic">
          <Button>
            <Icon name="type-italic"></Icon>
          </Button>
        </Tooltip>
        <Tooltip content="Underline">
          <Button>
            <Icon name="type-underline"></Icon>
          </Button>
        </Tooltip>
      </ButtonGroup>

      <ButtonGroup label="Alignment">
        <Tooltip content="Align Left">
          <Button>
            <Icon name="justify-left"></Icon>
          </Button>
        </Tooltip>
        <Tooltip content="Align Center">
          <Button>
            <Icon name="justify"></Icon>
          </Button>
        </Tooltip>
        <Tooltip content="Align Right">
          <Button>
            <Icon name="justify-right"></Icon>
          </Button>
        </Tooltip>
      </ButtonGroup>
    </div>

    <style>{css}</style>
  </>
);
```

[component-metadata:bui-button-group]
