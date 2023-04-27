# Tab Group

[component-header:bui-tab-group]

Tab groups make use of [tabs](/components/tab) and [tab panels](/components/tab-panel). Each tab must be slotted into the `nav` slot and its `panel` must refer to a tab panel of the same name.

```html preview
<bui-tab-group>
  <bui-tab slot="nav" panel="general">General</bui-tab>
  <bui-tab slot="nav" panel="custom">Custom</bui-tab>
  <bui-tab slot="nav" panel="advanced">Advanced</bui-tab>
  <bui-tab slot="nav" panel="disabled" disabled>Disabled</bui-tab>

  <bui-tab-panel name="general">This is the general tab panel.</bui-tab-panel>
  <bui-tab-panel name="custom">This is the custom tab panel.</bui-tab-panel>
  <bui-tab-panel name="advanced">This is the advanced tab panel.</bui-tab-panel>
  <bui-tab-panel name="disabled">This is a disabled tab panel.</bui-tab-panel>
</bui-tab-group>
```

```jsx react
import { Tab, TabGroup, TabPanel } from 'buckeye-ui/dist/react';

const App = () => (
  <TabGroup>
    <Tab slot="nav" panel="general">
      General
    </Tab>
    <Tab slot="nav" panel="custom">
      Custom
    </Tab>
    <Tab slot="nav" panel="advanced">
      Advanced
    </Tab>
    <Tab slot="nav" panel="disabled" disabled>
      Disabled
    </Tab>

    <TabPanel name="general">This is the general tab panel.</TabPanel>
    <TabPanel name="custom">This is the custom tab panel.</TabPanel>
    <TabPanel name="advanced">This is the advanced tab panel.</TabPanel>
    <TabPanel name="disabled">This is a disabled tab panel.</TabPanel>
  </TabGroup>
);
```

## Examples

### Tabs on Bottom

Tabs can be shown on the bottom by setting `placement` to `bottom`.

```html preview
<bui-tab-group placement="bottom">
  <bui-tab slot="nav" panel="general">General</bui-tab>
  <bui-tab slot="nav" panel="custom">Custom</bui-tab>
  <bui-tab slot="nav" panel="advanced">Advanced</bui-tab>
  <bui-tab slot="nav" panel="disabled" disabled>Disabled</bui-tab>

  <bui-tab-panel name="general">This is the general tab panel.</bui-tab-panel>
  <bui-tab-panel name="custom">This is the custom tab panel.</bui-tab-panel>
  <bui-tab-panel name="advanced">This is the advanced tab panel.</bui-tab-panel>
  <bui-tab-panel name="disabled">This is a disabled tab panel.</bui-tab-panel>
</bui-tab-group>
```

```jsx react
import { Tab, TabGroup, TabPanel } from 'buckeye-ui/dist/react';

const App = () => (
  <TabGroup placement="bottom">
    <Tab slot="nav" panel="general">
      General
    </Tab>
    <Tab slot="nav" panel="custom">
      Custom
    </Tab>
    <Tab slot="nav" panel="advanced">
      Advanced
    </Tab>
    <Tab slot="nav" panel="disabled" disabled>
      Disabled
    </Tab>

    <TabPanel name="general">This is the general tab panel.</TabPanel>
    <TabPanel name="custom">This is the custom tab panel.</TabPanel>
    <TabPanel name="advanced">This is the advanced tab panel.</TabPanel>
    <TabPanel name="disabled">This is a disabled tab panel.</TabPanel>
  </TabGroup>
);
```

### Tabs on Start

Tabs can be shown on the starting side by setting `placement` to `start`.

```html preview
<bui-tab-group placement="start">
  <bui-tab slot="nav" panel="general">General</bui-tab>
  <bui-tab slot="nav" panel="custom">Custom</bui-tab>
  <bui-tab slot="nav" panel="advanced">Advanced</bui-tab>
  <bui-tab slot="nav" panel="disabled" disabled>Disabled</bui-tab>

  <bui-tab-panel name="general">This is the general tab panel.</bui-tab-panel>
  <bui-tab-panel name="custom">This is the custom tab panel.</bui-tab-panel>
  <bui-tab-panel name="advanced">This is the advanced tab panel.</bui-tab-panel>
  <bui-tab-panel name="disabled">This is a disabled tab panel.</bui-tab-panel>
</bui-tab-group>
```

```jsx react
import { Tab, TabGroup, TabPanel } from 'buckeye-ui/dist/react';

const App = () => (
  <TabGroup placement="start">
    <Tab slot="nav" panel="general">
      General
    </Tab>
    <Tab slot="nav" panel="custom">
      Custom
    </Tab>
    <Tab slot="nav" panel="advanced">
      Advanced
    </Tab>
    <Tab slot="nav" panel="disabled" disabled>
      Disabled
    </Tab>

    <TabPanel name="general">This is the general tab panel.</TabPanel>
    <TabPanel name="custom">This is the custom tab panel.</TabPanel>
    <TabPanel name="advanced">This is the advanced tab panel.</TabPanel>
    <TabPanel name="disabled">This is a disabled tab panel.</TabPanel>
  </TabGroup>
);
```

### Tabs on End

Tabs can be shown on the ending side by setting `placement` to `end`.

```html preview
<bui-tab-group placement="end">
  <bui-tab slot="nav" panel="general">General</bui-tab>
  <bui-tab slot="nav" panel="custom">Custom</bui-tab>
  <bui-tab slot="nav" panel="advanced">Advanced</bui-tab>
  <bui-tab slot="nav" panel="disabled" disabled>Disabled</bui-tab>

  <bui-tab-panel name="general">This is the general tab panel.</bui-tab-panel>
  <bui-tab-panel name="custom">This is the custom tab panel.</bui-tab-panel>
  <bui-tab-panel name="advanced">This is the advanced tab panel.</bui-tab-panel>
  <bui-tab-panel name="disabled">This is a disabled tab panel.</bui-tab-panel>
</bui-tab-group>
```

```jsx react
import { Tab, TabGroup, TabPanel } from 'buckeye-ui/dist/react';

const App = () => (
  <TabGroup placement="end">
    <Tab slot="nav" panel="general">
      General
    </Tab>
    <Tab slot="nav" panel="custom">
      Custom
    </Tab>
    <Tab slot="nav" panel="advanced">
      Advanced
    </Tab>
    <Tab slot="nav" panel="disabled" disabled>
      Disabled
    </Tab>

    <TabPanel name="general">This is the general tab panel.</TabPanel>
    <TabPanel name="custom">This is the custom tab panel.</TabPanel>
    <TabPanel name="advanced">This is the advanced tab panel.</TabPanel>
    <TabPanel name="disabled">This is a disabled tab panel.</TabPanel>
  </TabGroup>
);
```

### Closable Tabs

Add the `closable` attribute to a tab to show a close button. This example shows how you can dynamically remove tabs from the DOM when the close button is activated.

```html preview
<bui-tab-group class="tabs-closable">
  <bui-tab slot="nav" panel="general">General</bui-tab>
  <bui-tab slot="nav" panel="closable-1" closable>Closable 1</bui-tab>
  <bui-tab slot="nav" panel="closable-2" closable>Closable 2</bui-tab>
  <bui-tab slot="nav" panel="closable-3" closable>Closable 3</bui-tab>

  <bui-tab-panel name="general">This is the general tab panel.</bui-tab-panel>
  <bui-tab-panel name="closable-1">This is the first closable tab panel.</bui-tab-panel>
  <bui-tab-panel name="closable-2">This is the second closable tab panel.</bui-tab-panel>
  <bui-tab-panel name="closable-3">This is the third closable tab panel.</bui-tab-panel>
</bui-tab-group>

<script>
  const tabGroup = document.querySelector('.tabs-closable');

  tabGroup.addEventListener('bui-close', async event => {
    const tab = event.target;
    const panel = tabGroup.querySelector(`bui-tab-panel[name="${tab.panel}"]`);

    // Show the previous tab if the tab is currently active
    if (tab.active) {
      tabGroup.show(tab.previousElementSibling.panel);
    }

    // Remove the tab + panel
    tab.remove();
    panel.remove();
  });
</script>
```

```jsx react
import { Tab, TabGroup, TabPanel } from 'buckeye-ui/dist/react';

const App = () => {
  function handleClose(event) {
    //
    // This is a crude example that removes the tab and its panel from the DOM.
    // There are better ways to manage tab creation/removal in React, but that
    // would significantly complicate the example.
    //
    const tab = event.target;
    const tabGroup = tab.closest('bui-tab-group');
    const tabPanel = tabGroup.querySelector(`[aria-labelledby="${tab.id}"]`);

    tab.remove();
    tabPanel.remove();
  }

  return (
    <TabGroup className="tabs-closable" onClose={handleClose}>
      <Tab slot="nav" panel="general">
        General
      </Tab>
      <Tab slot="nav" panel="closable-1" closable onClose={handleClose}>
        Closable 1
      </Tab>
      <Tab slot="nav" panel="closable-2" closable onClose={handleClose}>
        Closable 2
      </Tab>
      <Tab slot="nav" panel="closable-3" closable onClose={handleClose}>
        Closable 3
      </Tab>

      <TabPanel name="general">This is the general tab panel.</TabPanel>
      <TabPanel name="closable-1">This is the first closable tab panel.</TabPanel>
      <TabPanel name="closable-2">This is the second closable tab panel.</TabPanel>
      <TabPanel name="closable-3">This is the third closable tab panel.</TabPanel>
    </TabGroup>
  );
};
```

### Scrolling Tabs

When there are more tabs than horizontal space allows, the nav will be scrollable.

```html preview
<bui-tab-group>
  <bui-tab slot="nav" panel="tab-1">Tab 1</bui-tab>
  <bui-tab slot="nav" panel="tab-2">Tab 2</bui-tab>
  <bui-tab slot="nav" panel="tab-3">Tab 3</bui-tab>
  <bui-tab slot="nav" panel="tab-4">Tab 4</bui-tab>
  <bui-tab slot="nav" panel="tab-5">Tab 5</bui-tab>
  <bui-tab slot="nav" panel="tab-6">Tab 6</bui-tab>
  <bui-tab slot="nav" panel="tab-7">Tab 7</bui-tab>
  <bui-tab slot="nav" panel="tab-8">Tab 8</bui-tab>
  <bui-tab slot="nav" panel="tab-9">Tab 9</bui-tab>
  <bui-tab slot="nav" panel="tab-10">Tab 10</bui-tab>
  <bui-tab slot="nav" panel="tab-11">Tab 11</bui-tab>
  <bui-tab slot="nav" panel="tab-12">Tab 12</bui-tab>
  <bui-tab slot="nav" panel="tab-13">Tab 13</bui-tab>
  <bui-tab slot="nav" panel="tab-14">Tab 14</bui-tab>
  <bui-tab slot="nav" panel="tab-15">Tab 15</bui-tab>
  <bui-tab slot="nav" panel="tab-16">Tab 16</bui-tab>
  <bui-tab slot="nav" panel="tab-17">Tab 17</bui-tab>
  <bui-tab slot="nav" panel="tab-18">Tab 18</bui-tab>
  <bui-tab slot="nav" panel="tab-19">Tab 19</bui-tab>
  <bui-tab slot="nav" panel="tab-20">Tab 20</bui-tab>

  <bui-tab-panel name="tab-1">Tab panel 1</bui-tab-panel>
  <bui-tab-panel name="tab-2">Tab panel 2</bui-tab-panel>
  <bui-tab-panel name="tab-3">Tab panel 3</bui-tab-panel>
  <bui-tab-panel name="tab-4">Tab panel 4</bui-tab-panel>
  <bui-tab-panel name="tab-5">Tab panel 5</bui-tab-panel>
  <bui-tab-panel name="tab-6">Tab panel 6</bui-tab-panel>
  <bui-tab-panel name="tab-7">Tab panel 7</bui-tab-panel>
  <bui-tab-panel name="tab-8">Tab panel 8</bui-tab-panel>
  <bui-tab-panel name="tab-9">Tab panel 9</bui-tab-panel>
  <bui-tab-panel name="tab-10">Tab panel 10</bui-tab-panel>
  <bui-tab-panel name="tab-11">Tab panel 11</bui-tab-panel>
  <bui-tab-panel name="tab-12">Tab panel 12</bui-tab-panel>
  <bui-tab-panel name="tab-13">Tab panel 13</bui-tab-panel>
  <bui-tab-panel name="tab-14">Tab panel 14</bui-tab-panel>
  <bui-tab-panel name="tab-15">Tab panel 15</bui-tab-panel>
  <bui-tab-panel name="tab-16">Tab panel 16</bui-tab-panel>
  <bui-tab-panel name="tab-17">Tab panel 17</bui-tab-panel>
  <bui-tab-panel name="tab-18">Tab panel 18</bui-tab-panel>
  <bui-tab-panel name="tab-19">Tab panel 19</bui-tab-panel>
  <bui-tab-panel name="tab-20">Tab panel 20</bui-tab-panel>
</bui-tab-group>
```

```jsx react
import { Tab, TabGroup, TabPanel } from 'buckeye-ui/dist/react';

const App = () => (
  <TabGroup>
    <Tab slot="nav" panel="tab-1">
      Tab 1
    </Tab>
    <Tab slot="nav" panel="tab-2">
      Tab 2
    </Tab>
    <Tab slot="nav" panel="tab-3">
      Tab 3
    </Tab>
    <Tab slot="nav" panel="tab-4">
      Tab 4
    </Tab>
    <Tab slot="nav" panel="tab-5">
      Tab 5
    </Tab>
    <Tab slot="nav" panel="tab-6">
      Tab 6
    </Tab>
    <Tab slot="nav" panel="tab-7">
      Tab 7
    </Tab>
    <Tab slot="nav" panel="tab-8">
      Tab 8
    </Tab>
    <Tab slot="nav" panel="tab-9">
      Tab 9
    </Tab>
    <Tab slot="nav" panel="tab-10">
      Tab 10
    </Tab>
    <Tab slot="nav" panel="tab-11">
      Tab 11
    </Tab>
    <Tab slot="nav" panel="tab-12">
      Tab 12
    </Tab>
    <Tab slot="nav" panel="tab-13">
      Tab 13
    </Tab>
    <Tab slot="nav" panel="tab-14">
      Tab 14
    </Tab>
    <Tab slot="nav" panel="tab-15">
      Tab 15
    </Tab>
    <Tab slot="nav" panel="tab-16">
      Tab 16
    </Tab>
    <Tab slot="nav" panel="tab-17">
      Tab 17
    </Tab>
    <Tab slot="nav" panel="tab-18">
      Tab 18
    </Tab>
    <Tab slot="nav" panel="tab-19">
      Tab 19
    </Tab>
    <Tab slot="nav" panel="tab-20">
      Tab 20
    </Tab>

    <TabPanel name="tab-1">Tab panel 1</TabPanel>
    <TabPanel name="tab-2">Tab panel 2</TabPanel>
    <TabPanel name="tab-3">Tab panel 3</TabPanel>
    <TabPanel name="tab-4">Tab panel 4</TabPanel>
    <TabPanel name="tab-5">Tab panel 5</TabPanel>
    <TabPanel name="tab-6">Tab panel 6</TabPanel>
    <TabPanel name="tab-7">Tab panel 7</TabPanel>
    <TabPanel name="tab-8">Tab panel 8</TabPanel>
    <TabPanel name="tab-9">Tab panel 9</TabPanel>
    <TabPanel name="tab-10">Tab panel 10</TabPanel>
    <TabPanel name="tab-11">Tab panel 11</TabPanel>
    <TabPanel name="tab-12">Tab panel 12</TabPanel>
    <TabPanel name="tab-13">Tab panel 13</TabPanel>
    <TabPanel name="tab-14">Tab panel 14</TabPanel>
    <TabPanel name="tab-15">Tab panel 15</TabPanel>
    <TabPanel name="tab-16">Tab panel 16</TabPanel>
    <TabPanel name="tab-17">Tab panel 17</TabPanel>
    <TabPanel name="tab-18">Tab panel 18</TabPanel>
    <TabPanel name="tab-19">Tab panel 19</TabPanel>
    <TabPanel name="tab-20">Tab panel 20</TabPanel>
  </TabGroup>
);
```

### Manual Activation

When focused, keyboard users can press <kbd>Left</kbd> or <kbd>Right</kbd> to select the desired tab. By default, the corresponding tab panel will be shown immediately (automatic activation). You can change this behavior by setting `activation="manual"` which will require the user to press <kbd>Space</kbd> or <kbd>Enter</kbd> before showing the tab panel (manual activation).

```html preview
<bui-tab-group activation="manual">
  <bui-tab slot="nav" panel="general">General</bui-tab>
  <bui-tab slot="nav" panel="custom">Custom</bui-tab>
  <bui-tab slot="nav" panel="advanced">Advanced</bui-tab>
  <bui-tab slot="nav" panel="disabled" disabled>Disabled</bui-tab>

  <bui-tab-panel name="general">This is the general tab panel.</bui-tab-panel>
  <bui-tab-panel name="custom">This is the custom tab panel.</bui-tab-panel>
  <bui-tab-panel name="advanced">This is the advanced tab panel.</bui-tab-panel>
  <bui-tab-panel name="disabled">This is a disabled tab panel.</bui-tab-panel>
</bui-tab-group>
```

```jsx react
import { Tab, TabGroup, TabPanel } from 'buckeye-ui/dist/react';

const App = () => (
  <TabGroup activation="manual">
    <Tab slot="nav" panel="general">
      General
    </Tab>
    <Tab slot="nav" panel="custom">
      Custom
    </Tab>
    <Tab slot="nav" panel="advanced">
      Advanced
    </Tab>
    <Tab slot="nav" panel="disabled" disabled>
      Disabled
    </Tab>

    <TabPanel name="general">This is the general tab panel.</TabPanel>
    <TabPanel name="custom">This is the custom tab panel.</TabPanel>
    <TabPanel name="advanced">This is the advanced tab panel.</TabPanel>
    <TabPanel name="disabled">This is a disabled tab panel.</TabPanel>
  </TabGroup>
);
```

[component-metadata:bui-tab-group]
