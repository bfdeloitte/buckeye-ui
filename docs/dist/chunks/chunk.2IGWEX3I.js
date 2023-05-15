import {
  spinner_styles_default
} from "./chunk.NAMSW4JC.js";
import {
  LocalizeController
} from "./chunk.MQ6XKY3Z.js";
import {
  BuckeyeElement,
  e
} from "./chunk.5DKFNGO3.js";
import {
  x
} from "./chunk.D4QE2MLU.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/spinner/spinner.ts
var SlSpinner = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
  }
  render() {
    return x`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
SlSpinner.styles = spinner_styles_default;
SlSpinner = __decorateClass([
  e("bui-spinner")
], SlSpinner);

export {
  SlSpinner
};
