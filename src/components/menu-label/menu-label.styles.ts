import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--bui-font-sans);
    font-size: var(--bui-font-size-small);
    font-weight: var(--bui-font-weight-semibold);
    line-height: var(--bui-line-height-normal);
    letter-spacing: var(--bui-letter-spacing-normal);
    color: var(--bui-color-neutral-500);
    padding: var(--bui-spacing-2x-small) var(--bui-spacing-x-large);
    user-select: none;
  }
`;
