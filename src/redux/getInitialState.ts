import { rootReducer } from './store';

export const getInitialState = (rewriteData?: Record<string, unknown>) => {
  return {
    ...rootReducer,
    ...rewriteData,
  };
};
