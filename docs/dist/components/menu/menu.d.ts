import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
import type MenuItem from '../menu-item/menu-item';
export interface MenuSelectEventDetail {
    item: MenuItem;
}
export default class Menu extends BuckeyeElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    connectedCallback(): void;
    private handleClick;
    private handleKeyDown;
    private handleMouseDown;
    private handleSlotChange;
    private isMenuItem;
    getAllItems(): MenuItem[];
    getCurrentItem(): MenuItem | undefined;
    setCurrentItem(item: MenuItem): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-menu': Menu;
    }
}
