type BlurEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-blur': BlurEvent;
  }
}

export default BlurEvent;
