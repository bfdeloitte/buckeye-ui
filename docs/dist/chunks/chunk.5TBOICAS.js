import {
  tab_panel_styles_default
} from "./chunk.Z5CBSGX2.js";
import {
  o
} from "./chunk.26WLO5GK.js";
import {
  watch
} from "./chunk.VQ3XOPCT.js";
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

// src/components/tab-panel/tab-panel.ts
var id = 0;
var TabPanel = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.attrId = ++id;
    this.componentId = `bui-tab-panel-${this.attrId}`;
    this.name = "";
    this.active = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute("role", "tabpanel");
  }
  handleActiveChange() {
    this.setAttribute("aria-hidden", this.active ? "false" : "true");
  }
  render() {
    return x`
      <slot
        part="base"
        class=${o({
      "tab-panel": true,
      "tab-panel--active": this.active
    })}
      ></slot>
    `;
  }
};
TabPanel.styles = tab_panel_styles_default;
__decorateClass([
  e2({ reflect: true })
], TabPanel.prototype, "name", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], TabPanel.prototype, "active", 2);
__decorateClass([
  watch("active")
], TabPanel.prototype, "handleActiveChange", 1);
TabPanel = __decorateClass([
  e("bui-tab-panel")
], TabPanel);

export {
  TabPanel
};
