type LoadEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-load': LoadEvent;
    }
}
export default LoadEvent;
