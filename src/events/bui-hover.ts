type HoverEvent = CustomEvent<{
  phase: 'start' | 'move' | 'end';
  value: number;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-hover': HoverEvent;
  }
}

export default HoverEvent;
