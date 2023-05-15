import BuckeyeElement from '../../internal/buckeye-element';
import TreeItem from '../tree-item/tree-item';
import type { CSSResultGroup } from 'lit';
export default class Tree extends BuckeyeElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    expandedIconSlot: HTMLSlotElement;
    collapsedIconSlot: HTMLSlotElement;
    selection: 'single' | 'multiple' | 'leaf';
    private lastFocusedItem;
    private readonly localize;
    private mutationObserver;
    private clickTarget;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    private getExpandButtonIcon;
    private initTreeItem;
    private handleTreeChanged;
    private syncTreeItems;
    private selectItem;
    private getAllTreeItems;
    private focusItem;
    private handleKeyDown;
    private handleClick;
    handleMouseDown(event: MouseEvent): void;
    private handleFocusOut;
    private handleFocusIn;
    private handleSlotChange;
    handleSelectionChange(): Promise<void>;
    get selectedItems(): TreeItem[];
    getFocusableItems(): TreeItem[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-tree': Tree;
    }
}
