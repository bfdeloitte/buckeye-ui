type CloseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-close': CloseEvent;
    }
}
export default CloseEvent;
