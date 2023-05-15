import {
  breadcrumb_item_styles_default
} from "./chunk.IAM44552.js";
import {
  l
} from "./chunk.ECDOB2MG.js";
import {
  HasSlotController
} from "./chunk.WVHZIUTV.js";
import {
  o
} from "./chunk.26WLO5GK.js";
import {
  BuckeyeElement,
  e,
  e2
} from "./chunk.5DKFNGO3.js";
import {
  x
} from "./chunk.D4QE2MLU.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/breadcrumb-item/breadcrumb-item.ts
var BreadcrumbItem = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.hasSlotController = new HasSlotController(this, "prefix", "suffix");
    this.rel = "noreferrer noopener";
  }
  render() {
    const isLink = this.href ? true : false;
    return x`
      <div
        part="base"
        class=${o({
      "breadcrumb-item": true,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <slot name="prefix" part="prefix" class="breadcrumb-item__prefix"></slot>

        ${isLink ? x`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${l(this.target ? this.target : void 0)}"
                rel=${l(this.target ? this.rel : void 0)}
              >
                <slot></slot>
              </a>
            ` : x`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <slot name="suffix" part="suffix" class="breadcrumb-item__suffix"></slot>

        <slot name="separator" part="separator" class="breadcrumb-item__separator" aria-hidden="true"></slot>
      </div>
    `;
  }
};
BreadcrumbItem.styles = breadcrumb_item_styles_default;
__decorateClass([
  e2()
], BreadcrumbItem.prototype, "href", 2);
__decorateClass([
  e2()
], BreadcrumbItem.prototype, "target", 2);
__decorateClass([
  e2()
], BreadcrumbItem.prototype, "rel", 2);
BreadcrumbItem = __decorateClass([
  e("bui-breadcrumb-item")
], BreadcrumbItem);

export {
  BreadcrumbItem
};
