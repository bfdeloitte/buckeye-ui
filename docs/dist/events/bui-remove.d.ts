type RemoveEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-remove': RemoveEvent;
    }
}
export default RemoveEvent;
