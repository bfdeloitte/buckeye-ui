import {
  tooltip_styles_default
} from "./chunk.NBYHWXTD.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.OAQT3AUQ.js";
import {
  waitForEvent
} from "./chunk.B4BZKR24.js";
import {
  animateTo,
  parseDuration,
  stopAnimations
} from "./chunk.65AZ2BGN.js";
import {
  LocalizeController
} from "./chunk.MQ6XKY3Z.js";
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

// src/components/tooltip/tooltip.ts
var Tooltip = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.content = "";
    this.placement = "top";
    this.disabled = false;
    this.distance = 8;
    this.open = false;
    this.skidding = 0;
    this.trigger = "hover focus";
    this.hoist = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.updateComplete.then(() => {
      this.addEventListener("blur", this.handleBlur, true);
      this.addEventListener("focus", this.handleFocus, true);
      this.addEventListener("click", this.handleClick);
      this.addEventListener("keydown", this.handleKeyDown);
      this.addEventListener("mouseover", this.handleMouseOver);
      this.addEventListener("mouseout", this.handleMouseOut);
    });
  }
  firstUpdated() {
    this.body.hidden = !this.open;
    if (this.open) {
      this.popup.active = true;
      this.popup.reposition();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("blur", this.handleBlur, true);
    this.removeEventListener("focus", this.handleFocus, true);
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("keydown", this.handleKeyDown);
    this.removeEventListener("mouseover", this.handleMouseOver);
    this.removeEventListener("mouseout", this.handleMouseOut);
  }
  handleBlur() {
    if (this.hasTrigger("focus")) {
      this.hide();
    }
  }
  handleClick() {
    if (this.hasTrigger("click")) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }
  handleFocus() {
    if (this.hasTrigger("focus")) {
      this.show();
    }
  }
  handleKeyDown(event) {
    if (this.open && event.key === "Escape") {
      event.stopPropagation();
      this.hide();
    }
  }
  handleMouseOver() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => this.show(), delay);
    }
  }
  handleMouseOut() {
    if (this.hasTrigger("hover")) {
      const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = window.setTimeout(() => this.hide(), delay);
    }
  }
  hasTrigger(triggerType) {
    const triggers = this.trigger.split(" ");
    return triggers.includes(triggerType);
  }
  async handleOpenChange() {
    if (this.open) {
      if (this.disabled) {
        return;
      }
      this.emit("bui-show");
      await stopAnimations(this.body);
      this.body.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, "tooltip.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.emit("bui-after-show");
    } else {
      this.emit("bui-hide");
      await stopAnimations(this.body);
      const { keyframes, options } = getAnimation(this, "tooltip.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.popup.active = false;
      this.body.hidden = true;
      this.emit("bui-after-hide");
    }
  }
  async handleOptionsChange() {
    if (this.hasUpdated) {
      await this.updateComplete;
      this.popup.reposition();
    }
  }
  handleDisabledChange() {
    if (this.disabled && this.open) {
      this.hide();
    }
  }
  /** Shows the tooltip. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "bui-after-show");
  }
  /** Hides the tooltip */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "bui-after-hide");
  }
  render() {
    return x`
      <bui-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${o({
      tooltip: true,
      "tooltip--open": this.open
    })}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <slot
          name="content"
          part="body"
          id="tooltip"
          class="tooltip__body"
          role="tooltip"
          aria-live=${this.open ? "polite" : "off"}
        >
          ${this.content}
        </slot>
      </bui-popup>
    `;
  }
};
Tooltip.styles = tooltip_styles_default;
__decorateClass([
  i("slot:not([name])")
], Tooltip.prototype, "defaultSlot", 2);
__decorateClass([
  i(".tooltip__body")
], Tooltip.prototype, "body", 2);
__decorateClass([
  i("bui-popup")
], Tooltip.prototype, "popup", 2);
__decorateClass([
  e2()
], Tooltip.prototype, "content", 2);
__decorateClass([
  e2()
], Tooltip.prototype, "placement", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Tooltip.prototype, "disabled", 2);
__decorateClass([
  e2({ type: Number })
], Tooltip.prototype, "distance", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Tooltip.prototype, "open", 2);
__decorateClass([
  e2({ type: Number })
], Tooltip.prototype, "skidding", 2);
__decorateClass([
  e2()
], Tooltip.prototype, "trigger", 2);
__decorateClass([
  e2({ type: Boolean })
], Tooltip.prototype, "hoist", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], Tooltip.prototype, "handleOpenChange", 1);
__decorateClass([
  watch(["content", "distance", "hoist", "placement", "skidding"])
], Tooltip.prototype, "handleOptionsChange", 1);
__decorateClass([
  watch("disabled")
], Tooltip.prototype, "handleDisabledChange", 1);
Tooltip = __decorateClass([
  e("bui-tooltip")
], Tooltip);
setDefaultAnimation("tooltip.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 150, easing: "ease" }
});
setDefaultAnimation("tooltip.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 150, easing: "ease" }
});

export {
  Tooltip
};
