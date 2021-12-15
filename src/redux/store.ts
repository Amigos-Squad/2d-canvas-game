import createSagaMiddleware from '@redux-saga/core';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { History, createBrowserHistory, createMemoryHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { Saga } from 'redux-saga';
import { userSlice, gameSlice, globalSlice, forumSlice } from './slices';
import { rootSaga } from './sagas';
import { isServer } from '@/utils';

export const getRootReducer = (history: History) =>
  combineReducers({
    user: userSlice,
    savedGame: gameSlice,
    globalState: globalSlice,
    forumState: forumSlice,
    router: connectRouter(history),
  });

const history = isServer
  ? createMemoryHistory({ initialEntries: ['/'] })
  : createBrowserHistory();

const preloadedState = isServer ? undefined : window.__PRELOADED_STATE__;

if (!isServer && window.__PRELOADED_STATE__) {
  delete window.__PRELOADED_STATE__;
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: getRootReducer(history),
  preloadedState,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: true,
      serializableCheck: true,
    }).concat(middleware),
});

sagaMiddleware.run(rootSaga as Saga<unknown[]>);
