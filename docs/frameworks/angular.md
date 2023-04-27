# Angular

Angular [plays nice](https://custom-elements-everywhere.com/#angular) with custom elements, so you can use BuckeyeUI in your Angular apps with ease.

## Installation

To add BuckeyeUI to your Angular app, install the package from npm.

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

Then make sure to apply the custom elements schema as shown below.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

## Reference BuckeyeUI components in your Angular component code

```js
import { Drawer } from 'buckeye-ui';

@Component({
  selector: 'app-drawer-example',
  template: '<div id="page"><button (click)="showDrawer()">Show drawer</button><bui-drawer #drawer label="Drawer" class="drawer-focus" style="--size: 50vw"><p>Drawer content</p></bui-drawer></div>'
})
export class DrawerExampleComponent implements OnInit {

  // use @ViewChild to get a reference to the #drawer element within component template
  @ViewChild('drawer')
  drawer?: ElementRef<Drawer>;

  ...

  constructor(...) {
  }

  ngOnInit() {
  }

  ...

  showDrawer() {
    // use nativeElement to access BuckeyeUI components
    this.drawer?.nativeElement.show();
  }
}
```

Now you can start using BuckeyeUI components in your app!

?> Are you using BuckeyeUI with Angular? [Help us improve this page!](https://github.com/bfdeloitte/buckeye-ui/blob/next/docs/frameworks/angular.md)
