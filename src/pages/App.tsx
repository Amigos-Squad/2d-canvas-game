import React, { memo, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ErrorBoundaryWithRouter } from '@/components';
import { USED_ROUTES } from './routes';
import { AuthProvider } from './AuthProvider';

export const App = memo(
  (): ReactElement => (
    <AuthProvider>
      <ErrorBoundaryWithRouter>
        <Switch>
          {USED_ROUTES.map(({ path, exact, component, key }) => (
            <Route path={path} exact={exact} key={key}>
              {component}
            </Route>
          ))}
        </Switch>
      </ErrorBoundaryWithRouter>
    </AuthProvider>
  )
);
