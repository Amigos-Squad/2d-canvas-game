import createSagaMiddleware from '@redux-saga/core';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Saga } from 'redux-saga';
import { userSlice, gameSlice } from './slices';
import { rootSaga } from './sagas';

const rootReducer = combineReducers({
  user: userSlice,
  savedGame: gameSlice,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      immutableCheck: true,
      serializableCheck: true,
    }).concat(middleware),
});

sagaMiddleware.run(rootSaga as Saga<unknown[]>);
