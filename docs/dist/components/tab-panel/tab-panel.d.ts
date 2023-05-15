import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class TabPanel extends BuckeyeElement {
    static styles: CSSResultGroup;
    private readonly attrId;
    private readonly componentId;
    name: string;
    active: boolean;
    connectedCallback(): void;
    handleActiveChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-tab-panel': TabPanel;
    }
}
