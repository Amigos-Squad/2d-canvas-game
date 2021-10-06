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

export const Main = loadable(() => import('./Main'), {
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

export const Profile = loadable(() => import('./Profile'), {
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

export const LazyPageNotFound = loadable(() => import('./Errors'), {
  resolveComponent: (components) => components.PageNotFound,
  fallback: <Loader />,
});

export type RouteItem = {
  path: ROUTES;
  exact?: boolean;
  component: JSX.Element;
};

export const PRIVATE_ROUTES_MAP: Record<string, RouteItem> = {
  [ROUTES.HOME]: {
    path: ROUTES.HOME,
    exact: true,
    component: <Main />,
  },
  [ROUTES.FORUM]: {
    path: ROUTES.FORUM,
    component: <Forum />,
  },
  [ROUTES.LEADERBOARD]: {
    path: ROUTES.LEADERBOARD,
    exact: true,
    component: <Leaderboard />,
  },
  [ROUTES.PROFILE]: {
    path: ROUTES.PROFILE,
    exact: true,
    component: <Profile />,
  },
};

export const USED_ROUTES = [
  {
    path: ROUTES.LOGIN,
    exact: true,
    component: <Login />,
  },
  {
    path: ROUTES.REGISTRATION,
    exact: true,
    component: <Registration />,
  },
  PRIVATE_ROUTES_MAP[ROUTES.HOME],
  PRIVATE_ROUTES_MAP[ROUTES.FORUM],
  PRIVATE_ROUTES_MAP[ROUTES.LEADERBOARD],
  PRIVATE_ROUTES_MAP[ROUTES.PROFILE],
  {
    path: ROUTES.SERVER_ERROR,
    exact: true,
    component: <ServerError />,
  },
  {
    path: ROUTES.NOT_FOUND,
    component: <LazyPageNotFound />,
  },
];
