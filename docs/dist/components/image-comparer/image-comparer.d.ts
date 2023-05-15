import '../icon/icon';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class ImageComparer extends BuckeyeElement {
    static styles: CSSResultGroup;
    private readonly localize;
    base: HTMLElement;
    handle: HTMLElement;
    position: number;
    private handleDrag;
    private handleKeyDown;
    handlePositionChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-image-comparer': ImageComparer;
    }
}
