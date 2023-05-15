import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class BreadcrumbItem extends BuckeyeElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    href?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    rel: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-breadcrumb-item': BreadcrumbItem;
    }
}
