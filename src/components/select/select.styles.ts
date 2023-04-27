import { css } from 'lit';
import componentStyles from '../../styles/component.styles';
import formControlStyles from '../../styles/form-control.styles';

export default css`
  ${componentStyles}
  ${formControlStyles}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--bui-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--bui-input-font-family);
    font-weight: var(--bui-input-font-weight);
    letter-spacing: var(--bui-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition: var(--bui-transition-fast) color, var(--bui-transition-fast) border,
      var(--bui-transition-fast) box-shadow, var(--bui-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--bui-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--bui-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--bui-spacing-2x-small);
  }

  .select__tags::slotted(bui-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(bui-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--bui-input-background-color);
    border: solid var(--bui-input-border-width) var(--bui-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--bui-input-background-color-disabled);
    border-color: var(--bui-input-border-color-disabled);
    color: var(--bui-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--bui-input-background-color-focus);
    border-color: var(--bui-input-border-color-focus);
    box-shadow: 0 0 0 var(--bui-focus-ring-width) var(--bui-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--bui-input-filled-background-color);
    color: var(--bui-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--bui-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--bui-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--bui-input-filled-background-color-focus);
    outline: var(--bui-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--bui-input-border-radius-small);
    font-size: var(--bui-input-font-size-small);
    min-height: var(--bui-input-height-small);
    padding-block: 0;
    padding-inline: var(--bui-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--bui-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--bui-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--bui-input-border-radius-medium);
    font-size: var(--bui-input-font-size-medium);
    min-height: var(--bui-input-height-medium);
    padding-block: 0;
    padding-inline: var(--bui-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--bui-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--bui-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--bui-input-border-radius-large);
    font-size: var(--bui-input-font-size-large);
    min-height: var(--bui-input-height-large);
    padding-block: 0;
    padding-inline: var(--bui-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--bui-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--bui-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--bui-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--bui-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--bui-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--bui-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--bui-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--bui-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--bui-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--bui-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--bui-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--bui-font-sans);
    font-size: var(--bui-font-size-medium);
    font-weight: var(--bui-font-weight-normal);
    box-shadow: var(--bui-shadow-large);
    background: var(--bui-panel-background-color);
    border: solid var(--bui-panel-border-width) var(--bui-panel-border-color);
    border-radius: var(--bui-border-radius-medium);
    padding-block: var(--bui-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox::slotted(bui-divider) {
    --spacing: var(--bui-spacing-x-small);
  }

  .select__listbox::slotted(small) {
    font-size: var(--bui-font-size-small);
    font-weight: var(--bui-font-weight-semibold);
    color: var(--bui-color-neutral-500);
    padding-block: var(--bui-spacing-x-small);
    padding-inline: var(--bui-spacing-x-large);
  }
`;
