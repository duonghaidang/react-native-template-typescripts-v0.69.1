export interface ActionType<T> {
  type: any;
  payload: {items: T[]};
}
