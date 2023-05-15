import '../icon-button/icon-button';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Tag extends BuckeyeElement {
    static styles: CSSResultGroup;
    private readonly localize;
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text';
    size: 'small' | 'medium' | 'large';
    pill: boolean;
    removable: boolean;
    private handleRemoveClick;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-tag': Tag;
    }
}
