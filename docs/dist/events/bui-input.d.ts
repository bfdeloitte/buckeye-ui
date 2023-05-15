type InputEvent = CustomEvent<Record<PropertyKey, never>>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-input': InputEvent;
    }
}
export default InputEvent;
