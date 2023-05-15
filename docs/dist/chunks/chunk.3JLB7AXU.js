import {
  progress_bar_styles_default
} from "./chunk.EES7RRU4.js";
import {
  o as o2
} from "./chunk.KHIPHGNA.js";
import {
  LocalizeController
} from "./chunk.MQ6XKY3Z.js";
import {
  l
} from "./chunk.ECDOB2MG.js";
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

// src/components/progress-bar/progress-bar.ts
var ProgressBar = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return x`
      <div
        part="base"
        class=${o({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${l(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${o2({ width: `${this.value}%` })}>
          ${!this.indeterminate ? x` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
  }
};
ProgressBar.styles = progress_bar_styles_default;
__decorateClass([
  e2({ type: Number, reflect: true })
], ProgressBar.prototype, "value", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], ProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  e2()
], ProgressBar.prototype, "label", 2);
ProgressBar = __decorateClass([
  e("bui-progress-bar")
], ProgressBar);

export {
  ProgressBar
};
