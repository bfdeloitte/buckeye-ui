# More Design Tokens

All of the design tokens described herein are considered relatively stable. However, some changes might occur in future versions to address mission critical bugs or improvements. If such changes occur, they _will not_ be considered breaking changes and will be clearly documented in the [changelog](/resources/changelog).

Most design tokens are consistent across the light and dark theme. Those that vary will show both values.

?> Currently, the source of design tokens is considered to be [`light.css`](https://github.com/bfdeloitte/buckeye-ui/blob/next/src/themes/light.css). The dark theme, [dark.css](https://github.com/bfdeloitte/buckeye-ui/blob/next/src/themes/dark.css), mirrors all of the same tokens with dark mode-specific values where appropriate. Work is planned to move all design tokens to a single file, perhaps JSON or YAML, in the near future.

## Focus Rings

Focus ring tokens control the appearance of focus rings. Note that form inputs use `--bui-input-focus-ring-*` tokens instead.

| Token                     | Value                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------- |
| `--bui-focus-ring-color`  | var(--bui-color-primary-600) (light theme)<br>var(--bui-color-primary-700) (dark theme) |
| `--bui-focus-ring-style`  | solid                                                                                   |
| `--bui-focus-ring-width`  | 3px                                                                                     |
| `--bui-focus-ring`        | var(--bui-focus-ring-style) var(--bui-focus-ring-width) var(--bui-focus-ring-color)     |
| `--bui-focus-ring-offset` | 1px                                                                                     |

## Buttons

Button tokens control the appearance of buttons. In addition, buttons also currently use some form input tokens such as `--bui-input-height-*` and `--bui-input-border-*`. More button tokens may be added in the future to make it easier to style them more independently.

| Token                           | Value                        |
| ------------------------------- | ---------------------------- |
| `--bui-button-font-size-small`  | var(--bui-font-size-x-small) |
| `--bui-button-font-size-medium` | var(--bui-font-size-small)   |
| `--bui-button-font-size-large`  | var(--bui-font-size-medium)  |

## Form Inputs

Form input tokens control the appearance of form controls such as [input](/components/input), [select](/components/select), [textarea](/components/textarea), etc.

| Token                                    | Value                             |
| ---------------------------------------- | --------------------------------- |
| `--bui-input-height-small`               | 1.875rem; (30px @ 16px base)      |
| `--bui-input-height-medium`              | 2.5rem; (40px @ 16px base)        |
| `--bui-input-height-large`               | 3.125rem; (50px @ 16px base)      |
| `--bui-input-background-color`           | var(--bui-color-neutral-0)        |
| `--bui-input-background-color-hover`     | var(--bui-input-background-color) |
| `--bui-input-background-color-focus`     | var(--bui-input-background-color) |
| `--bui-input-background-color-disabled`  | var(--bui-color-neutral-100)      |
| `--bui-input-border-color`               | var(--bui-color-neutral-300)      |
| `--bui-input-border-color-hover`         | var(--bui-color-neutral-400)      |
| `--bui-input-border-color-focus`         | var(--bui-color-primary-500)      |
| `--bui-input-border-color-disabled`      | var(--bui-color-neutral-300)      |
| `--bui-input-border-width`               | 1px                               |
| `--bui-input-required-content`           | "\*"                              |
| `--bui-input-required-content-offset`    | -2px                              |
| `--bui-input-required-content-color`     | var(--bui-input-label-color)      |
| `--bui-input-border-radius-small`        | var(--bui-border-radius-medium)   |
| `--bui-input-border-radius-medium`       | var(--bui-border-radius-medium)   |
| `--bui-input-border-radius-large`        | var(--bui-border-radius-medium)   |
| `--bui-input-font-family`                | var(--bui-font-sans)              |
| `--bui-input-font-weight`                | var(--bui-font-weight-normal)     |
| `--bui-input-font-size-small`            | var(--bui-font-size-small)        |
| `--bui-input-font-size-medium`           | var(--bui-font-size-medium)       |
| `--bui-input-font-size-large`            | var(--bui-font-size-large)        |
| `--bui-input-letter-spacing`             | var(--bui-letter-spacing-normal)  |
| `--bui-input-color`                      | var(--bui-color-neutral-700)      |
| `--bui-input-color-hover`                | var(--bui-color-neutral-700)      |
| `--bui-input-color-focus`                | var(--bui-color-neutral-700)      |
| `--bui-input-color-disabled`             | var(--bui-color-neutral-900)      |
| `--bui-input-icon-color`                 | var(--bui-color-neutral-500)      |
| `--bui-input-icon-color-hover`           | var(--bui-color-neutral-600)      |
| `--bui-input-icon-color-focus`           | var(--bui-color-neutral-600)      |
| `--bui-input-placeholder-color`          | var(--bui-color-neutral-500)      |
| `--bui-input-placeholder-color-disabled` | var(--bui-color-neutral-600)      |
| `--bui-input-spacing-small`              | var(--bui-spacing-small)          |
| `--bui-input-spacing-medium`             | var(--bui-spacing-medium)         |
| `--bui-input-spacing-large`              | var(--bui-spacing-large)          |
| `--bui-input-focus-ring-color`           | hsl(198.6 88.7% 48.4% / 40%)      |
| `--bui-input-focus-ring-offset`          | 0                                 |

## Filled Form Inputs

Filled form input tokens control the appearance of form controls using the `filled` variant.

| Token                                          | Value                        |
| ---------------------------------------------- | ---------------------------- |
| `--bui-input-filled-background-color`          | var(--bui-color-neutral-100) |
| `--bui-input-filled-background-color-hover`    | var(--bui-color-neutral-100) |
| `--bui-input-filled-background-color-focus`    | var(--bui-color-neutral-100) |
| `--bui-input-filled-background-color-disabled` | var(--bui-color-neutral-100) |
| `--bui-input-filled-color`                     | var(--bui-color-neutral-800) |
| `--bui-input-filled-color-hover`               | var(--bui-color-neutral-800) |
| `--bui-input-filled-color-focus`               | var(--bui-color-neutral-700) |
| `--bui-input-filled-color-disabled`            | var(--bui-color-neutral-800) |

## Form Labels

Form label tokens control the appearance of labels in form controls.

| Token                                | Value                       |
| ------------------------------------ | --------------------------- |
| `--bui-input-label-font-size-small`  | var(--bui-font-size-small)  |
| `--bui-input-label-font-size-medium` | var(--bui-font-size-medium) |
| `--bui-input-label-font-size-large`  | var(--bui-font-size-large)  |
| `--bui-input-label-color`            | inherit                     |

## Help Text

Help text tokens control the appearance of help text in form controls.

| Token                                    | Value                        |
| ---------------------------------------- | ---------------------------- |
| `--bui-input-help-text-font-size-small`  | var(--bui-font-size-x-small) |
| `--bui-input-help-text-font-size-medium` | var(--bui-font-size-small)   |
| `--bui-input-help-text-font-size-large`  | var(--bui-font-size-medium)  |
| `--bui-input-help-text-color`            | var(--bui-color-neutral-500) |

## Toggles

Toggle tokens control the appearance of toggles such as [checkbox](/components/checkbox), [radio](/components/radio), [switch](/components/switch), etc.

| Token                      | Value                       |
| -------------------------- | --------------------------- |
| `--bui-toggle-size-small`  | 0.875rem (14px @ 16px base) |
| `--bui-toggle-size-medium` | 1.125rem (18px @ 16px base) |
| `--bui-toggle-size-large`  | 1.375rem (22px @ 16px base) |

## Overlays

Overlay tokens control the appearance of overlays as used in [dialog](/components/dialog), [drawer](/components/drawer), etc.

| Token                            | Value                     |
| -------------------------------- | ------------------------- |
| `--bui-overlay-background-color` | hsl(240 3.8% 46.1% / 33%) |

## Panels

Panel tokens control the appearance of panels such as those used in [dialog](/components/dialog), [drawer](/components/drawer), [menu](/components/menu), etc.

| Token                          | Value                        |
| ------------------------------ | ---------------------------- |
| `--bui-panel-background-color` | var(--bui-color-neutral-0)   |
| `--bui-panel-border-color`     | var(--bui-color-neutral-200) |
| `--bui-panel-border-width`     | 1px                          |

## Tooltips

Tooltip tokens control the appearance of tooltips. This includes the [tooltip](/components/tooltip) component as well as other implementations, such [range tooltips](/components/range).

| Token                            | Value                                                  |
| -------------------------------- | ------------------------------------------------------ |
| `--bui-tooltip-border-radius`    | var(--bui-border-radius-medium)                        |
| `--bui-tooltip-background-color` | var(--bui-color-neutral-800)                           |
| `--bui-tooltip-color`            | var(--bui-color-neutral-0)                             |
| `--bui-tooltip-font-family`      | var(--bui-font-sans)                                   |
| `--bui-tooltip-font-weight`      | var(--bui-font-weight-normal)                          |
| `--bui-tooltip-font-size`        | var(--bui-font-size-small)                             |
| `--bui-tooltip-line-height`      | var(--bui-line-height-dense)                           |
| `--bui-tooltip-padding`          | var(--bui-spacing-2x-small) var(--bui-spacing-x-small) |
| `--bui-tooltip-arrow-size`       | 6px                                                    |
