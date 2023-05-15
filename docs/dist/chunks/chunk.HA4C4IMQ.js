import {
  LocalizeController
} from "./chunk.MQ6XKY3Z.js";
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

// src/components/format-date/format-date.ts
var FormatDate = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.date = new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
    if (isNaN(date.getMilliseconds())) {
      return void 0;
    }
    return x`
      <time datetime=${date.toISOString()}>
        ${this.localize.date(date, {
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      timeZoneName: this.timeZoneName,
      timeZone: this.timeZone,
      hour12
    })}
      </time>
    `;
  }
};
__decorateClass([
  e2()
], FormatDate.prototype, "date", 2);
__decorateClass([
  e2()
], FormatDate.prototype, "weekday", 2);
__decorateClass([
  e2()
], FormatDate.prototype, "era", 2);
__decorateClass([
  e2()
], FormatDate.prototype, "year", 2);
__decorateClass([
  e2()
], FormatDate.prototype, "month", 2);
__decorateClass([
  e2()
], FormatDate.prototype, "day", 2);
__decorateClass([
  e2()
], FormatDate.prototype, "hour", 2);
__decorateClass([
  e2()
], FormatDate.prototype, "minute", 2);
__decorateClass([
  e2()
], FormatDate.prototype, "second", 2);
__decorateClass([
  e2({ attribute: "time-zone-name" })
], FormatDate.prototype, "timeZoneName", 2);
__decorateClass([
  e2({ attribute: "time-zone" })
], FormatDate.prototype, "timeZone", 2);
__decorateClass([
  e2({ attribute: "hour-format" })
], FormatDate.prototype, "hourFormat", 2);
FormatDate = __decorateClass([
  e("bui-format-date")
], FormatDate);

export {
  FormatDate
};
