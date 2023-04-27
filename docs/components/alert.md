# Alert

[component-header:bui-alert]

```html preview
<bui-alert open>
  <bui-icon slot="icon" name="info-circle"></bui-icon>
  This is a standard alert. You can customize its content and even the icon.
</bui-alert>
```

```jsx react
import { Alert, Icon } from 'buckeye-ui/dist/react';

const App = () => (
  <Alert open>
    <Icon slot="icon" name="info-circle" />
    This is a standard alert. You can customize its content and even the icon.
  </Alert>
);
```

?> Alerts will not be visible if the `open` attribute is not present.

## Examples

### Variants

Set the `variant` attribute to change the alert's variant.

```html preview
<bui-alert variant="primary" open>
  <bui-icon slot="icon" name="info-circle"></bui-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</bui-alert>

<br />

<bui-alert variant="success" open>
  <bui-icon slot="icon" name="check2-circle"></bui-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</bui-alert>

<br />

<bui-alert variant="neutral" open>
  <bui-icon slot="icon" name="gear"></bui-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</bui-alert>

<br />

<bui-alert variant="warning" open>
  <bui-icon slot="icon" name="exclamation-triangle"></bui-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</bui-alert>

<br />

<bui-alert variant="danger" open>
  <bui-icon slot="icon" name="exclamation-octagon"></bui-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</bui-alert>
```

```jsx react
import { Alert, Icon } from 'buckeye-ui/dist/react';

const App = () => (
  <>
    <Alert variant="primary" open>
      <Icon slot="icon" name="info-circle" />
      <strong>This is super informative</strong>
      <br />
      You can tell by how pretty the alert is.
    </Alert>

    <br />

    <Alert variant="success" open>
      <Icon slot="icon" name="check2-circle" />
      <strong>Your changes have been saved</strong>
      <br />
      You can safely exit the app now.
    </Alert>

    <br />

    <Alert variant="neutral" open>
      <Icon slot="icon" name="gear" />
      <strong>Your settings have been updated</strong>
      <br />
      Settings will take affect on next login.
    </Alert>

    <br />

    <Alert variant="warning" open>
      <Icon slot="icon" name="exclamation-triangle" />
      <strong>Your session has ended</strong>
      <br />
      Please login again to continue.
    </Alert>

    <br />

    <Alert variant="danger" open>
      <Icon slot="icon" name="exclamation-octagon" />
      <strong>Your account has been deleted</strong>
      <br />
      We're very sorry to see you go!
    </Alert>
  </>
);
```

### Closable

Add the `closable` attribute to show a close button that will hide the alert.

```html preview
<bui-alert variant="primary" open closable class="alert-closable">
  <bui-icon slot="icon" name="info-circle"></bui-icon>
  You can close this alert any time!
</bui-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('bui-after-hide', () => {
    setTimeout(() => (alert.open = true), 2000);
  });
</script>
```

```jsx react
import { useState } from 'react';
import { Alert, Icon } from 'buckeye-ui/dist/react';

const App = () => {
  const [open, setOpen] = useState(true);

  function handleHide() {
    setOpen(false);
    setTimeout(() => setOpen(true), 2000);
  }

  return (
    <Alert open={open} closable onAfterHide={handleHide}>
      <Icon slot="icon" name="info-circle" />
      You can close this alert any time!
    </Alert>
  );
};
```

### Without Icons

Icons are optional. Simply omit the `icon` slot if you don't want them.

```html preview
<bui-alert variant="primary" open> Nothing fancy here, just a simple alert. </bui-alert>
```

```jsx react
import { Alert } from 'buckeye-ui/dist/react';

const App = () => (
  <Alert variant="primary" open>
    Nothing fancy here, just a simple alert.
  </Alert>
);
```

### Duration

Set the `duration` attribute to automatically hide an alert after a period of time. This is useful for alerts that don't require acknowledgement.

```html preview
<div class="alert-duration">
  <bui-button variant="primary">Show Alert</bui-button>

  <bui-alert variant="primary" duration="3000" closable>
    <bui-icon slot="icon" name="info-circle"></bui-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </bui-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('bui-button');
  const alert = container.querySelector('bui-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration bui-alert {
    margin-top: var(--bui-spacing-medium);
  }
</style>
```

```jsx react
import { useState } from 'react';
import { Alert, Button, Icon } from 'buckeye-ui/dist/react';

const css = `
  .alert-duration bui-alert {
    margin-top: var(--bui-spacing-medium);
  }
`;

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="alert-duration">
        <Button variant="primary" onClick={() => setOpen(true)}>
          Show Alert
        </Button>

        <Alert variant="primary" duration="3000" open={open} closable onAfterHide={() => setOpen(false)}>
          <Icon slot="icon" name="info-circle" />
          This alert will automatically hide itself after three seconds, unless you interact with it.
        </Alert>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Toast Notifications

To display an alert as a toast notification, or "toast", create the alert and call its `toast()` method. This will move the alert out of its position in the DOM and into [the toast stack](#the-toast-stack) where it will be shown. Once dismissed, it will be removed from the DOM completely. To reuse a toast, store a reference to it and call `toast()` again later on.

You should always use the `closable` attribute so users can dismiss the notification. It's also common to set a reasonable `duration` when the notification doesn't require acknowledgement.

```html preview
<div class="alert-toast">
  <bui-button variant="primary">Primary</bui-button>
  <bui-button variant="success">Success</bui-button>
  <bui-button variant="neutral">Neutral</bui-button>
  <bui-button variant="warning">Warning</bui-button>
  <bui-button variant="danger">Danger</bui-button>

  <bui-alert variant="primary" duration="3000" closable>
    <bui-icon slot="icon" name="info-circle"></bui-icon>
    <strong>This is super informative</strong><br />
    You can tell by how pretty the alert is.
  </bui-alert>

  <bui-alert variant="success" duration="3000" closable>
    <bui-icon slot="icon" name="check2-circle"></bui-icon>
    <strong>Your changes have been saved</strong><br />
    You can safely exit the app now.
  </bui-alert>

  <bui-alert variant="neutral" duration="3000" closable>
    <bui-icon slot="icon" name="gear"></bui-icon>
    <strong>Your settings have been updated</strong><br />
    Settings will take affect on next login.
  </bui-alert>

  <bui-alert variant="warning" duration="3000" closable>
    <bui-icon slot="icon" name="exclamation-triangle"></bui-icon>
    <strong>Your session has ended</strong><br />
    Please login again to continue.
  </bui-alert>

  <bui-alert variant="danger" duration="3000" closable>
    <bui-icon slot="icon" name="exclamation-octagon"></bui-icon>
    <strong>Your account has been deleted</strong><br />
    We're very sorry to see you go!
  </bui-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'neutral', 'warning', 'danger'].map(variant => {
    const button = container.querySelector(`bui-button[variant="${variant}"]`);
    const alert = container.querySelector(`bui-alert[variant="${variant}"]`);

    button.addEventListener('click', () => alert.toast());
  });
</script>
```

```jsx react
import { useRef } from 'react';
import { Alert, Button, Icon } from 'buckeye-ui/dist/react';

function showToast(alert) {
  alert.toast();
}

const App = () => {
  const primary = useRef(null);
  const success = useRef(null);
  const neutral = useRef(null);
  const warning = useRef(null);
  const danger = useRef(null);

  return (
    <>
      <Button variant="primary" onClick={() => primary.current.toast()}>
        Primary
      </Button>

      <Button variant="success" onClick={() => success.current.toast()}>
        Success
      </Button>

      <Button variant="neutral" onClick={() => neutral.current.toast()}>
        Neutral
      </Button>

      <Button variant="warning" onClick={() => warning.current.toast()}>
        Warning
      </Button>

      <Button variant="danger" onClick={() => danger.current.toast()}>
        Danger
      </Button>

      <Alert ref={primary} variant="primary" duration="3000" closable>
        <Icon slot="icon" name="info-circle" />
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </Alert>

      <Alert ref={success} variant="success" duration="3000" closable>
        <Icon slot="icon" name="check2-circle" />
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </Alert>

      <Alert ref={neutral} variant="neutral" duration="3000" closable>
        <Icon slot="icon" name="gear" />
        <strong>Your settings have been updated</strong>
        <br />
        Settings will take affect on next login.
      </Alert>

      <Alert ref={warning} variant="warning" duration="3000" closable>
        <Icon slot="icon" name="exclamation-triangle" />
        <strong>Your session has ended</strong>
        <br />
        Please login again to continue.
      </Alert>

      <Alert ref={danger} variant="danger" duration="3000" closable>
        <Icon slot="icon" name="exclamation-octagon" />
        <strong>Your account has been deleted</strong>
        <br />
        We're very sorry to see you go!
      </Alert>
    </>
  );
};
```

### Creating Toasts Imperatively

For convenience, you can create a utility that emits toast notifications with a function call rather than composing them in your HTML. To do this, generate the alert with JavaScript, append it to the body, and call the `toast()` method as shown in the example below.

```html preview
<div class="alert-toast-wrapper">
  <bui-button variant="primary">Create Toast</bui-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('bui-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Custom function to emit toast notifications
  function notify(message, variant = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('bui-alert'), {
      variant,
      closable: true,
      duration: duration,
      innerHTML: `
        <bui-icon name="${icon}" slot="icon"></bui-icon>
        ${escapeHtml(message)}
      `
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(`This is custom toast #${++count}`);
  });
</script>
```

### The Toast Stack

The toast stack is a fixed position singleton element created and managed internally by the alert component. It will be added and removed from the DOM as needed when toasts are shown. When more than one toast is visible, they will stack vertically in the toast stack.

By default, the toast stack is positioned at the top-right of the viewport. You can change its position by targeting `.bui-toast-stack` in your stylesheet. To make toasts appear at the top-left of the viewport, for example, use the following styles.

```css
.bui-toast-stack {
  left: 0;
  right: auto;
}
```

?> By design, it is not possible to show toasts in more than one stack simultaneously. Such behavior is confusing and makes for a poor user experience.

[component-metadata:bui-alert]
