type MutationEvent = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'bui-mutation': MutationEvent;
  }
}

export default MutationEvent;
