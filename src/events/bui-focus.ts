type FocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-focus': FocusEvent;
  }
}

export default FocusEvent;
