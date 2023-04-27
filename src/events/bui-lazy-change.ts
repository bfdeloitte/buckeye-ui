type LazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-lazy-change': LazyChangeEvent;
  }
}

export default LazyChangeEvent;
