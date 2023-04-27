import type TreeItem from '../components/tree-item/tree-item';

type SlSelectionChangeEvent = CustomEvent<{ selection: TreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-selection-change': SlSelectionChangeEvent;
  }
}

export default SlSelectionChangeEvent;
