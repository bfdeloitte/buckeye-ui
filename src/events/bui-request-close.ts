type RequestCloseEvent = CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-request-close': RequestCloseEvent;
  }
}

export default RequestCloseEvent;
