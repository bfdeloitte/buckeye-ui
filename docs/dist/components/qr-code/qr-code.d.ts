import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class QrCode extends BuckeyeElement {
    static styles: CSSResultGroup;
    canvas: HTMLElement;
    value: string;
    label: string;
    size: number;
    fill: string;
    background: string;
    radius: number;
    errorCorrection: 'L' | 'M' | 'Q' | 'H';
    firstUpdated(): void;
    generate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-qr-code': QrCode;
    }
}
