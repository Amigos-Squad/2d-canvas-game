import { MemoryHistory } from 'history';
import { getRootReducer } from './store';

export const getInitialState = (
  history: MemoryHistory,
  rewriteData: Record<string, unknown> = {}
) => {
  return {
    reducer: getRootReducer(history),
    ...rewriteData,
  };
};
