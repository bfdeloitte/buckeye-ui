import '../icon/icon';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class IconButton extends BuckeyeElement {
    static styles: CSSResultGroup;
    button: HTMLButtonElement | HTMLLinkElement;
    private hasFocus;
    name?: string;
    library?: string;
    src?: string;
    href?: string;
    target?: '_blank' | '_parent' | '_self' | '_top';
    download?: string;
    label: string;
    disabled: boolean;
    private handleBlur;
    private handleFocus;
    private handleClick;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    render(): import("lit-html").TemplateResult<1 | 2>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-icon-button': IconButton;
    }
}
