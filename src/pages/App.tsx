import React, { memo, ReactElement } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { ErrorBoundaryWithRouter } from '@/components';
import { USED_ROUTES } from './routes';
import { AuthProvider } from './AuthProvider';

export const App = memo(
  (): ReactElement => (
    <AuthProvider>
      <ErrorBoundaryWithRouter>
        <Switch>
          {USED_ROUTES.map(({ path, exact, component }) => (
            <Route path={path} key={path} exact={exact}>
              {component}
            </Route>
          ))}
        </Switch>
      </ErrorBoundaryWithRouter>
    </AuthProvider>
  )
);
