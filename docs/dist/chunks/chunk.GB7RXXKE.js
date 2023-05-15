import {
  component_styles_default
} from "./chunk.T6URVWFA.js";
import {
  i
} from "./chunk.D4QE2MLU.js";

// src/components/tag/tag.styles.ts
var tag_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--bui-color-primary-50);
    border-color: var(--bui-color-primary-200);
    color: var(--bui-color-primary-800);
  }

  .tag--primary:active > bui-icon-button {
    color: var(--bui-color-primary-600);
  }

  .tag--success {
    background-color: var(--bui-color-success-50);
    border-color: var(--bui-color-success-200);
    color: var(--bui-color-success-800);
  }

  .tag--success:active > bui-icon-button {
    color: var(--bui-color-success-600);
  }

  .tag--neutral {
    background-color: var(--bui-color-neutral-50);
    border-color: var(--bui-color-neutral-200);
    color: var(--bui-color-neutral-800);
  }

  .tag--neutral:active > bui-icon-button {
    color: var(--bui-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--bui-color-warning-50);
    border-color: var(--bui-color-warning-200);
    color: var(--bui-color-warning-800);
  }

  .tag--warning:active > bui-icon-button {
    color: var(--bui-color-warning-600);
  }

  .tag--danger {
    background-color: var(--bui-color-danger-50);
    border-color: var(--bui-color-danger-200);
    color: var(--bui-color-danger-800);
  }

  .tag--danger:active > bui-icon-button {
    color: var(--bui-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--bui-button-font-size-small);
    height: calc(var(--bui-input-height-small) * 0.8);
    line-height: calc(var(--bui-input-height-small) - var(--bui-input-border-width) * 2);
    border-radius: var(--bui-input-border-radius-small);
    padding: 0 var(--bui-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--bui-button-font-size-medium);
    height: calc(var(--bui-input-height-medium) * 0.8);
    line-height: calc(var(--bui-input-height-medium) - var(--bui-input-border-width) * 2);
    border-radius: var(--bui-input-border-radius-medium);
    padding: 0 var(--bui-spacing-small);
  }

  .tag--large {
    font-size: var(--bui-button-font-size-large);
    height: calc(var(--bui-input-height-large) * 0.8);
    line-height: calc(var(--bui-input-height-large) - var(--bui-input-border-width) * 2);
    border-radius: var(--bui-input-border-radius-large);
    padding: 0 var(--bui-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--bui-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--bui-border-radius-pill);
  }
`;

export {
  tag_styles_default
};
