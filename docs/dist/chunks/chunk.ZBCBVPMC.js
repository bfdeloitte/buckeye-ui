import {
  component_styles_default
} from "./chunk.T6URVWFA.js";
import {
  i
} from "./chunk.D4QE2MLU.js";

// src/components/divider/divider.styles.ts
var divider_styles_default = i`
  ${component_styles_default}

  :host {
    --color: var(--bui-panel-border-color);
    --width: var(--bui-panel-border-width);
    --spacing: var(--bui-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;

export {
  divider_styles_default
};
