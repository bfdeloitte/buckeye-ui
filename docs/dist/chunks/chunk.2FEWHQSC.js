import {
  dropdown_styles_default
} from "./chunk.RNOEOZSD.js";
import {
  getTabbableBoundary
} from "./chunk.G7G6UAKI.js";
import {
  getAnimation,
  setDefaultAnimation
} from "./chunk.OAQT3AUQ.js";
import {
  waitForEvent
} from "./chunk.B4BZKR24.js";
import {
  animateTo,
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

// src/components/dropdown/dropdown.ts
var Dropdown = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.open = false;
    this.placement = "bottom-start";
    this.disabled = false;
    this.stayOpenOnSelect = false;
    this.distance = 0;
    this.skidding = 0;
    this.hoist = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
    if (!this.containingElement) {
      this.containingElement = this;
    }
  }
  firstUpdated() {
    this.panel.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      this.popup.active = true;
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
  }
  focusOnTrigger() {
    const trigger = this.trigger.assignedElements({ flatten: true })[0];
    if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
      trigger.focus();
    }
  }
  getMenu() {
    return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "bui-menu");
  }
  handleKeyDown(event) {
    if (this.open && event.key === "Escape") {
      event.stopPropagation();
      this.hide();
      this.focusOnTrigger();
    }
  }
  handleDocumentKeyDown(event) {
    var _a;
    if (event.key === "Escape" && this.open) {
      event.stopPropagation();
      this.focusOnTrigger();
      this.hide();
      return;
    }
    if (event.key === "Tab") {
      if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "bui-menu-item") {
        event.preventDefault();
        this.hide();
        this.focusOnTrigger();
        return;
      }
      setTimeout(() => {
        var _a2, _b, _c;
        const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
        if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
          this.hide();
        }
      });
    }
  }
  handleDocumentMouseDown(event) {
    const path = event.composedPath();
    if (this.containingElement && !path.includes(this.containingElement)) {
      this.hide();
    }
  }
  handlePanelSelect(event) {
    const target = event.target;
    if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "bui-menu") {
      this.hide();
      this.focusOnTrigger();
    }
  }
  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
      this.focusOnTrigger();
    }
  }
  handleTriggerKeyDown(event) {
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }
    const menu = this.getMenu();
    if (menu) {
      const menuItems = menu.getAllItems();
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (!this.open) {
          this.show();
        }
        if (menuItems.length > 0) {
          this.updateComplete.then(() => {
            if (event.key === "ArrowDown" || event.key === "Home") {
              menu.setCurrentItem(firstMenuItem);
              firstMenuItem.focus();
            }
            if (event.key === "ArrowUp" || event.key === "End") {
              menu.setCurrentItem(lastMenuItem);
              lastMenuItem.focus();
            }
          });
        }
      }
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <bui-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const assignedElements = this.trigger.assignedElements({ flatten: true });
    const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
    let target;
    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        case "bui-button":
        case "bui-icon-button":
          target = accessibleTrigger.button;
          break;
        default:
          target = accessibleTrigger;
      }
      target.setAttribute("aria-haspopup", "true");
      target.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
  }
  /** Shows the dropdown panel. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return waitForEvent(this, "bui-after-show");
  }
  /** Hides the dropdown panel */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return waitForEvent(this, "bui-after-hide");
  }
  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.popup.reposition();
  }
  addOpenListeners() {
    this.panel.addEventListener("bui-select", this.handlePanelSelect);
    this.panel.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    if (this.panel) {
      this.panel.removeEventListener("bui-select", this.handlePanelSelect);
      this.panel.removeEventListener("keydown", this.handleKeyDown);
    }
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.updateAccessibleTrigger();
    if (this.open) {
      this.emit("bui-show");
      this.addOpenListeners();
      await stopAnimations(this);
      this.panel.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = getAnimation(this, "dropdown.show", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.emit("bui-after-show");
    } else {
      this.emit("bui-hide");
      this.removeOpenListeners();
      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, "dropdown.hide", { dir: this.localize.dir() });
      await animateTo(this.popup.popup, keyframes, options);
      this.panel.hidden = true;
      this.popup.active = false;
      this.emit("bui-after-hide");
    }
  }
  render() {
    return x`
      <bui-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${o({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <slot
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open ? "false" : "true"}
          aria-labelledby="dropdown"
        ></slot>
      </bui-popup>
    `;
  }
};
Dropdown.styles = dropdown_styles_default;
__decorateClass([
  i(".dropdown")
], Dropdown.prototype, "popup", 2);
__decorateClass([
  i(".dropdown__trigger")
], Dropdown.prototype, "trigger", 2);
__decorateClass([
  i(".dropdown__panel")
], Dropdown.prototype, "panel", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Dropdown.prototype, "open", 2);
__decorateClass([
  e2({ reflect: true })
], Dropdown.prototype, "placement", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Dropdown.prototype, "disabled", 2);
__decorateClass([
  e2({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
], Dropdown.prototype, "stayOpenOnSelect", 2);
__decorateClass([
  e2({ attribute: false })
], Dropdown.prototype, "containingElement", 2);
__decorateClass([
  e2({ type: Number })
], Dropdown.prototype, "distance", 2);
__decorateClass([
  e2({ type: Number })
], Dropdown.prototype, "skidding", 2);
__decorateClass([
  e2({ type: Boolean })
], Dropdown.prototype, "hoist", 2);
__decorateClass([
  watch("open", { waitUntilFirstUpdate: true })
], Dropdown.prototype, "handleOpenChange", 1);
Dropdown = __decorateClass([
  e("bui-dropdown")
], Dropdown);
setDefaultAnimation("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
setDefaultAnimation("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});

export {
  Dropdown
};
