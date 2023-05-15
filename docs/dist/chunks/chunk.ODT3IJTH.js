import {
  divider_styles_default
} from "./chunk.ZBCBVPMC.js";
import {
  watch
} from "./chunk.VQ3XOPCT.js";
import {
  BuckeyeElement,
  e,
  e2
} from "./chunk.5DKFNGO3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/divider/divider.ts
var Divider = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
Divider.styles = divider_styles_default;
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Divider.prototype, "vertical", 2);
__decorateClass([
  watch("vertical")
], Divider.prototype, "handleVerticalChange", 1);
Divider = __decorateClass([
  e("bui-divider")
], Divider);

export {
  Divider
};
