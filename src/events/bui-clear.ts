type ClearEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-clear': ClearEvent;
  }
}

export default ClearEvent;
