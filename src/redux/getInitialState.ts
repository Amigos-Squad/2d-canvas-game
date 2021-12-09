import { MemoryHistory } from 'history';
import { getRootReducer } from './store';

export const getInitialState = (history: MemoryHistory) => {
  return getRootReducer(history);
};
