# Vue (version 2)

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use BuckeyeUI in your Vue apps with ease.

!> These instructions are for Vue 2. If you're using Vue 3 or above, please see the [Vue 3 instructions](/frameworks/vue).

## Installation

To add BuckeyeUI to your Vue app, install the package from npm.

```bash
npm install buckeye-ui
```

Next, [include a theme](/getting-started/themes) and set the [base path](/getting-started/installation#setting-the-base-path) for icons and other assets. In this example, we'll import the light theme and use the CDN as a base path.

```jsx
import 'buckeye-ui/dist/themes/light.css';
import { setBasePath } from 'buckeye-ui/dist/utilities/base-path';

setBasePath('https://cdn.jsdelivr.net/npm/buckeye-ui@%VERSION%/dist/');
```

?> If you'd rather not use the CDN for assets, you can create a build task that copies `node_modules/buckeye-ui/dist/assets` into a public folder in your app. Then you can point the base path to that folder instead.

## Configuration

You'll need to tell Vue to ignore BuckeyeUI components. This is pretty easy because they all start with `bui-`.

```js
import Vue from 'vue';
import App from './App.vue';

Vue.config.ignoredElements = [/bui-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can start using BuckeyeUI components in your app!

## Usage

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<bui-color-picker :swatches.prop="mySwatches" />
```

### Two-way Binding

One caveat is there's currently [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830), but you can still achieve two-way binding manually.

```html
<!-- This doesn't work -->
<bui-input v-model="name"></bui-input>
<!-- This works, but it's a bit longer -->
<bui-input :value="name" @input="name = $event.target.value"></bui-input>
```

If that's too verbose for your liking, you can use a custom directive instead. [This utility](https://www.npmjs.com/package/@shoelace-style/vue-bui-model) adds a custom directive that will work just like `v-model` but for BuckeyeUI components. To install it, use this command.

```bash
npm install @shoelace-style/vue-bui-model@1
```

Next, import the directive and enable it like this.

```js
import Vue from 'vue';
import BuckeyeModelDirective from '@shoelace-style/vue-bui-model';
import App from './App.vue';

Vue.use(BuckeyeModelDirective);
Vue.config.ignoredElements = [/bui-/];

const app = new Vue({
  render: h => h(App)
});

app.$mount('#app');
```

Now you can use the `v-bui-model` directive to keep your data in sync!

```html
<bui-input v-bui-model="name"></bui-input>
```

?> Are you using BuckeyeUI with Vue? [Help us improve this page!](https://github.com/bfdeloitte/buckeye-ui/blob/next/docs/frameworks/vue-2.md)
