type InitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-initial-focus': InitialFocusEvent;
    }
}
export default InitialFocusEvent;
