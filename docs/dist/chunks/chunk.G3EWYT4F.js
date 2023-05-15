import {
  component_styles_default
} from "./chunk.T6URVWFA.js";
import {
  i
} from "./chunk.D4QE2MLU.js";

// src/components/icon-button/icon-button.styles.ts
var icon_button_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-block;
    color: var(--bui-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--bui-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--bui-spacing-x-small);
    cursor: pointer;
    transition: var(--bui-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--bui-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--bui-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--bui-focus-ring);
    outline-offset: var(--bui-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;

export {
  icon_button_styles_default
};
