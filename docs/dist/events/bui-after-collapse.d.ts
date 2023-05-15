type AfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-after-collapse': AfterCollapseEvent;
    }
}
export default AfterCollapseEvent;
