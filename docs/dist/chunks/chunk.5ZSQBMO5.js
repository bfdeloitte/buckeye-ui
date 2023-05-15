import {
  input_styles_default
} from "./chunk.GIVME6XG.js";
import {
  l as l2
} from "./chunk.MYLHODQX.js";
import {
  defaultValue
} from "./chunk.URL2FFBH.js";
import {
  FormControlController
} from "./chunk.2NG3IXEM.js";
import {
  LocalizeController
} from "./chunk.MQ6XKY3Z.js";
import {
  l
} from "./chunk.ECDOB2MG.js";
import {
  HasSlotController
} from "./chunk.WVHZIUTV.js";
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

// src/components/input/input.ts
var Input = class extends BuckeyeElement {
  constructor() {
    super(...arguments);
    this.formControlController = new FormControlController(this, {
      assumeInteractionOn: ["bui-blur", "bui-input"]
    });
    this.hasSlotController = new HasSlotController(this, "help-text", "label");
    this.localize = new LocalizeController(this);
    this.hasFocus = false;
    this.title = "";
    this.type = "text";
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.list = "";
    this.listOptions = "";
    this.helpText = "";
    this.clearable = false;
    this.disabled = false;
    this.placeholder = "";
    this.readonly = false;
    this.passwordToggle = false;
    this.passwordVisible = false;
    this.noSpinButtons = false;
    this.form = "";
    this.required = false;
    this.spellcheck = true;
  }
  //
  // NOTE: We use an in-memory input for these getters/setters instead of the one in the template because the properties
  // can be set before the component is rendered.
  //
  /** Gets or sets the current value as a `Date` object. Returns `null` if the value can't be converted. */
  get valueAsDate() {
    const input = document.createElement("input");
    input.type = "date";
    input.value = this.value;
    return input.valueAsDate;
  }
  set valueAsDate(newValue) {
    const input = document.createElement("input");
    input.type = "date";
    input.valueAsDate = newValue;
    this.value = input.value;
  }
  /** Gets or sets the current value as a number. Returns `NaN` if the value can't be converted. */
  get valueAsNumber() {
    const input = document.createElement("input");
    input.type = "number";
    input.value = this.value;
    return input.valueAsNumber;
  }
  set valueAsNumber(newValue) {
    const input = document.createElement("input");
    input.type = "number";
    input.valueAsNumber = newValue;
    this.value = input.value;
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
  handleBlur() {
    this.hasFocus = false;
    this.emit("bui-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.emit("bui-change");
  }
  handleClearClick(event) {
    this.value = "";
    this.emit("bui-clear");
    this.emit("bui-input");
    this.emit("bui-change");
    this.input.focus();
    event.stopPropagation();
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("bui-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.formControlController.updateValidity();
    this.emit("bui-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleKeyDown(event) {
    const hasModifier = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (event.key === "Enter" && !hasModifier) {
      setTimeout(() => {
        if (!event.defaultPrevented && !event.isComposing) {
          this.formControlController.submit();
        }
      });
    }
  }
  handlePasswordToggle() {
    this.passwordVisible = !this.passwordVisible;
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStepChange() {
    this.input.step = String(this.step);
    this.formControlController.updateValidity();
  }
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
  }
  /** Sets focus on the input. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the input. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the input. */
  select() {
    this.input.select();
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start, end, selectMode) {
    this.input.setRangeText(replacement, start, end, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Displays the browser picker for an input element (only works if the browser supports it for the input type). */
  showPicker() {
    if ("showPicker" in HTMLInputElement.prototype) {
      this.input.showPicker();
    }
  }
  /** Increments the value of a numeric input type by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
  }
  /** Decrements the value of a numeric input type by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== this.input.value) {
      this.value = this.input.value;
    }
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
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && !this.readonly && (typeof this.value === "number" || this.value.length > 0);
    const hasDatalist = this.list;
    return x`
      <div
        part="form-control"
        class=${o({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${o({
      input: true,
      // Sizes
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      // States
      "input--pill": this.pill,
      "input--standard": !this.filled,
      "input--filled": this.filled,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": !this.value,
      "input--no-spin-buttons": this.noSpinButtons
    })}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type === "password" && this.passwordVisible ? "text" : this.type}
              title=${this.title}
              name=${l(this.name)}
              list=${l(this.list)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${l(this.placeholder)}
              minlength=${l(this.minlength)}
              maxlength=${l(this.maxlength)}
              min=${l(this.min)}
              max=${l(this.max)}
              step=${l(this.step)}
              .value=${l2(this.value)}
              autocapitalize=${l(this.autocapitalize)}
              autocomplete=${l(this.autocomplete)}
              autocorrect=${l(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${l(this.pattern)}
              enterkeyhint=${l(this.enterkeyhint)}
              inputmode=${l(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${hasClearIcon ? x`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <bui-icon name="x-circle-fill" library="system"></bui-icon>
                      </slot>
                    </button>
                  ` : ""}
            ${this.passwordToggle && !this.disabled ? x`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible ? "hidePassword" : "showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible ? x`
                            <slot name="show-password-icon">
                              <bui-icon name="eye-slash" library="system"></bui-icon>
                            </slot>
                          ` : x`
                            <slot name="hide-password-icon">
                              <bui-icon name="eye" library="system"></bui-icon>
                            </slot>
                          `}
                    </button>
                  ` : ""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
            ${hasDatalist ? x`
                    <datalist id=${this.list}>
                      ${this.listOptions.split(",").map((option) => {
      return x` <option>${option}</option> `;
    })}
                    </datalist>
                  ` : ""}
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `;
  }
};
Input.styles = input_styles_default;
__decorateClass([
  i(".input__control")
], Input.prototype, "input", 2);
__decorateClass([
  t()
], Input.prototype, "hasFocus", 2);
__decorateClass([
  e2()
], Input.prototype, "title", 2);
__decorateClass([
  e2({ reflect: true })
], Input.prototype, "type", 2);
__decorateClass([
  e2()
], Input.prototype, "name", 2);
__decorateClass([
  e2()
], Input.prototype, "value", 2);
__decorateClass([
  defaultValue()
], Input.prototype, "defaultValue", 2);
__decorateClass([
  e2({ reflect: true })
], Input.prototype, "size", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Input.prototype, "filled", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Input.prototype, "pill", 2);
__decorateClass([
  e2()
], Input.prototype, "label", 2);
__decorateClass([
  e2()
], Input.prototype, "list", 2);
__decorateClass([
  e2()
], Input.prototype, "listOptions", 2);
__decorateClass([
  e2({ attribute: "help-text" })
], Input.prototype, "helpText", 2);
__decorateClass([
  e2({ type: Boolean })
], Input.prototype, "clearable", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Input.prototype, "disabled", 2);
__decorateClass([
  e2()
], Input.prototype, "placeholder", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Input.prototype, "readonly", 2);
__decorateClass([
  e2({ attribute: "password-toggle", type: Boolean })
], Input.prototype, "passwordToggle", 2);
__decorateClass([
  e2({ attribute: "password-visible", type: Boolean })
], Input.prototype, "passwordVisible", 2);
__decorateClass([
  e2({ attribute: "no-spin-buttons", type: Boolean })
], Input.prototype, "noSpinButtons", 2);
__decorateClass([
  e2({ reflect: true })
], Input.prototype, "form", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], Input.prototype, "required", 2);
__decorateClass([
  e2()
], Input.prototype, "pattern", 2);
__decorateClass([
  e2({ type: Number })
], Input.prototype, "minlength", 2);
__decorateClass([
  e2({ type: Number })
], Input.prototype, "maxlength", 2);
__decorateClass([
  e2()
], Input.prototype, "min", 2);
__decorateClass([
  e2()
], Input.prototype, "max", 2);
__decorateClass([
  e2()
], Input.prototype, "step", 2);
__decorateClass([
  e2()
], Input.prototype, "autocapitalize", 2);
__decorateClass([
  e2()
], Input.prototype, "autocorrect", 2);
__decorateClass([
  e2()
], Input.prototype, "autocomplete", 2);
__decorateClass([
  e2({ type: Boolean })
], Input.prototype, "autofocus", 2);
__decorateClass([
  e2()
], Input.prototype, "enterkeyhint", 2);
__decorateClass([
  e2({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], Input.prototype, "spellcheck", 2);
__decorateClass([
  e2()
], Input.prototype, "inputmode", 2);
__decorateClass([
  watch("disabled", { waitUntilFirstUpdate: true })
], Input.prototype, "handleDisabledChange", 1);
__decorateClass([
  watch("step", { waitUntilFirstUpdate: true })
], Input.prototype, "handleStepChange", 1);
__decorateClass([
  watch("value", { waitUntilFirstUpdate: true })
], Input.prototype, "handleValueChange", 1);
Input = __decorateClass([
  e("bui-input")
], Input);

export {
  Input
};
