type HideEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-hide': HideEvent;
    }
}
export default HideEvent;
