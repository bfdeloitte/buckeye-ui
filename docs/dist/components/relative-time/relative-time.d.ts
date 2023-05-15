import BuckeyeElement from '../../internal/buckeye-element';
export default class RelativeTime extends BuckeyeElement {
    private readonly localize;
    private updateTimeout;
    private isoTime;
    private relativeTime;
    private titleTime;
    date: Date | string;
    format: 'long' | 'short' | 'narrow';
    numeric: 'always' | 'auto';
    sync: boolean;
    disconnectedCallback(): void;
    render(): "" | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-relative-time': RelativeTime;
    }
}
