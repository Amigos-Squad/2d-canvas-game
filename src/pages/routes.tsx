import React from 'react';
import loadable from '@loadable/component';
import { ROUTES } from '@/utils';
import { Loader } from '@/components';

const Login = loadable(() => import('./Auth'), {
  resolveComponent: (components) => components.Login,
  fallback: <Loader />,
});

const Registration = loadable(() => import('./Auth'), {
  resolveComponent: (components) => components.Registration,
  fallback: <Loader />,
});

const Main = loadable(() => import('./Main'), {
  resolveComponent: (components) => components.Main,
  fallback: <Loader />,
});

const Forum = loadable(() => import('./Forum'), {
  resolveComponent: (components) => components.Forum,
  fallback: <Loader />,
});

const Leaderboard = loadable(() => import('./Leaderboard'), {
  resolveComponent: (components) => components.Leaderboard,
  fallback: <Loader />,
});

const Profile = loadable(() => import('./Profile'), {
  resolveComponent: (components) => components.Profile,
  fallback: <Loader />,
});

/* const InsideTopic = loadable(() => import('./Forum'), {
  resolveComponent: (components) => components.Forum,
  fallback: <Loader />,
}); */

const ServerError = loadable(() => import('./Errors'), {
  resolveComponent: (components) => components.ServerError,
  fallback: <Loader />,
});

const PageNotFound = loadable(() => import('./Errors'), {
  resolveComponent: (components) => components.PageNotFound,
  fallback: <Loader />,
});

export type RouteItem = {
  key: string;
  path: ROUTES;
  exact: boolean;
  component: JSX.Element;
};

export const PRIVATE_ROUTES_MAP: Record<string, RouteItem> = {
  [ROUTES.HOME]: {
    key: '7d76ffa3',
    path: ROUTES.HOME,
    exact: true,
    component: <Main />,
  },
  [ROUTES.FORUM]: {
    key: '6d760fa3',
    path: ROUTES.FORUM,
    exact: true,
    component: <Forum />,
  },
  [ROUTES.LEADERBOARD]: {
    key: 'c51c4f1c',
    path: ROUTES.LEADERBOARD,
    exact: true,
    component: <Leaderboard />,
  },
  [ROUTES.PROFILE]: {
    key: '166a5f56',
    path: ROUTES.PROFILE,
    exact: true,
    component: <Profile />,
  },
};

export const USED_ROUTES = [
  {
    key: '76decc39',
    path: ROUTES.LOGIN,
    exact: true,
    component: <Login />,
  },

  {
    key: 'a4df7ba9',
    path: ROUTES.REGISTRATION,
    exact: true,
    component: <Registration />,
  },
  PRIVATE_ROUTES_MAP[ROUTES.HOME],
  PRIVATE_ROUTES_MAP[ROUTES.FORUM],
  PRIVATE_ROUTES_MAP[ROUTES.LEADERBOARD],
  PRIVATE_ROUTES_MAP[ROUTES.PROFILE],
  {
    key: 'db483dc2',
    path: ROUTES.NOT_FOUND,
    exact: false,
    component: <PageNotFound />,
  },
  {
    key: '9a625e90',
    path: ROUTES.SERVER_ERROR,
    exact: false,
    component: <ServerError />,
  },
];
