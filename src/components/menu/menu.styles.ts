import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
    position: relative;
    background: var(--bui-panel-background-color);
    border: solid var(--bui-panel-border-width) var(--bui-panel-border-color);
    border-radius: var(--bui-border-radius-medium);
    padding: var(--bui-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(bui-divider) {
    --spacing: var(--bui-spacing-x-small);
  }
`;
