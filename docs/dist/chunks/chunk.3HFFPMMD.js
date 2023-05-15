import {
  visually_hidden_styles_default
} from "./chunk.4SAT2OQA.js";
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

// src/components/visually-hidden/visually-hidden.ts
var VisuallyHidden = class extends BuckeyeElement {
  render() {
    return x` <slot></slot> `;
  }
};
VisuallyHidden.styles = visually_hidden_styles_default;
VisuallyHidden = __decorateClass([
  e("bui-visually-hidden")
], VisuallyHidden);

export {
  VisuallyHidden
};
