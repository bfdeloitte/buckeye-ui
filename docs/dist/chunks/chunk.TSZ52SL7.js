import {
  progress_ring_styles_default
} from "./chunk.CR4UGUKP.js";
import {
  LocalizeController
} from "./chunk.MQ6XKY3Z.js";
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

// src/components/progress-ring/progress-ring.ts
var ProgressRing = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.label = "";
  }
  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has("value")) {
      const radius = parseFloat(getComputedStyle(this.indicator).getPropertyValue("r"));
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - this.value / 100 * circumference;
      this.indicatorOffset = `${offset}px`;
    }
  }
  render() {
    return x`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value / 100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `;
  }
};
ProgressRing.styles = progress_ring_styles_default;
__decorateClass([
  i(".progress-ring__indicator")
], ProgressRing.prototype, "indicator", 2);
__decorateClass([
  t()
], ProgressRing.prototype, "indicatorOffset", 2);
__decorateClass([
  e2({ type: Number, reflect: true })
], ProgressRing.prototype, "value", 2);
__decorateClass([
  e2()
], ProgressRing.prototype, "label", 2);
ProgressRing = __decorateClass([
  e("bui-progress-ring")
], ProgressRing);

export {
  ProgressRing
};
