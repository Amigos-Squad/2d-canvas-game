import {
  call,
  put,
  takeLeading,
  takeEvery,
  fork,
} from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { authAPI } from '@/api';
import { IUser } from '@/models';
import { ILoginForm, IRegistrationForm } from '@/modules';
import {
  signIn,
  signUp,
  loadUser,
  setUser,
  signOut,
  setLoadStatus,
  setToast,
  toggleTheme,
  setTheme,
} from '../slices';

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

function* toggleThemeWorker() {
  try {
    yield call(authAPI.toggleTheme);
    const theme: string = yield call(authAPI.loadTheme);
    yield put(setTheme(theme));
  } catch (e) {
    console.error(e);
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

export function* signInSaga() {
  yield takeLeading(signIn.type, signInWorker);
}

export function* signUpSaga() {
  yield takeLeading(signUp.type, signUpWorker);
}

export function* toggleThemeSaga() {
  yield takeLeading(toggleTheme.type, toggleThemeWorker);
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
