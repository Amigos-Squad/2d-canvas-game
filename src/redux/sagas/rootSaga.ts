import { all, spawn, call } from '@redux-saga/core/effects';
import { Saga } from '@redux-saga/types';
import {
  signInSaga,
  signUpSaga,
  loadUserSaga,
  preLoadUserSaga,
  signOutSaga,
} from './auth';

export function* rootSaga() {
  const sagas = [
    signInSaga,
    signUpSaga,
    loadUserSaga,
    preLoadUserSaga,
    signOutSaga,
  ];

  const retrySagas: Saga[] = yield sagas.map((saga) =>
    spawn(function* TempSaga() {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (err) {
          console.error(err);
        }
      }
    })
  );

  yield all(retrySagas);
}
