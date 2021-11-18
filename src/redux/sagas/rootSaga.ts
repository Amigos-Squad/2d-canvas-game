import { all, spawn, call } from '@redux-saga/core/effects';
import { Saga } from '@redux-saga/types';
import {
  signInSaga,
  signUpSaga,
  loadUserSaga,
  preLoadUserSaga,
  signOutSaga,
  toggleThemeSaga,
} from './auth';

import {
  updateProfileSaga,
  updatePasswordSaga,
  updateAvatarSaga,
} from './user';

export function* rootSaga() {
  const sagas = [
    signInSaga,
    signUpSaga,
    loadUserSaga,
    toggleThemeSaga,
    preLoadUserSaga,
    signOutSaga,
    updateProfileSaga,
    updatePasswordSaga,
    updateAvatarSaga,
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
