import {
  menu_item_styles_default
} from "./chunk.PTGRE6JG.js";
import {
  getTextContent
} from "./chunk.WVHZIUTV.js";
import {
  o
} from "./chunk.26WLO5GK.js";
import {
  watch
} from "./chunk.VQ3XOPCT.js";
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

// src/components/menu-item/menu-item.ts
var MenuItem = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.type = "normal";
    this.checked = false;
    this.value = "";
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleHostClick = this.handleHostClick.bind(this);
    this.addEventListener("click", this.handleHostClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleHostClick);
  }
  handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();
    if (typeof this.cachedTextLabel === "undefined") {
      this.cachedTextLabel = textLabel;
      return;
    }
    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit("slotchange", { bubbles: true, composed: false, cancelable: false });
    }
  }
  handleHostClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
  handleCheckedChange() {
    if (this.checked && this.type !== "checkbox") {
      this.checked = false;
      console.error('The checked attribute can only be used on menu items with type="checkbox"', this);
      return;
    }
    if (this.type === "checkbox") {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.removeAttribute("aria-checked");
    }
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleTypeChange() {
    if (this.type === "checkbox") {
      this.setAttribute("role", "menuitemcheckbox");
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
    } else {
      this.setAttribute("role", "menuitem");
      this.removeAttribute("aria-checked");
    }
  }
  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }
  render() {
    return x`
      <div
        part="base"
        class=${o({
      "menu-item": true,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled,
      "menu-item--has-submenu": false
      // reserved for future use
    })}
      >
        <span part="checked-icon" class="menu-item__check">
          <bui-icon name="check" library="system" aria-hidden="true"></bui-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span class="menu-item__chevron">
          <bui-icon name="chevron-right" library="system" aria-hidden="true"></bui-icon>
        </span>
      </div>
    `;
  }
};
MenuItem.styles = menu_item_styles_default;
__decorateClass([
  i("slot:not([name])")
], MenuItem.prototype, "defaultSlot", 2);
__decorateClass([
  i(".menu-item")
], MenuItem.prototype, "menuItem", 2);
__decorateClass([
  e2()
], MenuItem.prototype, "type", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], MenuItem.prototype, "checked", 2);
__decorateClass([
  e2()
], MenuItem.prototype, "value", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], MenuItem.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], MenuItem.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled")
], MenuItem.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("type")
], MenuItem.prototype, "handleTypeChange", 1);
MenuItem = __decorateClass([
  e("bui-menu-item")
], MenuItem);

export {
  MenuItem
};
