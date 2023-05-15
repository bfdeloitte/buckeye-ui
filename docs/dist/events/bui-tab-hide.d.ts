type TabHideEvent = CustomEvent<{
    name: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-tab-hide': TabHideEvent;
    }
}
export default TabHideEvent;
