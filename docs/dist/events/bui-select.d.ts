import type MenuItem from '../components/menu-item/menu-item';
type SlSelectEvent = CustomEvent<{
    item: MenuItem;
}>;
declare global {
    interface GlobalEventHandlersEventMap {
        'bui-select': SlSelectEvent;
    }
}
export default SlSelectEvent;
