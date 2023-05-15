import '../icon/icon';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Breadcrumb extends BuckeyeElement {
    static styles: CSSResultGroup;
    private readonly localize;
    private separatorDir;
    defaultSlot: HTMLSlotElement;
    separatorSlot: HTMLSlotElement;
    label: string;
    private getSeparator;
    private handleSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-breadcrumb': Breadcrumb;
    }
}
