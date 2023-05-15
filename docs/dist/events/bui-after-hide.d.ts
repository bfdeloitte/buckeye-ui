type AfterHideEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-after-hide': AfterHideEvent;
    }
}
export default AfterHideEvent;
