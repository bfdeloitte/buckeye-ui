import {
  component_styles_default
} from "./chunk.T6URVWFA.js";
import {
  i
} from "./chunk.D4QE2MLU.js";

// src/components/menu/menu.styles.ts
var menu_styles_default = i`
  ${component_styles_default}

  :host {
    display: block;
    position: relative;
    background: var(--bui-panel-background-color);
    border: solid var(--bui-panel-border-width) var(--bui-panel-border-color);
    border-radius: var(--bui-border-radius-medium);
    padding: var(--bui-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(bui-divider) {
    --spacing: var(--bui-spacing-x-small);
  }
`;

export {
  menu_styles_default
};
