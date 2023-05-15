type TabShowEvent = CustomEvent<{
    name: string;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-tab-show': TabShowEvent;
    }
}
export default TabShowEvent;
