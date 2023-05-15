import {
  l as l2
} from "./chunk.MYLHODQX.js";
import {
  defaultValue
} from "./chunk.URL2FFBH.js";
import {
  checkbox_styles_default
} from "./chunk.4XISVJX6.js";
import {
  FormControlController
} from "./chunk.2NG3IXEM.js";
import {
  l
} from "./chunk.ECDOB2MG.js";
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
  i,
  t
} from "./chunk.5DKFNGO3.js";
import {
  x
} from "./chunk.D4QE2MLU.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/checkbox/checkbox.ts
var Checkbox = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      value: (control) => control.checked ? control.value || "on" : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "medium";
    this.disabled = false;
    this.checked = false;
    this.indeterminate = false;
    this.defaultChecked = false;
    this.form = "";
    this.required = false;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit("bui-change");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("bui-blur");
  }
  handleInput() {
    this.emit("bui-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("bui-focus");
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStateChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.formControlController.updateValidity();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    return x`
      <label
        part="base"
        class=${o({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${l(this.value)}
          .indeterminate=${l2(this.indeterminate)}
          .checked=${l2(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked ? "true" : "false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
          class="checkbox__control"
        >
          ${this.checked ? x`
                <bui-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></bui-icon>
              ` : ""}
          ${!this.checked && this.indeterminate ? x`
                <bui-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></bui-icon>
              ` : ""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `;
  }
};
Checkbox.styles = checkbox_styles_default;
__decorateClass([
  i('input[type="checkbox"]')
], Checkbox.prototype, "input", 2);
__decorateClass([
  t()
], Checkbox.prototype, "hasFocus", 2);
__decorateClass([
  e2()
], Checkbox.prototype, "title", 2);
__decorateClass([
  e2()
], Checkbox.prototype, "name", 2);
__decorateClass([
  e2()
], Checkbox.prototype, "value", 2);
__decorateClass([
  e2({ reflect: true })
], Checkbox.prototype, "size", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Checkbox.prototype, "disabled", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Checkbox.prototype, "checked", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Checkbox.prototype, "indeterminate", 2);
__decorateClass([
  defaultValue("checked")
], Checkbox.prototype, "defaultChecked", 2);
__decorateClass([
  e2({ reflect: true })
], Checkbox.prototype, "form", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Checkbox.prototype, "required", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], Checkbox.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
], Checkbox.prototype, "handleStateChange", 1);
Checkbox = __decorateClass([
  e("bui-checkbox")
], Checkbox);

export {
  Checkbox
};
