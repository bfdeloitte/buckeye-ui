import '../popup/popup';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
import type Menu from '../menu/menu';
import type Popup from '../popup/popup';
import type SlSelectEvent from '../../events/bui-select';
export default class Dropdown extends BuckeyeElement {
    static styles: CSSResultGroup;
    popup: Popup;
    trigger: HTMLSlotElement;
    panel: HTMLSlotElement;
    private readonly localize;
    open: boolean;
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    disabled: boolean;
    stayOpenOnSelect: boolean;
    containingElement?: HTMLElement;
    distance: number;
    skidding: number;
    hoist: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    focusOnTrigger(): void;
    getMenu(): Menu | undefined;
    handleKeyDown(event: KeyboardEvent): void;
    handleDocumentKeyDown(event: KeyboardEvent): void;
    handleDocumentMouseDown(event: MouseEvent): void;
    handlePanelSelect(event: SlSelectEvent): void;
    handleTriggerClick(): void;
    handleTriggerKeyDown(event: KeyboardEvent): void;
    handleTriggerKeyUp(event: KeyboardEvent): void;
    handleTriggerSlotChange(): void;
    updateAccessibleTrigger(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    reposition(): void;
    addOpenListeners(): void;
    removeOpenListeners(): void;
    handleOpenChange(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-dropdown': Dropdown;
    }
}
