import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class SlResizeObserver extends BuckeyeElement {
    static styles: CSSResultGroup;
    private resizeObserver;
    private observedElements;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleSlotChange;
    private startObserver;
    private stopObserver;
    handleDisabledChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-resize-observer': ResizeObserver;
    }
}
