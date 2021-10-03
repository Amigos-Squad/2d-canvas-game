import { store } from '.';

export type AppDispatch = typeof store.dispatch;
export type Store = ReturnType<typeof store.getState>;
