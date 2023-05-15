type ExpandEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-expand': ExpandEvent;
    }
}
export default ExpandEvent;
