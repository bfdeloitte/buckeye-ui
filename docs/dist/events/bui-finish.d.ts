type FinishEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-finish': FinishEvent;
    }
}
export default FinishEvent;
