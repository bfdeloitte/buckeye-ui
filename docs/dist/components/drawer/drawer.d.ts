import '../icon-button/icon-button';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Drawer extends BuckeyeElement {
    static styles: CSSResultGroup;
    private readonly hasSlotController;
    private readonly localize;
    private modal;
    private originalTrigger;
    drawer: HTMLElement;
    panel: HTMLElement;
    overlay: HTMLElement;
    open: boolean;
    label: string;
    placement: 'top' | 'end' | 'bottom' | 'start';
    contained: boolean;
    noHeader: boolean;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private requestClose;
    private addOpenListeners;
    private removeOpenListeners;
    private handleDocumentKeyDown;
    handleOpenChange(): Promise<void>;
    handleNoModalChange(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-drawer': Drawer;
    }
}
