import {
  tab_styles_default
} from "./chunk.O5YV5XKM.js";
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

// src/components/tab/tab.ts
var id = 0;
var Tab = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.attrId = ++id;
    this.componentId = `bui-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleCloseClick(event) {
    event.stopPropagation();
    this.emit("bui-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
  }
  /** Sets focus to the tab. */
  focus(options) {
    this.tab.focus(options);
  }
  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return x`
      <div
        part="base"
        class=${o({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        tabindex=${this.disabled ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? x`
              <bui-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></bui-icon-button>
            ` : ""}
      </div>
    `;
  }
};
Tab.styles = tab_styles_default;
__decorateClass([
  i(".tab")
], Tab.prototype, "tab", 2);
__decorateClass([
  e2({ reflect: true })
], Tab.prototype, "panel", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Tab.prototype, "active", 2);
__decorateClass([
  e2({ type: Boolean })
], Tab.prototype, "closable", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Tab.prototype, "disabled", 2);
__decorateClass([
  watch("active")
], Tab.prototype, "handleActiveChange", 1);
__decorateClass([
  watch("disabled")
], Tab.prototype, "handleDisabledChange", 1);
Tab = __decorateClass([
  e("bui-tab")
], Tab);

export {
  Tab
};
