import path from 'path';

export const ROOT_DIR_FROM_WEBPACK = path.join(
  __dirname,
  __dirname.endsWith('assets') ? '../../../' : '../'
);

export const DIST_DIR = path.join(ROOT_DIR_FROM_WEBPACK, 'dist');
export const SERVER_DIR = path.join(ROOT_DIR_FROM_WEBPACK, 'server');
export const WATCH_SERVER_DIR = path.join(DIST_DIR, 'watchServer');
export const CLIENT_DIR = path.join(ROOT_DIR_FROM_WEBPACK, 'src');
