import {
  breadcrumb_styles_default
} from "./chunk.TH6ELAN3.js";
import {
  LocalizeController
} from "./chunk.MQ6XKY3Z.js";
import {
  BuckeyeElement,
  e,
  e2,
  i
} from "./chunk.5DKFNGO3.js";
import {
  x
} from "./chunk.D4QE2MLU.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/breadcrumb/breadcrumb.ts
var Breadcrumb = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.separatorDir = this.localize.dir();
    this.label = "";
  }
  // Generates a clone of the separator element to use for each breadcrumb item
  getSeparator() {
    const separator = this.separatorSlot.assignedElements({ flatten: true })[0];
    const clone = separator.cloneNode(true);
    [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
    clone.setAttribute("data-default", "");
    clone.slot = "separator";
    return clone;
  }
  handleSlotChange() {
    const items = [...this.defaultSlot.assignedElements({ flatten: true })].filter(
      (item) => item.tagName.toLowerCase() === "bui-breadcrumb-item"
    );
    items.forEach((item, index) => {
      const separator = item.querySelector('[slot="separator"]');
      if (separator === null) {
        item.append(this.getSeparator());
      } else if (separator.hasAttribute("data-default")) {
        separator.replaceWith(this.getSeparator());
      } else {
      }
      if (index === items.length - 1) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    });
  }
  render() {
    if (this.separatorDir !== this.localize.dir()) {
      this.separatorDir = this.localize.dir();
      this.updateComplete.then(() => this.handleSlotChange());
    }
    return x`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <slot name="separator" hidden aria-hidden="true">
        <bui-icon name=${this.localize.dir() === "rtl" ? "chevron-left" : "chevron-right"} library="system"></bui-icon>
      </slot>
    `;
  }
};
Breadcrumb.styles = breadcrumb_styles_default;
__decorateClass([
  i("slot")
], Breadcrumb.prototype, "defaultSlot", 2);
__decorateClass([
  i('slot[name="separator"]')
], Breadcrumb.prototype, "separatorSlot", 2);
__decorateClass([
  e2()
], Breadcrumb.prototype, "label", 2);
Breadcrumb = __decorateClass([
  e("bui-breadcrumb")
], Breadcrumb);

export {
  Breadcrumb
};
