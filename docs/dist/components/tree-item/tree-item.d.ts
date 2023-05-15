import '../checkbox/checkbox';
import '../icon/icon';
import '../spinner/spinner';
import BuckeyeElement from '../../internal/buckeye-element';
import type { CSSResultGroup, PropertyValueMap } from 'lit';
export default class TreeItem extends BuckeyeElement {
    static styles: CSSResultGroup;
    static isTreeItem(node: Node): boolean;
    private readonly localize;
    indeterminate: boolean;
    isLeaf: boolean;
    loading: boolean;
    selectable: boolean;
    expanded: boolean;
    selected: boolean;
    disabled: boolean;
    lazy: boolean;
    defaultSlot: HTMLSlotElement;
    childrenSlot: HTMLSlotElement;
    itemElement: HTMLDivElement;
    childrenContainer: HTMLDivElement;
    expandButtonSlot: HTMLSlotElement;
    connectedCallback(): void;
    firstUpdated(): void;
    private animateCollapse;
    private isNestedItem;
    private handleChildrenSlotChange;
    protected willUpdate(changedProperties: PropertyValueMap<TreeItem> | Map<PropertyKey, unknown>): void;
    private animateExpand;
    handleLoadingChange(): void;
    handleDisabledChange(): void;
    handleSelectedChange(): void;
    handleExpandedChange(): void;
    handleExpandAnimation(): void;
    handleLazyChange(): void;
    getChildrenItems({ includeDisabled }?: {
        includeDisabled?: boolean;
    }): TreeItem[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-tree-item': TreeItem;
    }
}
