import {
  requestInclude
} from "./chunk.XNEONNEJ.js";
import {
  include_styles_default
} from "./chunk.SIH4HHGA.js";
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

// src/components/include/include.ts
var Include = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file.ok) {
        this.emit("bui-error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
      }
      this.emit("bui-load");
    } catch (e3) {
      this.emit("bui-error", { detail: { status: -1 } });
    }
  }
  render() {
    return x`<slot></slot>`;
  }
};
Include.styles = include_styles_default;
__decorateClass([
  e2()
], Include.prototype, "src", 2);
__decorateClass([
  e2()
], Include.prototype, "mode", 2);
__decorateClass([
  e2({ attribute: "allow-scripts", type: Boolean })
], Include.prototype, "allowScripts", 2);
__decorateClass([
  watch("src")
], Include.prototype, "handleSrcChange", 1);
Include = __decorateClass([
  e("bui-include")
], Include);

export {
  Include
};
