import React, { memo, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { ErrorBoundaryWithRouter, Loader } from '@/components';

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

export const App = memo(
  (): ReactElement => (
    <ErrorBoundaryWithRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/registration">
          <Registration />
        </Route>

        <Route exact path="/forum">
          <Forum />
        </Route>

        <Route exact path="/leaderboard">
          <Leaderboard />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/500">
          <ServerError />
        </Route>

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </ErrorBoundaryWithRouter>
  )
);
