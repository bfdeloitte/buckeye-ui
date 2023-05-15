import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Divider extends BuckeyeElement {
    static styles: CSSResultGroup;
    vertical: boolean;
    connectedCallback(): void;
    handleVerticalChange(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-divider': Divider;
    }
}
