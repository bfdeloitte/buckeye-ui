type SlStartEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-start': SlStartEvent;
    }
}
export default SlStartEvent;
