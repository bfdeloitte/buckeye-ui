import {
  carousel_item_styles_default
} from "./chunk.5C3T27AP.js";
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

// src/components/carousel-item/carousel-item.ts
var CarouselItem = class extends BuckeyeElement {
  static isCarouselItem(node) {
    return node instanceof Element && node.getAttribute("aria-roledescription") === "slide";
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "group");
  }
  render() {
    return x` <slot></slot> `;
  }
};
CarouselItem.styles = carousel_item_styles_default;
CarouselItem = __decorateClass([
  e("bui-carousel-item")
], CarouselItem);

export {
  CarouselItem
};
