import '../popup/popup';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
import type Popup from '../popup/popup';
export default class Tooltip extends BuckeyeElement {
    static styles: CSSResultGroup;
    private hoverTimeout;
    private readonly localize;
    defaultSlot: HTMLSlotElement;
    body: HTMLElement;
    popup: Popup;
    content: string;
    placement: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';
    disabled: boolean;
    distance: number;
    open: boolean;
    skidding: number;
    trigger: string;
    hoist: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private handleBlur;
    private handleClick;
    private handleFocus;
    private handleKeyDown;
    private handleMouseOver;
    private handleMouseOut;
    private hasTrigger;
    handleOpenChange(): Promise<void>;
    handleOptionsChange(): Promise<void>;
    handleDisabledChange(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-tooltip': Tooltip;
    }
}
