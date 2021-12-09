import { ENVS } from 'config/webpack/assets/env';

export const YANDEX_API = 'https://ya-praktikum.tech/api/v2';
export const OWN_API = 'https://acapulco-spacestory-08.ya-praktikum.tech/api/v1';
export const BASE_API = '/api/v1';
export const HOME_URL = ENVS.__DEV__ ? 'http://localhost:3000/api/v1' : 'https://acapulco-spacestory-08.ya-praktikum.tech/api/v1';
