type ErrorEvent = CustomEvent<{
    status?: number;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-error': ErrorEvent;
    }
}
export default ErrorEvent;
