# Vue

Vue [plays nice](https://custom-elements-everywhere.com/#vue) with custom elements, so you can use BuckeyeUI in your Vue apps with ease.

?> These instructions are for Vue 3 and above. If you're using Vue 2, please see the [Vue 2 instructions](/frameworks/vue-2).

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
import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('bui-')
        }
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
```

Now you can start using BuckeyeUI components in your app!

## Usage

### QR code generator example

```html
<template>
  <div class="container">
    <h1>QR code generator</h1>

    <bui-input maxlength="255" clearable label="Value" v-model="qrCode"></bui-input>

    <bui-qr-code :value="qrCode"></bui-qr-code>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import 'buckeye-ui/dist/components/qr-code/qr-code.js';
  import 'buckeye-ui/dist/components/input/input.js';

  const qrCode = ref();
</script>

<style>
  .container {
    max-width: 400px;
    margin: 0 auto;
  }

  bui-input {
    margin: var(--bui-spacing-large) 0;
  }
</style>
```

### Binding Complex Data

When binding complex data such as objects and arrays, use the `.prop` modifier to make Vue bind them as a property instead of an attribute.

```html
<bui-color-picker :swatches.prop="mySwatches" />
```

?> Are you using BuckeyeUI with Vue? [Help us improve this page!](https://github.com/bfdeloitte/buckeye-ui/blob/main/docs/frameworks/vue.md)

### Slots

To use BuckeyeUI components with slots, follow the Vue documentation on using [slots with custom elements](https://vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue).

Here is an example:

```html
<bui-drawer label="Drawer" placement="start" class="drawer-placement-start" :open="drawerIsOpen">
  This drawer slides in from the start.
  <div slot="footer">
    <bui-button variant="primary" @click=" drawerIsOpen = false">Close</bui-button>
  </div>
</bui-drawer>
```
