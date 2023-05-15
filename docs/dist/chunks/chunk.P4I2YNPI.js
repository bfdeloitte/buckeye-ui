import {
  component_styles_default
} from "./chunk.T6URVWFA.js";
import {
  i
} from "./chunk.D4QE2MLU.js";

// src/components/badge/badge.styles.ts
var badge_styles_default = i`
  ${component_styles_default}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--bui-font-weight-semibold);
    letter-spacing: var(--bui-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--bui-border-radius-small);
    border: solid 1px var(--bui-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--bui-color-primary-600);
    color: var(--bui-color-neutral-0);
  }

  .badge--success {
    background-color: var(--bui-color-success-600);
    color: var(--bui-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--bui-color-neutral-600);
    color: var(--bui-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--bui-color-warning-600);
    color: var(--bui-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--bui-color-danger-600);
    color: var(--bui-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--bui-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--bui-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--bui-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--bui-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--bui-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--bui-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

export {
  badge_styles_default
};
