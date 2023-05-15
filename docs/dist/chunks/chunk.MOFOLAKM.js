import {
  menu_label_styles_default
} from "./chunk.7EZVKPL4.js";
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

// src/components/menu-label/menu-label.ts
var MenuLabel = class extends BuckeyeElement {
  render() {
    return x` <slot part="base" class="menu-label"></slot> `;
  }
};
MenuLabel.styles = menu_label_styles_default;
MenuLabel = __decorateClass([
  e("bui-menu-label")
], MenuLabel);

export {
  MenuLabel
};
