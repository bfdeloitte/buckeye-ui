type AfterShowEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-after-show': AfterShowEvent;
    }
}
export default AfterShowEvent;
