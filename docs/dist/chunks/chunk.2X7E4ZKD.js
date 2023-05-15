import {
  tag_styles_default
} from "./chunk.GB7RXXKE.js";
import {
  LocalizeController
} from "./chunk.MQ6XKY3Z.js";
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

// src/components/tag/tag.ts
var Tag = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.variant = "neutral";
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    this.emit("bui-remove");
  }
  render() {
    return x`
      <span
        part="base"
        class=${o({
      tag: true,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? x`
              <bui-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></bui-icon-button>
            ` : ""}
      </span>
    `;
  }
};
Tag.styles = tag_styles_default;
__decorateClass([
  e2({ reflect: true })
], Tag.prototype, "variant", 2);
__decorateClass([
  e2({ reflect: true })
], Tag.prototype, "size", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Tag.prototype, "pill", 2);
__decorateClass([
  e2({ type: Boolean })
], Tag.prototype, "removable", 2);
Tag = __decorateClass([
  e("bui-tag")
], Tag);

export {
  Tag
};
