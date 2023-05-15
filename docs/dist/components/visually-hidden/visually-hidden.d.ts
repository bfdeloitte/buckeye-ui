import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class VisuallyHidden extends BuckeyeElement {
    static styles: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-visually-hidden': VisuallyHidden;
    }
}
