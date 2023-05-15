import BuckeyeElement from '../../internal/buckeye-element';
export default class FormatBytes extends BuckeyeElement {
    private readonly localize;
    value: number;
    unit: 'byte' | 'bit';
    display: 'long' | 'short' | 'narrow';
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-format-bytes': FormatBytes;
    }
}
