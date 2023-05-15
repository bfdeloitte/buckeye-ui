import {
  icon_button_styles_default
} from "./chunk.G3EWYT4F.js";
import {
  i as i2,
  n
} from "./chunk.DWZK57IM.js";
import {
  l
} from "./chunk.ECDOB2MG.js";
import {
  o
} from "./chunk.26WLO5GK.js";
import {
  BuckeyeElement,
  e,
  e2,
  i,
  t
} from "./chunk.5DKFNGO3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/icon-button/icon-button.ts
var IconButton = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.hasFocus = false;
    this.label = "";
    this.disabled = false;
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("bui-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("bui-focus");
  }
  handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  /** Simulates a click on the icon button. */
  click() {
    this.button.click();
  }
  /** Sets focus on the icon button. */
  focus(options) {
    this.button.focus(options);
  }
  /** Removes focus from the icon button. */
  blur() {
    this.button.blur();
  }
  render() {
    const isLink = this.href ? true : false;
    const tag = isLink ? i2`a` : i2`button`;
    return n`
      <${tag}
        part="base"
        class=${o({
      "icon-button": true,
      "icon-button--disabled": !isLink && this.disabled,
      "icon-button--focused": this.hasFocus
    })}
        ?disabled=${l(isLink ? void 0 : this.disabled)}
        type=${l(isLink ? void 0 : "button")}
        href=${l(isLink ? this.href : void 0)}
        target=${l(isLink ? this.target : void 0)}
        download=${l(isLink ? this.download : void 0)}
        rel=${l(isLink && this.target ? "noreferrer noopener" : void 0)}
        role=${l(isLink ? void 0 : "button")}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-label="${this.label}"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <bui-icon
          class="icon-button__icon"
          name=${l(this.name)}
          library=${l(this.library)}
          src=${l(this.src)}
          aria-hidden="true"
        ></bui-icon>
      </${tag}>
    `;
  }
};
IconButton.styles = icon_button_styles_default;
__decorateClass([
  i(".icon-button")
], IconButton.prototype, "button", 2);
__decorateClass([
  t()
], IconButton.prototype, "hasFocus", 2);
__decorateClass([
  e2()
], IconButton.prototype, "name", 2);
__decorateClass([
  e2()
], IconButton.prototype, "library", 2);
__decorateClass([
  e2()
], IconButton.prototype, "src", 2);
__decorateClass([
  e2()
], IconButton.prototype, "href", 2);
__decorateClass([
  e2()
], IconButton.prototype, "target", 2);
__decorateClass([
  e2()
], IconButton.prototype, "download", 2);
__decorateClass([
  e2()
], IconButton.prototype, "label", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], IconButton.prototype, "disabled", 2);
IconButton = __decorateClass([
  e("bui-icon-button")
], IconButton);

export {
  IconButton
};
