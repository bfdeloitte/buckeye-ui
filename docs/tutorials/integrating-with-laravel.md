# Integrating with Laravel

This page explains how to integrate BuckeyeUI with a [Laravel 9](https://laravel.com) app using Vite. For additional details refer to the [Bundling Assets (Vite)](https://laravel.com/docs/9.x/vite) section in the official Laravel docs.

?> This is a community-maintained document. Please [ask the community](/resources/community) if you have questions about this integration. You can also [suggest improvements](https://github.com/bfdeloitte/buckeye-ui/blob/main/docs/tutorials/integrating-with-laravel.md) to make it better.

## Requirements

This integration has been tested with the following:

- Laravel 9.1
- Vite 3.0

## Instructions

These instructions assume a default [Laravel 9 install](https://laravel.com/docs/9.x/installation) that uses [Vite](https://vitejs.dev/) to bundle assets.
Be sure to run `npm install` to install the default Laravel front-end dependencies before installing BuckeyeUI.

### Install the BuckeyeUI package

```bash
npm install buckeye-ui
```

### Import the Default Theme

Import the BuckeyeUI default theme (stylesheet) in `/resources/css/app.css`:

```css
@import '/node_modules/buckeye-ui/dist/themes/light.css';
```

### Import Your BuckeyeUI Components

Import each BuckeyeUI component you plan to use in `/resources/js/bootstrap.js`. Use the full path to each component (as outlined in the [Cherry Picking instructions](https://buckeyeui.com/getting-started/installation?id=cherry-picking)). You can find the full import statement for a component in the _Importing_ section of the component's documentation (use the _Bundler_ import). Your imports should look similar to:

```js
import 'buckeye-ui/dist/components/button/button.js';
import 'buckeye-ui/dist/components/icon/icon.js';
import 'buckeye-ui/dist/components/dialog/dialog.js';
```

### Copy the BuckeyeUI Static Assets (icons, images, etc.) to a Public Folder

Since Vite has no way to copy arbitrary assets into your build (like webpack), you need to manually copy the BuckeyeUI static assets to your project's public folder. Run this command from your project's root directory to copy the BuckeyeUI static assets to the `./public/assets` folder:

```sh
cp -aR node_modules/buckeye-ui/dist/assets/ ./public/assets
```

### Set the Base Path

Add the base path to your BuckeyeUI assets (icons, images, etc.) in `/resources/js/bootstrap.js`. The path must point to the same folder where you copy assets to in the next step.

```js
import { setBasePath } from 'buckeye-ui/dist/utilities/base-path.js';
setBasePath('/');
```

Example `/resources/js/bootstrap.js` file:

```js
import { setBasePath } from 'buckeye-ui/dist/utilities/base-path.js';
setBasePath('/');

import 'buckeye-ui/dist/components/button/button.js';
import 'buckeye-ui/dist/components/icon/icon.js';
import 'buckeye-ui/dist/components/dialog/dialog.js';
```

### Verify Vite Entry Points

Laravel pre-configures the Vite entry points in `vite.config.js` as `resources/css/app.css` and `resources/js/app.js`. If you use a different location for your CSS and/or Javascript entry point, update this configuration to accordingly.

```js
plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
```

### Compile Front-End Assets

Run the Vite development server or production build.

```bash
## run the Vite development bundle
npm run dev

## build a production bundle (with versioning)
npm run build
```

### Include Front-End Assets in Your Layout File

Add the `@vite()` Blade directive to the `<head>` of your application's root template.

```html
<head>
  ... @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
```

Have fun using BuckeyeUI components in your Laravel app!
