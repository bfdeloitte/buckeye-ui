# Tab Panel

[component-header:bui-tab-panel]

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

?> Additional demonstrations can be found in the [tab group examples](/components/tab-group).

[component-metadata:bui-tab-panel]
