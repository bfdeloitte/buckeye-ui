type CollapseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-collapse': CollapseEvent;
    }
}
export default CollapseEvent;
