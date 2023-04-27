type SlShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-show': SlShowEvent;
  }
}

export default SlShowEvent;
