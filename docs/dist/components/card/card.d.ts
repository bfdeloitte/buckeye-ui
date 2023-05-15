import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Card extends BuckeyeElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-card': Card;
    }
}
