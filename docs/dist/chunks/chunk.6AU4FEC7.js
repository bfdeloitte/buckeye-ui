import {
  LocalizeController
} from "./chunk.MQ6XKY3Z.js";
import {
  BuckeyeElement,
  e,
  e2
} from "./chunk.5DKFNGO3.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/format-bytes/format-bytes.ts
var FormatBytes = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.unit = "byte";
    this.display = "short";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    const bitPrefixes = ["", "kilo", "mega", "giga", "tera"];
    const bytePrefixes = ["", "kilo", "mega", "giga", "tera", "peta"];
    const prefix = this.unit === "bit" ? bitPrefixes : bytePrefixes;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const valueToFormat = parseFloat((this.value / Math.pow(1e3, index)).toPrecision(3));
    return this.localize.number(valueToFormat, {
      style: "unit",
      unit,
      unitDisplay: this.display
    });
  }
};
__decorateClass([
  e2({ type: Number })
], FormatBytes.prototype, "value", 2);
__decorateClass([
  e2()
], FormatBytes.prototype, "unit", 2);
__decorateClass([
  e2()
], FormatBytes.prototype, "display", 2);
FormatBytes = __decorateClass([
  e("bui-format-bytes")
], FormatBytes);

export {
  FormatBytes
};
