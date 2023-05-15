import {
  component_styles_default
} from "./chunk.T6URVWFA.js";
import {
  i
} from "./chunk.D4QE2MLU.js";

// src/components/option/option.styles.ts
var option_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
    user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--bui-font-sans);
    font-size: var(--bui-font-size-medium);
    font-weight: var(--bui-font-weight-normal);
    line-height: var(--bui-line-height-normal);
    letter-spacing: var(--bui-letter-spacing-normal);
    color: var(--bui-color-neutral-700);
    padding: var(--bui-spacing-x-small) var(--bui-spacing-medium) var(--bui-spacing-x-small) var(--bui-spacing-x-small);
    transition: var(--bui-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--bui-color-neutral-100);
    color: var(--bui-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--bui-color-primary-600);
    color: var(--bui-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--bui-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--bui-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--bui-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--bui-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;

export {
  option_styles_default
};
