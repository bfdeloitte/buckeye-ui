import {
  button_group_styles_default
} from "./chunk.2ZBL7JJ4.js";
import {
  BuckeyeElement,
  e,
  e2,
  i,
  t
} from "./chunk.5DKFNGO3.js";
import {
  x
} from "./chunk.D4QE2MLU.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/button-group/button-group.ts
var ButtonGroup = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.disableRole = false;
    this.label = "";
  }
  handleFocus(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.add("bui-button-group__button--focus");
  }
  handleBlur(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.remove("bui-button-group__button--focus");
  }
  handleMouseOver(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.add("bui-button-group__button--hover");
  }
  handleMouseOut(event) {
    const button = findButton(event.target);
    button == null ? void 0 : button.classList.remove("bui-button-group__button--hover");
  }
  handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
    slottedElements.forEach((el) => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);
      if (button !== null) {
        button.classList.add("bui-button-group__button");
        button.classList.toggle("bui-button-group__button--first", index === 0);
        button.classList.toggle("bui-button-group__button--inner", index > 0 && index < slottedElements.length - 1);
        button.classList.toggle("bui-button-group__button--last", index === slottedElements.length - 1);
        button.classList.toggle("bui-button-group__button--radio", button.tagName.toLowerCase() === "bui-radio-button");
      }
    });
  }
  render() {
    return x`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole ? "presentation" : "group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `;
  }
};
ButtonGroup.styles = button_group_styles_default;
__decorateClass([
  i("slot")
], ButtonGroup.prototype, "defaultSlot", 2);
__decorateClass([
  t()
], ButtonGroup.prototype, "disableRole", 2);
__decorateClass([
  e2()
], ButtonGroup.prototype, "label", 2);
ButtonGroup = __decorateClass([
  e("bui-button-group")
], ButtonGroup);
function findButton(el) {
  var _a;
  const selector = "bui-button, bui-radio-button";
  return (_a = el.closest(selector)) != null ? _a : el.querySelector(selector);
}

export {
  ButtonGroup
};
