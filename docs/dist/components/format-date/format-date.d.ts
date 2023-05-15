import BuckeyeElement from '../../internal/buckeye-element';
export default class FormatDate extends BuckeyeElement {
    private readonly localize;
    date: Date | string;
    weekday: 'narrow' | 'short' | 'long';
    era: 'narrow' | 'short' | 'long';
    year: 'numeric' | '2-digit';
    month: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
    day: 'numeric' | '2-digit';
    hour: 'numeric' | '2-digit';
    minute: 'numeric' | '2-digit';
    second: 'numeric' | '2-digit';
    timeZoneName: 'short' | 'long';
    timeZone: string;
    hourFormat: 'auto' | '12' | '24';
    render(): import("lit-html").TemplateResult<1> | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-format-date': FormatDate;
    }
}
