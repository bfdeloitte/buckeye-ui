import {
  component_styles_default
} from "./chunk.T6URVWFA.js";
import {
  i
} from "./chunk.D4QE2MLU.js";

// src/components/alert/alert.styles.ts
var alert_styles_default = i`
  ${component_styles_default}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--bui-panel-background-color);
    border: solid var(--bui-panel-border-width) var(--bui-panel-border-color);
    border-top-width: calc(var(--bui-panel-border-width) * 3);
    border-radius: var(--bui-border-radius-medium);
    font-family: var(--bui-font-sans);
    font-size: var(--bui-font-size-small);
    font-weight: var(--bui-font-weight-normal);
    line-height: 1.6;
    color: var(--bui-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--bui-font-size-large);
    padding-inline-start: var(--bui-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--bui-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--bui-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--bui-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--bui-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--bui-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--bui-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--bui-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--bui-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--bui-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--bui-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--bui-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--bui-font-size-medium);
    padding-inline-end: var(--bui-spacing-medium);
  }
`;

export {
  alert_styles_default
};
