import {
  component_styles_default
} from "./chunk.T6URVWFA.js";
import {
  i
} from "./chunk.D4QE2MLU.js";

// src/components/tooltip/tooltip.styles.ts
var tooltip_styles_default = i`
  ${component_styles_default}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--bui-tooltip-arrow-size);
    --arrow-color: var(--bui-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--bui-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--bui-tooltip-border-radius);
    background-color: var(--bui-tooltip-background-color);
    font-family: var(--bui-tooltip-font-family);
    font-size: var(--bui-tooltip-font-size);
    font-weight: var(--bui-tooltip-font-weight);
    line-height: var(--bui-tooltip-line-height);
    color: var(--bui-tooltip-color);
    padding: var(--bui-tooltip-padding);
    pointer-events: none;
  }
`;

export {
  tooltip_styles_default
};
