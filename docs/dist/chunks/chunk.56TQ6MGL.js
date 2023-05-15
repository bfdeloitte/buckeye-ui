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

// src/components/format-number/format-number.ts
var FormatNumber = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    return this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
};
__decorateClass([
  e2({ type: Number })
], FormatNumber.prototype, "value", 2);
__decorateClass([
  e2()
], FormatNumber.prototype, "type", 2);
__decorateClass([
  e2({ attribute: "no-grouping", type: Boolean })
], FormatNumber.prototype, "noGrouping", 2);
__decorateClass([
  e2()
], FormatNumber.prototype, "currency", 2);
__decorateClass([
  e2({ attribute: "currency-display" })
], FormatNumber.prototype, "currencyDisplay", 2);
__decorateClass([
  e2({ attribute: "minimum-integer-digits", type: Number })
], FormatNumber.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  e2({ attribute: "minimum-fraction-digits", type: Number })
], FormatNumber.prototype, "minimumFractionDigits", 2);
__decorateClass([
  e2({ attribute: "maximum-fraction-digits", type: Number })
], FormatNumber.prototype, "maximumFractionDigits", 2);
__decorateClass([
  e2({ attribute: "minimum-significant-digits", type: Number })
], FormatNumber.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  e2({ attribute: "maximum-significant-digits", type: Number })
], FormatNumber.prototype, "maximumSignificantDigits", 2);
FormatNumber = __decorateClass([
  e("bui-format-number")
], FormatNumber);

export {
  FormatNumber
};
