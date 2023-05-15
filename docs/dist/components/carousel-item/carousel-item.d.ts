import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class CarouselItem extends BuckeyeElement {
    static styles: CSSResultGroup;
    static isCarouselItem(node: Node): boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-carousel-item': CarouselItem;
    }
}
