type LazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-lazy-load': LazyLoadEvent;
  }
}

export default LazyLoadEvent;
