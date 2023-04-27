type RepositionEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-reposition': RepositionEvent;
  }
}

export default RepositionEvent;
