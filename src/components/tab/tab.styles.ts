import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--bui-font-sans);
    font-size: var(--bui-font-size-small);
    font-weight: var(--bui-font-weight-semibold);
    border-radius: var(--bui-border-radius-medium);
    color: var(--bui-color-neutral-600);
    padding: var(--bui-spacing-medium) var(--bui-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--bui-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--bui-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--bui-focus-ring);
    outline-offset: calc(-1 * var(--bui-focus-ring-width) - var(--bui-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--bui-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--bui-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--bui-font-size-small);
    margin-inline-start: var(--bui-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--bui-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;
