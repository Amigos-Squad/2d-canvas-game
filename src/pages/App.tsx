import React, { memo, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { ErrorBoundaryWithRouter, Loader } from '@/components';
import { ROUTES } from '.';

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

const ServerError = loadable(() => import('./Errors'), {
  resolveComponent: (components) => components.ServerError,
  fallback: <Loader />,
});

const PageNotFound = loadable(() => import('./Errors'), {
  resolveComponent: (components) => components.PageNotFound,
  fallback: <Loader />,
});

const errorHandler = () => {};

export const App = memo(
  (): ReactElement => (
    <ErrorBoundaryWithRouter
      handler={errorHandler}
      errorComponent={<div>1</div>}
    >
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Main />
        </Route>

        <Route exact path={ROUTES.LOGIN}>
          <Login />
        </Route>

        <Route exact path={ROUTES.REGISTRATION}>
          <Registration />
        </Route>

        <Route exact path={ROUTES.FORUM}>
          <Forum />
        </Route>

        <Route exact path={ROUTES.LEADERBOARD}>
          <Leaderboard />
        </Route>

        <Route exact path={ROUTES.PROFILE}>
          <Profile />
        </Route>

        <Route exact path={ROUTES.SERVER_ERROR}>
          <ServerError />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </ErrorBoundaryWithRouter>
  )
);
