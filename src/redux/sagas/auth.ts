import {
  call,
  put,
  takeLeading,
  takeEvery,
  fork,
} from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { authAPI, userAPI } from '@/api';
import { IUser } from '@/models';
import { ILoginForm, IRegistrationForm } from '@/modules';
import {
  signIn,
  oauthSignIn,
  signUp,
  loadUser,
  setUser,
  signOut,
  setLoadStatus,
  setToast,
  toggleTheme,
  setTheme,
} from '../slices';
import { oauthAPI } from '@/api/http/oauth.api';
import { setServiceId } from '../slices/globalSlice/globalSlice';

function* signInWorker({ payload }: PayloadAction<ILoginForm>) {
  try {
    yield call(authAPI.login, payload);

    const user: IUser = yield call(authAPI.loadUser);
    const { theme } = yield call(authAPI.loadBaseUser, user);

    yield put(setUser({ ...user, theme }));
  } catch (error: any) {
    yield put(setToast({ message: error.message }));
  }
}

function* oauthSignInWorker({ payload }: PayloadAction<string>) {
  try {
    yield call(oauthAPI.signIn, payload);
    const user: IUser = yield call(authAPI.loadUser);
    const { theme } = yield call(authAPI.loadBaseUser, user);

    yield put(setUser({ ...user, theme }));
  } catch (error: any) {
    yield put(setToast({ message: error.message }));
  }
}

function* signUpWorker({ payload }: PayloadAction<IRegistrationForm>) {
  try {
    yield call(authAPI.register, payload);
    const user: IUser = yield call(authAPI.loadUser);
    const { theme } = yield call(authAPI.loadBaseUser, user);

    yield put(setUser({ ...user, theme }));
  } catch (error: any) {
    yield put(setToast({ message: error.message }));
  }
}

function* signOutWorker() {
  try {
    yield fork(authAPI.logout);
    yield put(setUser(undefined));
  } catch (e) {
    console.error(e);
  }
}

function* loadUserWorker() {
  try {
    const user: IUser = yield call(authAPI.loadUser);
    const { theme } = yield call(authAPI.loadBaseUser, user);
    yield put(setUser({ ...user, theme }));
  } catch (e) {
    yield put(setLoadStatus(true));
  }
}

function* toggleThemeWorker({ payload }: PayloadAction<string>) {
  try {
    yield call(userAPI.toggleTheme);
    const theme: string = yield call(userAPI.loadTheme, payload);
    yield put(setTheme(theme));
  } catch (e) {
    console.error(e);
  }
}

function* getServiceIdWorker() {
  try {
    const response: Record<string, string> = yield call(oauthAPI.getServiceId);
    if (response && response.service_id) {
      yield put(setServiceId(response.service_id));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* signInSaga() {
  yield takeLeading(signIn.type, signInWorker);
}

export function* oauthSignInSaga() {
  yield takeLeading(oauthSignIn.type, oauthSignInWorker);
}

export function* signUpSaga() {
  yield takeLeading(signUp.type, signUpWorker);
}

export function* loadUserSaga() {
  yield takeEvery(loadUser.type, loadUserWorker);
}

export function* signOutSaga() {
  yield takeLeading(signOut.type, signOutWorker);
}

export function* preLoadUserSaga() {
  yield fork(loadUserWorker);
}

export function* getServiceIdSaga() {
  yield fork(getServiceIdWorker);
}

export function* toggleThemeSaga() {
  yield takeLeading(toggleTheme.type, toggleThemeWorker);
}
