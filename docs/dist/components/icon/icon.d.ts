import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class Icon extends BuckeyeElement {
    static styles: CSSResultGroup;
    private static resolveIcon;
    private svg;
    name?: string;
    src?: string;
    label: string;
    library: string;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    private getUrl;
    handleLabelChange(): void;
    setIcon(): Promise<void>;
    render(): SVGElement | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-icon': Icon;
    }
}
