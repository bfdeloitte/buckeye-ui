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
  t
} from "./chunk.5DKFNGO3.js";
import {
  avatar_styles_default
} from "./chunk.Q7FRDC6S.js";
import {
  x
} from "./chunk.D4QE2MLU.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/avatar/avatar.ts
var Avatar = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.image = "";
    this.label = "";
    this.initials = "";
    this.loading = "eager";
    this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = false;
  }
  render() {
    const avatarWithImage = x`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${() => this.hasError = true}"
      />
    `;
    let avatarWithoutImage = x``;
    if (this.initials) {
      avatarWithoutImage = x`<div part="initials" class="avatar__initials">${this.initials}</div>`;
    } else {
      avatarWithoutImage = x`
        <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
          <bui-icon name="person-fill" library="system"></bui-icon>
        </slot>
      `;
    }
    return x`
      <div
        part="base"
        class=${o({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
      </div>
    `;
  }
};
Avatar.styles = avatar_styles_default;
__decorateClass([
  t()
], Avatar.prototype, "hasError", 2);
__decorateClass([
  e2()
], Avatar.prototype, "image", 2);
__decorateClass([
  e2()
], Avatar.prototype, "label", 2);
__decorateClass([
  e2()
], Avatar.prototype, "initials", 2);
__decorateClass([
  e2()
], Avatar.prototype, "loading", 2);
__decorateClass([
  e2({ reflect: true })
], Avatar.prototype, "shape", 2);
__decorateClass([
  watch("image")
], Avatar.prototype, "handleImageChange", 1);
Avatar = __decorateClass([
  e("bui-avatar")
], Avatar);

export {
  Avatar
};
