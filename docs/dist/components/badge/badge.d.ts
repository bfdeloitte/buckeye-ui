import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Badge extends BuckeyeElement {
    static styles: CSSResultGroup;
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    pill: boolean;
    pulse: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-badge': Badge;
    }
}
