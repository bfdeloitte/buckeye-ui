import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class ProgressBar extends BuckeyeElement {
    static styles: CSSResultGroup;
    private readonly localize;
    value: number;
    indeterminate: boolean;
    label: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-progress-bar': ProgressBar;
    }
}
