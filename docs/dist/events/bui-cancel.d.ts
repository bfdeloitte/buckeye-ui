type CancelEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-cancel': CancelEvent;
    }
}
export default CancelEvent;
