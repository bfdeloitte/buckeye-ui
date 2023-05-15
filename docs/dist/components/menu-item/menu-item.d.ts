import '../icon/icon';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class MenuItem extends BuckeyeElement {
    static styles: CSSResultGroup;
    private cachedTextLabel;
    defaultSlot: HTMLSlotElement;
    menuItem: HTMLElement;
    type: 'normal' | 'checkbox';
    checked: boolean;
    value: string;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleDefaultSlotChange;
    private handleHostClick;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    handleTypeChange(): void;
    getTextLabel(): string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-menu-item': MenuItem;
    }
}
