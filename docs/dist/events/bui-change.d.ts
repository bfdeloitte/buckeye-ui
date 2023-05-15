type ChangeEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-change': ChangeEvent;
    }
}
export default ChangeEvent;
