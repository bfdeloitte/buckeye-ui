# Icon

[component-header:bui-icon]

BuckeyeUI comes bundled with over 1,500 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These icons are part of the `default` icon library. If you prefer, you can register [custom icon libraries](#icon-libraries) as well.

?> Depending on how you're loading BuckeyeUI, you may need to copy icon assets and/or [set the base path](getting-started/installation#setting-the-base-path) so BuckeyeUI knows where to load them from. Otherwise, icons may not appear and you'll see 404 Not Found errors in the dev console.

## Default Icons

All available icons in the `default` icon library are shown below. Click or tap on any icon to copy its name, then you can use it in your HTML like this.

```html
<bui-icon name="icon-name-here"></bui-icon>
```

<div class="icon-search">
  <div class="icon-search-controls">
    <bui-input placeholder="Search Icons" clearable>
      <bui-icon slot="prefix" name="search"></bui-icon>
    </bui-input>
    <bui-select value="outline">
      <bui-option value="outline">Outlined</bui-option>
      <bui-option value="fill">Filled</bui-option>
      <bui-option value="all">All icons</bui-option>
    </bui-select>
  </div>
  <div class="icon-list"></div>
  <input type="text" class="icon-copy-input" aria-hidden="true" tabindex="-1">
</div>

## Examples

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<bui-icon>` element or an ancestor to change the color.

```html preview
<div style="color: #4a90e2;">
  <bui-icon name="exclamation-triangle"></bui-icon>
  <bui-icon name="archive"></bui-icon>
  <bui-icon name="battery-charging"></bui-icon>
  <bui-icon name="bell"></bui-icon>
</div>
<div style="color: #9013fe;">
  <bui-icon name="clock"></bui-icon>
  <bui-icon name="cloud"></bui-icon>
  <bui-icon name="download"></bui-icon>
  <bui-icon name="file-earmark"></bui-icon>
</div>
<div style="color: #417505;">
  <bui-icon name="flag"></bui-icon>
  <bui-icon name="heart"></bui-icon>
  <bui-icon name="image"></bui-icon>
  <bui-icon name="lightning"></bui-icon>
</div>
<div style="color: #f5a623;">
  <bui-icon name="mic"></bui-icon>
  <bui-icon name="search"></bui-icon>
  <bui-icon name="star"></bui-icon>
  <bui-icon name="trash"></bui-icon>
</div>
```

```jsx react
import { Icon } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <Icon name="exclamation-triangle"></Icon>
      <Icon name="archive"></Icon>
      <Icon name="battery-charging"></Icon>
      <Icon name="bell"></Icon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <Icon name="clock"></Icon>
      <Icon name="cloud"></Icon>
      <Icon name="download"></Icon>
      <Icon name="file-earmark"></Icon>
    </div>
    <div style={{ color: '#417505' }}>
      <Icon name="flag"></Icon>
      <Icon name="heart"></Icon>
      <Icon name="image"></Icon>
      <Icon name="lightning"></Icon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <Icon name="mic"></Icon>
      <Icon name="search"></Icon>
      <Icon name="star"></Icon>
      <Icon name="trash"></Icon>
    </div>
  </>
);
```

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html preview
<div style="font-size: 32px;">
  <bui-icon name="exclamation-triangle"></bui-icon>
  <bui-icon name="archive"></bui-icon>
  <bui-icon name="battery-charging"></bui-icon>
  <bui-icon name="bell"></bui-icon>
  <bui-icon name="clock"></bui-icon>
  <bui-icon name="cloud"></bui-icon>
  <bui-icon name="download"></bui-icon>
  <bui-icon name="file-earmark"></bui-icon>
  <bui-icon name="flag"></bui-icon>
  <bui-icon name="heart"></bui-icon>
  <bui-icon name="image"></bui-icon>
  <bui-icon name="lightning"></bui-icon>
  <bui-icon name="mic"></bui-icon>
  <bui-icon name="search"></bui-icon>
  <bui-icon name="star"></bui-icon>
  <bui-icon name="trash"></bui-icon>
</div>
```

```jsx react
import { Icon } from 'buckeye-ui/dist/react';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <Icon name="exclamation-triangle" />
    <Icon name="archive" />
    <Icon name="battery-charging" />
    <Icon name="bell" />
    <Icon name="clock" />
    <Icon name="cloud" />
    <Icon name="download" />
    <Icon name="file-earmark" />
    <Icon name="flag" />
    <Icon name="heart" />
    <Icon name="image" />
    <Icon name="lightning" />
    <Icon name="mic" />
    <Icon name="search" />
    <Icon name="star" />
    <Icon name="trash" />
  </div>
);
```

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html preview
<bui-icon name="star-fill" label="Add to favorites"></bui-icon>
```

```jsx react
import { Icon } from 'buckeye-ui/dist/react';

const App = () => <Icon name="star-fill" label="Add to favorites" />;
```

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html preview
<bui-icon src="https://buckeyeui.com/assets/images/shoe.svg" style="font-size: 8rem;"></bui-icon>
```

```jsx react
import { Icon } from 'buckeye-ui/dist/react';

const App = () => <Icon src="https://buckeyeui.com/assets/images/shoe.svg" style={{ fontSize: '8rem' }}></Icon>;
```

## Icon Libraries

You can register additional icons to use with the `<bui-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

BuckeyeUI ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) contains all of the icons in the Bootstrap Icons project. The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by BuckeyeUI components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `utilities/icon-library.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('my-icons', {
    resolver: name => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<bui-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<bui-icon library="my-icons" name="smile"></bui-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="boxicons" name="bx-bot"></bui-icon>
  <bui-icon library="boxicons" name="bx-cookie"></bui-icon>
  <bui-icon library="boxicons" name="bx-joystick"></bui-icon>
  <bui-icon library="boxicons" name="bx-save"></bui-icon>
  <bui-icon library="boxicons" name="bx-server"></bui-icon>
  <bui-icon library="boxicons" name="bx-wine"></bui-icon>
  <br />
  <bui-icon library="boxicons" name="bxs-bot"></bui-icon>
  <bui-icon library="boxicons" name="bxs-cookie"></bui-icon>
  <bui-icon library="boxicons" name="bxs-joystick"></bui-icon>
  <bui-icon library="boxicons" name="bxs-save"></bui-icon>
  <bui-icon library="boxicons" name="bxs-server"></bui-icon>
  <bui-icon library="boxicons" name="bxs-wine"></bui-icon>
  <br />
  <bui-icon library="boxicons" name="bxl-apple"></bui-icon>
  <bui-icon library="boxicons" name="bxl-chrome"></bui-icon>
  <bui-icon library="boxicons" name="bxl-edge"></bui-icon>
  <bui-icon library="boxicons" name="bxl-firefox"></bui-icon>
  <bui-icon library="boxicons" name="bxl-opera"></bui-icon>
  <bui-icon library="boxicons" name="bxl-microsoft"></bui-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html preview
<div style="font-size: 24px;">
  <bui-icon library="lucide" name="feather"></bui-icon>
  <bui-icon library="lucide" name="pie-chart"></bui-icon>
  <bui-icon library="lucide" name="settings"></bui-icon>
  <bui-icon library="lucide" name="map-pin"></bui-icon>
  <bui-icon library="lucide" name="printer"></bui-icon>
  <bui-icon library="lucide" name="shopping-cart"></bui-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Font Awesome

This will register the [Font Awesome Free](https://fontawesome.com/) library using the jsDelivr CDN. This library has three variations: regular (`far-*`), solid (`fas-*`), and brands (`fab-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Font Awesome Free License](https://github.com/FortAwesome/Font-Awesome/blob/master/LICENSE.txt). Some of the icons that appear on the Font Awesome website require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('fa', {
    resolver: name => {
      const filename = name.replace(/^fa[rbs]-/, '');
      let folder = 'regular';
      if (name.substring(0, 4) === 'fas-') folder = 'solid';
      if (name.substring(0, 4) === 'fab-') folder = 'brands';
      return `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${folder}/${filename}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="fa" name="far-bell"></bui-icon>
  <bui-icon library="fa" name="far-comment"></bui-icon>
  <bui-icon library="fa" name="far-hand-point-right"></bui-icon>
  <bui-icon library="fa" name="far-hdd"></bui-icon>
  <bui-icon library="fa" name="far-heart"></bui-icon>
  <bui-icon library="fa" name="far-star"></bui-icon>
  <br />
  <bui-icon library="fa" name="fas-archive"></bui-icon>
  <bui-icon library="fa" name="fas-book"></bui-icon>
  <bui-icon library="fa" name="fas-chess-knight"></bui-icon>
  <bui-icon library="fa" name="fas-dice"></bui-icon>
  <bui-icon library="fa" name="fas-pizza-slice"></bui-icon>
  <bui-icon library="fa" name="fas-scroll"></bui-icon>
  <br />
  <bui-icon library="fa" name="fab-apple"></bui-icon>
  <bui-icon library="fa" name="fab-chrome"></bui-icon>
  <bui-icon library="fa" name="fab-edge"></bui-icon>
  <bui-icon library="fa" name="fab-firefox"></bui-icon>
  <bui-icon library="fa" name="fab-opera"></bui-icon>
  <bui-icon library="fa" name="fab-microsoft"></bui-icon>
</div>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="heroicons" name="chat-bubble-left"></bui-icon>
  <bui-icon library="heroicons" name="cloud"></bui-icon>
  <bui-icon library="heroicons" name="cog"></bui-icon>
  <bui-icon library="heroicons" name="document-text"></bui-icon>
  <bui-icon library="heroicons" name="gift"></bui-icon>
  <bui-icon library="heroicons" name="speaker-wave"></bui-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="iconoir" name="check-circled-outline"></bui-icon>
  <bui-icon library="iconoir" name="drawer"></bui-icon>
  <bui-icon library="iconoir" name="keyframes"></bui-icon>
  <bui-icon library="iconoir" name="headset-help"></bui-icon>
  <bui-icon library="iconoir" name="color-picker"></bui-icon>
  <bui-icon library="iconoir" name="wifi"></bui-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="ionicons" name="alarm"></bui-icon>
  <bui-icon library="ionicons" name="american-football"></bui-icon>
  <bui-icon library="ionicons" name="bug"></bui-icon>
  <bui-icon library="ionicons" name="chatbubble"></bui-icon>
  <bui-icon library="ionicons" name="settings"></bui-icon>
  <bui-icon library="ionicons" name="warning"></bui-icon>
  <br />
  <bui-icon library="ionicons" name="alarm-outline"></bui-icon>
  <bui-icon library="ionicons" name="american-football-outline"></bui-icon>
  <bui-icon library="ionicons" name="bug-outline"></bui-icon>
  <bui-icon library="ionicons" name="chatbubble-outline"></bui-icon>
  <bui-icon library="ionicons" name="settings-outline"></bui-icon>
  <bui-icon library="ionicons" name="warning-outline"></bui-icon>
  <br />
  <bui-icon library="ionicons" name="alarm-sharp"></bui-icon>
  <bui-icon library="ionicons" name="american-football-sharp"></bui-icon>
  <bui-icon library="ionicons" name="bug-sharp"></bui-icon>
  <bui-icon library="ionicons" name="chatbubble-sharp"></bui-icon>
  <bui-icon library="ionicons" name="settings-sharp"></bui-icon>
  <bui-icon library="ionicons" name="warning-sharp"></bui-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="jam" name="calendar"></bui-icon>
  <bui-icon library="jam" name="camera"></bui-icon>
  <bui-icon library="jam" name="filter"></bui-icon>
  <bui-icon library="jam" name="leaf"></bui-icon>
  <bui-icon library="jam" name="picture"></bui-icon>
  <bui-icon library="jam" name="set-square"></bui-icon>
  <br />
  <bui-icon library="jam" name="calendar-f"></bui-icon>
  <bui-icon library="jam" name="camera-f"></bui-icon>
  <bui-icon library="jam" name="filter-f"></bui-icon>
  <bui-icon library="jam" name="leaf-f"></bui-icon>
  <bui-icon library="jam" name="picture-f"></bui-icon>
  <bui-icon library="jam" name="set-square-f"></bui-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="material" name="notifications"></bui-icon>
  <bui-icon library="material" name="email"></bui-icon>
  <bui-icon library="material" name="delete"></bui-icon>
  <bui-icon library="material" name="volume_up"></bui-icon>
  <bui-icon library="material" name="settings"></bui-icon>
  <bui-icon library="material" name="shopping_basket"></bui-icon>
  <br />
  <bui-icon library="material" name="notifications_round"></bui-icon>
  <bui-icon library="material" name="email_round"></bui-icon>
  <bui-icon library="material" name="delete_round"></bui-icon>
  <bui-icon library="material" name="volume_up_round"></bui-icon>
  <bui-icon library="material" name="settings_round"></bui-icon>
  <bui-icon library="material" name="shopping_basket_round"></bui-icon>
  <br />
  <bui-icon library="material" name="notifications_sharp"></bui-icon>
  <bui-icon library="material" name="email_sharp"></bui-icon>
  <bui-icon library="material" name="delete_sharp"></bui-icon>
  <bui-icon library="material" name="volume_up_sharp"></bui-icon>
  <bui-icon library="material" name="settings_sharp"></bui-icon>
  <bui-icon library="material" name="shopping_basket_sharp"></bui-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="remixicon" name="business/cloud-line"></bui-icon>
  <bui-icon library="remixicon" name="design/brush-line"></bui-icon>
  <bui-icon library="remixicon" name="business/pie-chart-line"></bui-icon>
  <bui-icon library="remixicon" name="development/bug-line"></bui-icon>
  <bui-icon library="remixicon" name="media/image-line"></bui-icon>
  <bui-icon library="remixicon" name="system/alert-line"></bui-icon>
  <br />
  <bui-icon library="remixicon" name="business/cloud-fill"></bui-icon>
  <bui-icon library="remixicon" name="design/brush-fill"></bui-icon>
  <bui-icon library="remixicon" name="business/pie-chart-fill"></bui-icon>
  <bui-icon library="remixicon" name="development/bug-fill"></bui-icon>
  <bui-icon library="remixicon" name="media/image-fill"></bui-icon>
  <bui-icon library="remixicon" name="system/alert-fill"></bui-icon>
</div>
```

### Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="tabler" name="alert-triangle"></bui-icon>
  <bui-icon library="tabler" name="arrow-back"></bui-icon>
  <bui-icon library="tabler" name="at"></bui-icon>
  <bui-icon library="tabler" name="ball-baseball"></bui-icon>
  <bui-icon library="tabler" name="cake"></bui-icon>
  <bui-icon library="tabler" name="files"></bui-icon>
  <br />
  <bui-icon library="tabler" name="keyboard"></bui-icon>
  <bui-icon library="tabler" name="moon"></bui-icon>
  <bui-icon library="tabler" name="pig"></bui-icon>
  <bui-icon library="tabler" name="printer"></bui-icon>
  <bui-icon library="tabler" name="ship"></bui-icon>
  <bui-icon library="tabler" name="toilet-paper"></bui-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html preview
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <bui-icon library="unicons" name="clock"></bui-icon>
  <bui-icon library="unicons" name="graph-bar"></bui-icon>
  <bui-icon library="unicons" name="padlock"></bui-icon>
  <bui-icon library="unicons" name="polygon"></bui-icon>
  <bui-icon library="unicons" name="rocket"></bui-icon>
  <bui-icon library="unicons" name="star"></bui-icon>
  <br />
  <bui-icon library="unicons" name="clock-s"></bui-icon>
  <bui-icon library="unicons" name="graph-bar-s"></bui-icon>
  <bui-icon library="unicons" name="padlock-s"></bui-icon>
  <bui-icon library="unicons" name="polygon-s"></bui-icon>
  <bui-icon library="unicons" name="rocket-s"></bui-icon>
  <bui-icon library="unicons" name="star-s"></bui-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 1,300 icons courtesy of the [Bootstrap Icons](https://icons.getbootstrap.com/) project. These are the icons that display when you use `<bui-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

This example will load the same set of icons from the jsDelivr CDN instead of your local assets folder.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('default', {
    resolver: name => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${name}.svg`
  });
</script>
```

### Customizing the System Library

The system library contains only the icons used internally by BuckeyeUI components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons BuckeyeUI uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by BuckeyeUI.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/utilities/icon-library.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

<!-- Supporting scripts and styles for the search utility -->
<script>
  function wrapWithTooltip(item) {
    const tooltip = document.createElement('bui-tooltip');
    tooltip.content = item.getAttribute('data-name');

    // Close open tooltips
    document.querySelectorAll('.icon-list bui-tooltip[open]').forEach(tooltip => tooltip.hide());

    // Wrap it with a tooltip and trick it into showing up
    item.parentNode.insertBefore(tooltip, item);
    tooltip.appendChild(item);
    requestAnimationFrame(() => tooltip.dispatchEvent(new MouseEvent('mouseover')));
  }

  fetch('/dist/assets/icons/icons.json')
    .then(res => res.json())  
    .then(icons => {
      const container = document.querySelector('.icon-search');
      const input = container.querySelector('bui-input');
      const select = container.querySelector('bui-select');
      const copyInput = container.querySelector('.icon-copy-input');
      const loader = container.querySelector('.icon-loader');
      const list = container.querySelector('.icon-list');
      const queue = [];
      let inputTimeout;

      // Generate icons
      icons.map(i => {
        const item = document.createElement('div');
        item.classList.add('icon-list-item');
        item.setAttribute('data-name', i.name);
        item.setAttribute('data-terms', [i.name, i.title, ...(i.tags || []), ...(i.categories || [])].join(' '));
        item.innerHTML = `
          <svg width="1em" height="1em" fill="currentColor">
            <use xlink:href="/assets/icons/sprite.svg#${i.name}"></use>
          </svg>      
        `;
        list.appendChild(item);

        // Wrap it with a tooltip the first time the mouse lands on it. We do this instead of baking them into the DOM 
        // to improve this page's performance. See: https://github.com/bfdeloitte/buckeye-ui/issues/1122
        item.addEventListener('mouseover', () => wrapWithTooltip(item), { once: true });

        // Copy on click
        item.addEventListener('click', () => {
          const tooltip = item.closest('bui-tooltip');
          copyInput.value = i.name;
          copyInput.select();
          document.execCommand('copy');

          if (tooltip) {
            tooltip.content = 'Copied!';
            setTimeout(() => tooltip.content = i.name, 1000);
          }
        });
      });

      // Filter as the user types
      input.addEventListener('bui-input', () => {
        clearTimeout(inputTimeout);
        inputTimeout = setTimeout(() => {
          [...list.querySelectorAll('.icon-list-item')].map(item => {
            const filter = input.value.toLowerCase();
            if (filter === '') {
              item.hidden = false;
            } else {
              const terms = item.getAttribute('data-terms').toLowerCase();
              item.hidden = terms.indexOf(filter) < 0;
            }
          });
        }, 250);
      });

      // Sort by type and remember preference
      const iconType = localStorage.getItem('bui-icon:type') || 'outline';
      select.value = iconType;
      list.setAttribute('data-type', select.value);
      select.addEventListener('bui-change', () => {
        list.setAttribute('data-type', select.value);
        localStorage.setItem('bui-icon:type', select.value);
      });
    });
</script>

<style>
  .icon-search {
    border: solid 1px var(--bui-panel-border-color);
    border-radius: var(--bui-border-radius-medium);
    padding: var(--bui-spacing-medium);
  }

  .icon-search [hidden] {
    display: none;
  }

  .icon-search-controls {
    display: flex;
  }

  .icon-search-controls bui-input {
    flex: 1 1 auto;
  }

  .icon-search-controls bui-select {
    width: 10rem;
    flex: 0 0 auto;
    margin-left: 1rem;
  }

  .icon-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 30vh;
  }

  .icon-list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    margin-top: 1rem;
  }

  .icon-loader[hidden],
  .icon-list[hidden] {
    display: none;
  }

  .icon-list-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--bui-border-radius-medium);
    font-size: 24px;
    width: 2em;
    height: 2em;
    margin: 0 auto;
    cursor: copy;
    transition: var(--bui-transition-medium) all;
  }

  .icon-list-item:hover {
    background-color: var(--bui-color-primary-50);
    color: var(--bui-color-primary-600);
  }

  .icon-list[data-type="outline"] .icon-list-item[data-name$="-fill"] {
    display: none;
  }

  .icon-list[data-type="fill"] .icon-list-item:not([data-name$="-fill"]) {
    display: none;
  }

  .icon-copy-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    .icon-list {
      grid-template-columns: repeat(8, 1fr);
    }

    .icon-list-item {
      font-size: 20px;
    }

    .icon-search-controls {
      display: block;
    }

    .icon-search-controls bui-select {
      width: auto;
      margin: 1rem 0 0 0;
    }
  }

  @media screen and (max-width: 500px) {
    .icon-list {
      grid-template-columns: repeat(4, 1fr);
    }    
  }
</style>

[component-metadata:bui-icon]
