type ResizeEvent = CustomEvent<{ entries: ResizeObserverEntry[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-resize': ResizeEvent;
  }
}

export default ResizeEvent;
