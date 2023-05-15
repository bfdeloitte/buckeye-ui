import {
  radio_styles_default
} from "./chunk.XQSBRJXL.js";
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
  t
} from "./chunk.5DKFNGO3.js";
import {
  x
} from "./chunk.D4QE2MLU.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/radio/radio.ts
var Radio = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.checked = false;
    this.hasFocus = false;
    this.size = "medium";
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.setInitialAttributes();
    this.addEventListeners();
  }
  disconnectedCallback() {
    this.removeEventListeners();
  }
  addEventListeners() {
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("focus", this.handleFocus);
  }
  removeEventListeners() {
    this.removeEventListener("blur", this.handleBlur);
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("focus", this.handleFocus);
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("bui-blur");
  }
  handleClick() {
    if (!this.disabled) {
      this.checked = true;
    }
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("bui-focus");
  }
  setInitialAttributes() {
    this.setAttribute("role", "radio");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  handleCheckedChange() {
    this.setAttribute("aria-checked", this.checked ? "true" : "false");
    this.setAttribute("tabindex", this.checked ? "0" : "-1");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  render() {
    return x`
      <span
        part="base"
        class=${o({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus,
      "radio--small": this.size === "small",
      "radio--medium": this.size === "medium",
      "radio--large": this.size === "large"
    })}
      >
        <span part="${`control${this.checked ? " control--checked" : ""}`}" class="radio__control">
          ${this.checked ? x`
                <bui-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></bui-icon>
              ` : ""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `;
  }
};
Radio.styles = radio_styles_default;
__decorateClass([
  t()
], Radio.prototype, "checked", 2);
__decorateClass([
  t()
], Radio.prototype, "hasFocus", 2);
__decorateClass([
  e2()
], Radio.prototype, "value", 2);
__decorateClass([
  e2({ reflect: true })
], Radio.prototype, "size", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Radio.prototype, "disabled", 2);
__decorateClass([
  watch("checked")
], Radio.prototype, "handleCheckedChange", 1);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], Radio.prototype, "handleDisabledChange", 1);
Radio = __decorateClass([
  e("bui-radio")
], Radio);

export {
  Radio
};
