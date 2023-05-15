import {
  animated_image_styles_default
} from "./chunk.4537PVIQ.js";
import {
  watch
} from "./chunk.VQ3XOPCT.js";
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

// src/components/animated-image/animated-image.ts
var AnimatedImage = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.isLoaded = false;
  }
  handleClick() {
    this.play = !this.play;
  }
  handleLoad() {
    const canvas = document.createElement("canvas");
    const { width, height } = this.animatedImage;
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(this.animatedImage, 0, 0, width, height);
    this.frozenFrame = canvas.toDataURL("image/gif");
    if (!this.isLoaded) {
      this.emit("bui-load");
      this.isLoaded = true;
    }
  }
  handleError() {
    this.emit("bui-error");
  }
  handlePlayChange() {
    if (this.play) {
      this.animatedImage.src = "";
      this.animatedImage.src = this.src;
    }
  }
  handleSrcChange() {
    this.isLoaded = false;
  }
  render() {
    return x`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play ? "false" : "true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded ? x`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play ? "true" : "false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><bui-icon name="play-fill" library="system"></bui-icon></slot>
                <slot name="pause-icon"><bui-icon name="pause-fill" library="system"></bui-icon></slot>
              </div>
            ` : ""}
      </div>
    `;
  }
};
AnimatedImage.styles = animated_image_styles_default;
__decorateClass([
  i(".animated-image__animated")
], AnimatedImage.prototype, "animatedImage", 2);
__decorateClass([
  t()
], AnimatedImage.prototype, "frozenFrame", 2);
__decorateClass([
  t()
], AnimatedImage.prototype, "isLoaded", 2);
__decorateClass([
  e2()
], AnimatedImage.prototype, "src", 2);
__decorateClass([
  e2()
], AnimatedImage.prototype, "alt", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], AnimatedImage.prototype, "play", 2);
__decorateClass([
  watch("play", { waitUntilFirstUpdate: true })
], AnimatedImage.prototype, "handlePlayChange", 1);
__decorateClass([
  watch("src")
], AnimatedImage.prototype, "handleSrcChange", 1);
AnimatedImage = __decorateClass([
  e("bui-animated-image")
], AnimatedImage);

export {
  AnimatedImage
};
