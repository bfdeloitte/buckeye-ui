import '../icon/icon';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Radio extends BuckeyeElement {
    static styles: CSSResultGroup;
    checked: boolean;
    protected hasFocus: boolean;
    value: string;
    size: 'small' | 'medium' | 'large';
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private addEventListeners;
    private removeEventListeners;
    private handleBlur;
    private handleClick;
    private handleFocus;
    private setInitialAttributes;
    handleCheckedChange(): void;
    handleDisabledChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-radio': Radio;
    }
}
