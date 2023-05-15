import '../icon-button/icon-button';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Alert extends BuckeyeElement {
    static styles: CSSResultGroup;
    private autoHideTimeout;
    private readonly hasSlotController;
    private readonly localize;
    base: HTMLElement;
    open: boolean;
    closable: boolean;
    variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger';
    duration: number;
    firstUpdated(): void;
    private restartAutoHide;
    private handleCloseClick;
    private handleMouseMove;
    handleOpenChange(): Promise<void>;
    handleDurationChange(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    toast(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-alert': Alert;
    }
}
