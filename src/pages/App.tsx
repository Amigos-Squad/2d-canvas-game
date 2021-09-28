import React, { createContext, memo, ReactElement, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { ErrorBoundaryWithRouter, Loader } from '@/components';
import { ROUTES } from '.';
import { store } from '@/store';

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
      <ProvideAuth>
        <Switch>
          <PrivateRoute exact path={ROUTES.HOME}>
            <Main />
          </PrivateRoute>

          <Route exact path={ROUTES.LOGIN}>
            <Login />
          </Route>

          <Route exact path={ROUTES.REGISTRATION}>
            <Registration />
          </Route>

          <PrivateRoute exact path={ROUTES.FORUM}>
            <Forum />
          </PrivateRoute>

          <PrivateRoute exact path={ROUTES.LEADERBOARD}>
            <Leaderboard />
          </PrivateRoute>

          <PrivateRoute exact path={ROUTES.PROFILE}>
            <Profile />
          </PrivateRoute>

          <Route exact path={ROUTES.SERVER_ERROR}>
            <ServerError />
          </Route>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </ProvideAuth>
    </ErrorBoundaryWithRouter>
  )
);

const authContext = createContext(false);

function ProvideAuth({ children }: {children: any}) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  return store.getState().user.isLoggedIn
}

function PrivateRoute({ children, ...rest }: {children: React.ReactNode, exact: boolean, path: string}) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
      auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}