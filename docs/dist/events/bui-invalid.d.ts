type InvalidEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-invalid': InvalidEvent;
    }
}
export default InvalidEvent;
