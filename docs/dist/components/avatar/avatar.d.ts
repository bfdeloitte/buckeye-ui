import '../icon/icon';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Avatar extends BuckeyeElement {
    static styles: CSSResultGroup;
    private hasError;
    image: string;
    label: string;
    initials: string;
    loading: 'eager' | 'lazy';
    shape: 'circle' | 'square' | 'rounded';
    handleImageChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-avatar': Avatar;
    }
}
