type AfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-after-expand': AfterExpandEvent;
    }
}
export default AfterExpandEvent;
