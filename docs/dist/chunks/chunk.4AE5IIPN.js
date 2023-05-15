import {
  badge_styles_default
} from "./chunk.P4I2YNPI.js";
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

// src/components/badge/badge.ts
var Badge = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.variant = "primary";
    this.pill = false;
    this.pulse = false;
  }
  render() {
    return x`
      <slot
        part="base"
        class=${o({
      badge: true,
      "badge--primary": this.variant === "primary",
      "badge--success": this.variant === "success",
      "badge--neutral": this.variant === "neutral",
      "badge--warning": this.variant === "warning",
      "badge--danger": this.variant === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      ></slot>
    `;
  }
};
Badge.styles = badge_styles_default;
__decorateClass([
  e2({ reflect: true })
], Badge.prototype, "variant", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Badge.prototype, "pill", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Badge.prototype, "pulse", 2);
Badge = __decorateClass([
  e("bui-badge")
], Badge);

export {
  Badge
};
